
import { useEffect, useState } from "react";
import productos from "../utils/item";
import desafio from "../utils/promesa";
import ItemDetail from "./ItemDetail";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        desafio(productos)
        .then(resultado => setProduct(resultado)) 
        .catch(err => console.log(err))
    }, []);

    return (
        
        <ItemDetail item = {product} /> 
           
    );

    }