import { Link } from 'react-router-dom';
import Logo from '../img/popcorn.png';

function Navbar(){
   return(
      <div className="navbar">
         <img src={Logo} width='200' alt="Logo" />
         <h1>E<span>R</span> Cine!</h1>
         <div>
            <Link to='/' >Home</Link>
            <Link to='/movies' >Movies</Link>
         </div>
      </div>
   )
}

export default Navbar;