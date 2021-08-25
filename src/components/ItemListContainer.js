const ItemListContainer = (props) => {

    const {producto, categoria} = props;

    return (

        <ul> 
            <li>{producto}</li>
            <li>{categoria}</li>
        </ul>
          
    )

}

export default ItemListContainer;