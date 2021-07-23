function ListadoDeHeroes(props) {
    console.log(props.heroes)
    return (
      props.heroes.length > 0 && (
        <div className="col s12 m4">
          <ul className="collection">
          
          <li className="collection-header"><h4>Listado de heroes</h4></li>
            {props.heroes.map((elemento) => {
              return (
                <li class="collection-item avatar">
                    <img src={elemento.thumbnail.path +"."+ elemento.thumbnail.extension} alt={elemento.name} class="circle"/>
                    <a href="#!" className="title">{elemento.name}</a>
                </li>    
              );
            })}
          </ul>
        </div>
      )
    );
  }
  
  export default ListadoDeHeroes;