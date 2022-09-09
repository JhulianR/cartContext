import { Link } from "react-router-dom"

export const navBarOptions = [{ category:'Inicio', id:'Inicio'}, {category:'Productos', id:'Productos'} , {category:'Feas', id: 'Feas'}, {category:'Bonitas', id: 'Bonitas'}]

const hola = () => {
    if (navBarOptions.category = 'Bonitas') {
        <Link to="/category/1"> navBarOptions.category </Link>
    }
}