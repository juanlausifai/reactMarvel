import "./styles.css";
import React,{useEffect,useState} from "react";
import charactersInfo from "./data/marvel/characters.json";
import DetalleDeHeroe from "./components/DetalleDeHeroe";
import ListadoDeHeroes from "./components/ListadoDeHeroes";
import CardMessageError from "./components/message/CardMessageError";
import { getHeroes } from "./services/marvel";

export default function App() {
  //console.log(charactersInfo.data.results)

  // Lista de heroes
  const [heroes, setHeroes] = useState([]);

  //El heroe seleccionado
  const [selectedHeroe,setSelectedHeroe] = useState(0);

  //Cantidad de heroes que ya vimos
  const [first, setFirst] = useState(0);

  //El theme actual
  const [selectedTheme,setSelectedTheme] = useState(true);

  //Cargar heroe
  const [isLoading, setLoading] = useState(false);

  // estado para busqueda
  const [busquedaActual, setBusquedaActual] = useState("");
  
  let backgroundColorTheme='white'
  let colorWord="#000000";
  if (!selectedTheme) {
    backgroundColorTheme="#000000";
    colorWord="#9e9e9e";
  }
  
  const selectedHeroeData = heroes ? heroes[selectedHeroe] : undefined;

  //Asincronico llamado a la API
  useEffect(() => {
    if (isLoading) {
      async function loadHeroes() {
        const res = await getHeroes(first, 20, busquedaActual);
        setLoading(false);
        const newHeroList = [...heroes, ...res.data.results];
        setHeroes(newHeroList);
        setFirst(first + 20);
      }
      loadHeroes();
    }
  }, [isLoading, first, busquedaActual, heroes]);
  
  return (
    <div className="row" style={{backgroundColor:backgroundColorTheme}}>
      <div className="App col s12 m12" >
        <h1 style={{color:colorWord}}>Personajes de Marvel</h1>
        
        <div>
          <input onChange={(e)=>{
            setBusquedaActual(e.target.value);
          }} type="text" value={busquedaActual}></input>

        <button
          onClick={() => {
            //console.log("search " + busquedaActual);
            setHeroes([]);
            setSelectedHeroe(0);
            setFirst(0);
            setLoading(true);
          }}
          type="button"
          className="waves-effect waves-light btn button-orange"
        >
          Buscar
        </button>

        </div>    
        <div className="switch">
        <label>
          Light
          <input type="checkbox" onClick={(e)=>{
            if (selectedTheme) {
              setSelectedTheme(false)
            }else{
              setSelectedTheme(true)
            }
          }}/>
          <span className="lever"></span>
          Dark
        </label>
        </div>
        {isLoading && (  
          <div class="preloader-wrapper small active">
            <div class="spinner-layer spinner-green-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
         )}
        {!isLoading && ( 
        <div className="App col s12 m12 mt-5 mb-5 ">
          <a 
          className="waves-effect waves-light btn button-orange" 
          onClick={()=>{
            setLoading(!isLoading);
          }}
          >Cargar Heroes</a>
        </div>
        )}
        
        {heroes.length>0 && ( 
        <>  
        <ListadoDeHeroes colorWord={colorWord} backgroundColorTheme={backgroundColorTheme} heroes={heroes} selectedHeroe={selectedHeroe} setSelectedHeroe={setSelectedHeroe}/>
        <DetalleDeHeroe colorWord={colorWord} backgroundColorTheme={backgroundColorTheme} heroe={heroes[selectedHeroe]}/>
        </>
        )}
        {heroes.length===0 && (
          <CardMessageError message="No existen resultados"></CardMessageError>
        )}  
      </div>
    </div>
  );
}
