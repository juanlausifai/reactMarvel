

function ListadoDeHeroes(props) {
    //console.log(props.heroes)
    //console.log(props.selectedHeroe)
   
    return (
      props.heroes.length > 0 && (
        <div className="col s12 m4">
          <ul className="collection" >
          
          <li className="collection-header"><h4 style={{color:props.colorWord}}>Listado de heroes</h4></li>
            {props.heroes.map((elemento,index) => {
              
              let backgroundColorSelected=props.backgroundColorTheme;
              
              if(index===props.selectedHeroe){
                backgroundColorSelected="lightblue";
                
              }
              return (
                <li 
                style={{backgroundColor:backgroundColorSelected}}
                className="collection-item avatar">
                    <img src={elemento.thumbnail.path +"."+ elemento.thumbnail.extension} alt={elemento.name} class="circle"/>
                    <a 
                    onClick={()=>{
                      props.setSelectedHeroe(index);
                    }}
                     className="title">{
                     elemento.name}
                     </a>
                </li>    
              );
            })}
          </ul>
        </div>
      )
    );
  }
  
  export default ListadoDeHeroes;