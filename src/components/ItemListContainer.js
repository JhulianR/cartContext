import { useEffect, useState } from "react"
import productos from "../utils/item";
import desafio from "../utils/promesa";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        desafio(productos)
        .then(resultado => setProducts(resultado)) 
        .catch(err => console.log(err))
    }, [])

    return (
    <>
    {
        products.map(productos => (
        <div className="Productos">
        <h4>{productos.nombre}</h4>
        <p>{productos.precio}</p>
        <p>{productos.descripcion}</p>
        <img src={productos.pictureUrl} alt=""/>
        </div>
        ))
    }
    </>
    )

}

