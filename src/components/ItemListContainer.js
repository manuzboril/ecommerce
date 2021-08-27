import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import {useEffect, useState} from "react";

const Item = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>
            resolve([
                {id:1, destacado: false, title:'Almendras', description:'Activadas y deshidratadas (250g)', price:460, pictureUrl:''},
                {id:2, destacado: false, title:'Nueces Pecan', description:'Activadas y deshidratadas (250g)', price:375, pictureUrl:''},
                {id:3, destacado: true, title:'Dátiles Medjoul', description:'Sin hueso (100g)', price:320, pictureUrl:''},
                {id:4, destacado: true, title:'Castañas de Cajú', description:'Tostadas, sin sal (250g)', price:450, pictureUrl:''},
                {id:4, destacado: false, title:'Mix frutos secos', description:'Almendras, nueces, castañas de Cajú y maníes (500g)', price:660, pictureUrl:''},
                {id:4, destacado: true, title:'Pistachos', description:'Tostados, sin sal (150g)', price:370, pictureUrl:''},
            ]),1000 
        )   
    })
}


const ItemListContainer = (props) => {

    let [ItemsArray, cambioState] = useState([])

    useEffect(() => {
        Item().then((data) => {
            let aux = data.filter((producto) => producto.destacado);
            cambioState(aux);
            console.log(ItemsArray)
        })
    }, [])

    return (

        <ul>
            <ItemList items={ItemsArray}/>
            <ItemCount stock={5} initial={0} onAdd={()=>{}}/> 
        </ul>
    )
}

export default ItemListContainer;