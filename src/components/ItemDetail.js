

const ItemDetail = ({item}) => {
    

    return (
        <>
         
    {
        item.map(() => (
        <div className="Productos">
        <h4>{item.nombre}</h4>
        <p>{item.precio}</p>
        <p>{item.descripcion}</p>
        <img src={item.pictureUrl} alt=""/>
        </div>
        ))
    }
        </>
    );
}

export default ItemDetail;