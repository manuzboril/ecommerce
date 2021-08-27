import "../estilos/item.css";

const Item = (props) => {

    return (
            <section className="item">
                <h4 className="itemTitle">{props.item.title}</h4> 
                <p className="itemDescription">{props.item.description}</p>
                <h5 className="itemPrice">${props.item.price}</h5>                          
            </section>
            
    )
}

export default Item;