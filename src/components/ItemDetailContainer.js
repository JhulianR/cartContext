
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import desafio from "../utils/promesa";
import ItemDetail from "./ItemDetail";
const {item} = require('../utils/item');

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        desafio(2000, item.find(productos =>productos.id == id))
        .then(resultado => setProduct(resultado)) 
        .catch(err => console.log(err))
    }, [id]);

    return (
        
        <ItemDetail item = {product} /> 
           
    );

    }