import {useState} from "react";

const ItemCount = ({stock, onAdd, initial}) => {

    let [contador, setContador] = useState(initial)

    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > initial) {
            setContador(contador - 1)
        }
    }

    const agregar = () => {
        if(contador > 0){
            onAdd(contador)
            console.log("Agregado al carrito")
        }
    }

    return(
        <>
          <p>Contador: {contador}</p>
          <button onClick={sumar}>+</button> 
          <button onClick={restar}>-</button>  
          <button disabled={contador>0?false:true} onClick={agregar}>Agregar al carrito</button>   
        </>
    )
}

export default ItemCount;