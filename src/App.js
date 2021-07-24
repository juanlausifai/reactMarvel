import "./styles.css";
import React,{useEffect,useState} from "react";
import charactersInfo from "./data/marvel/characters.json";
import DetalleDeHeroe from "./components/DetalleDeHeroe";
import ListadoDeHeroes from "./components/ListadoDeHeroes";
import CardMessageError from "./components/message/CardMessageError";

export default function App() {
  //console.log(charactersInfo.data.results)

  //El heroe seleccionado
  const [selectedHeroe,setSelectedHeroe] = useState(0);

  //El theme actual
  const [selectedTheme,setSelectedTheme] = useState(true);

  //Cargar heroe
  const [cargarMasHeroes,setCargarMasHeroes] = useState(false);
  
  let backgroundColorTheme='white'
  let colorWord="#000000";
  if (!selectedTheme) {
    backgroundColorTheme="#000000";
    colorWord="#9e9e9e";
  }
  
  charactersInfo.data.results=[];

  //Asincronico llamado a la API
  useEffect(()=>{
    async function getHeroes(){
      return fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=1f8617b0107bd7fb18974d1d05c648df")
      .then((response)=>{
        //console.log(response)
        return response.json();
        
      });
      
    }
    if(cargarMasHeroes){
      let heroes= getHeroes();
      console.log(heroes)
      
    }
    
  });
  
  return (
    <div className="row" style={{backgroundColor:backgroundColorTheme}}>
      <div className="App col s12 m12" >
        <h1 style={{color:colorWord}}>Caracteres de Marvel</h1>
        
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

        <div className="App col s12 m12 mt-5 mb-5">
          <a 
          className="waves-effect waves-light btn" 
          onClick={()=>{
            setCargarMasHeroes(true);
          }}
          >Cargar Heroes</a>
        </div>

        {charactersInfo.data.results.length>0 && ( 
        <>  
        <ListadoDeHeroes colorWord={colorWord} backgroundColorTheme={backgroundColorTheme} heroes={charactersInfo.data.results} selectedHeroe={selectedHeroe} setSelectedHeroe={setSelectedHeroe}/>
        <DetalleDeHeroe colorWord={colorWord} backgroundColorTheme={backgroundColorTheme} heroe={charactersInfo.data.results[selectedHeroe]}/>
        </>
        )}
        {charactersInfo.data.results.length===0 && (
          <CardMessageError message="No existen resultados"></CardMessageError>
        )}  
      </div>
    </div>
  );
}
