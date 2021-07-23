function ListaDeLinks(props) {
    return (
      props.lists.length > 0 && (
        <>
          <h4>{props.title}</h4>
          <ul>
            {props.lists.map((elemento) => {
              return (
                <li>
                  <a href={elemento.resourceURI}>{elemento.name}</a>
                </li>
              );
            })}
          </ul>
        </>
      )
    );
  }
  
  export default ListaDeLinks;
  