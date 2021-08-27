import Item from './Item'
import "../estilos/itemList.css";

const ItemList = (props) => {
    console.log(props.items)

    return (
            <section className="itemContainer">    
            {props.items.length == 0 ? (<h2>Cargando...</h2>
            ) : (                
                    props.items.map(item => 
                        <Item item={item} />)                                    
            )}
            </section> 
    )
}

export default ItemList;