import { useEffect, useState } from "react";
//import item from "../utils/item";
import desafio from "../utils/promesa";
import ItemDetail from "./ItemDetail";
const {item} = require("../utils/item");

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        desafio(item[0])
        .then(resultado => setProduct(resultado)) 
        .catch(err => console.log(err))
    }, []);

    return (
        
        <ItemDetail item = {product} />
           
    );

    }