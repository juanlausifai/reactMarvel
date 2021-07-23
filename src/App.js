import "./styles.css";
import charactersInfo from "./data/marvel/characters.json";
import DetalleDeHeroe from "./components/DetalleDeHeroe";
import ListadoDeHeroes from "./components/ListadoDeHeroes";

export default function App() {
  //console.log(charactersInfo.data.results)
  return (
    <div className="row">
      <div className="App col s12 m12">
        <h1>Caracteres de Marvel</h1>
        <ListadoDeHeroes heroes={charactersInfo.data.results}/>
        <DetalleDeHeroe heroe={charactersInfo.data.results[0]}/>
      </div>
    </div>
  );
}
