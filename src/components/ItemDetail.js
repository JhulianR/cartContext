import { useState } from "react";
import { Link } from "react-router-dom";
import productos from "../utils/item";
import ItemCount from "./ItemCount";



const ItemDetail = ({item}) => {
    
    const [goToCart, setGoToCart] = useState(false);

    onAdd = (quantity) => {
       setGoToCart(true);
    }
    return (
        
        <div className="detalleProducto">
            <h4>{productos[0].nombre}</h4>
            <p>{productos[0].precio}</p>
            <p>{productos[0].descripcion}</p>
            <img src={productos[0].pictureUrl} alt=""/>
            {
                goToCart
                ? <Link to="/cart">Terminar compra </Link>
                : <ItemCount stock={5} initial={1} onAdd={onAdd} />
            }
        </div>
       
    );
}

export default ItemDetail;