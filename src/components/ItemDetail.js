import productos from "../utils/item";


const ItemDetail = ({item}) => {
    

    return (
        
        <div className="detalleProducto">
            <h4>{productos[0].nombre}</h4>
            <p>{productos[0].precio}</p>
            <p>{productos[0].descripcion}</p>
            <img src={productos[0].pictureUrl} alt=""/>
        </div>
       
    );
}

export default ItemDetail;