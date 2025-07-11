import { Link } from 'react-router-dom';
import './Navbar.css';
export default Navbar;

function Navbar(){
return (
<nav className='navbar'>
    <div className='navbarLogo'>MyPortfolio</div>
     <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
</nav>
);
}