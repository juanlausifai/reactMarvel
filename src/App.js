import "./styles.css";
import React,{useState} from "react";
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
  
  let backgroundColorTheme='white'
  let colorWord="#000000";
  if (!selectedTheme) {
    backgroundColorTheme="#000000";
    colorWord="#9e9e9e";
  }
  charactersInfo.data.results=[];
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
