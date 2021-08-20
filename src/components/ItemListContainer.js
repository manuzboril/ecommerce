const ItemListContainer = (props) => {

    const {producto, categoria} = props;

    return (

        <ul> 
            <li>{props.producto}</li>
            <li>{props.categoria}</li>
        </ul>
          
    )

}

export default ItemListContainer;