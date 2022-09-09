
import { Link } from 'react-router-dom';
import {navBarOptions} from '../helpers/strings'
import CartWidget from './CartWidget';


function Navbar() {
    return (
      <header>
        <ul className="navbar">
          <Link to='/'> <li>Inicio</li> </Link>
          
          <li>Productos</li>
          <li>Sobre Nosotros</li>
      <CartWidget/>
      </ul>
      
  </header>
    );
  }

  export default Navbar;