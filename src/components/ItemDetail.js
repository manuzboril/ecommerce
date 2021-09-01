import ItemCount from "./ItemCount"
import imagenProd from "../img/image.jpg"

const ItemDetail = ({data}) => {
   return(
      <li key={data.id}>
         <img src={imagenProd} alt="" className="img-detail"/>
         <h2>{data.nombre}</h2>
         <span>$ {data.precio}</span>
         <p>{data.descripcion}</p>
         <ItemCount initial={0} stock={5} onAdd={(cantidad) => {console.log(cantidad + " x " + data.nombre)}} /> 
      </li>
   )
}
export default ItemDetail;