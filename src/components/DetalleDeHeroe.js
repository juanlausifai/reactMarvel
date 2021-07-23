import ListaDeLinks from "./ListaDeLinks";


function DetalleDeHeroe(props){
    console.log(props.heroe)
    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <img 
                    className="HeroImg"
                    src={props.heroe.thumbnail.path +"."+ props.heroe.thumbnail.extension} 
                    alt={props.heroe.name}/>
                    <h2>{props.heroe.name}</h2>
                    
                    <ListaDeLinks lists={props.heroe.comics.items} title="Comics" />
                    <ListaDeLinks lists={props.heroe.series.items} title="Series" />
                    <ListaDeLinks lists={props.heroe.stories.items} title="Stories" />
                    <ListaDeLinks lists={props.heroe.events.items} title="Events" />
                </div>
            </div>
        </div>
        );
}

export default DetalleDeHeroe;