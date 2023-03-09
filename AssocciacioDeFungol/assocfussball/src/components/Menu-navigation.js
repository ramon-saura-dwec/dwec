import { Link } from "react-router-dom";

function MenuNavigation(){
    return(
        <div className="menu-navigation">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/jornada'}>Jornada</Link></li>
                <li><Link to={'/quiniela'}>Quiniela</Link></li>
                <li><Link to={'/api'}>API</Link></li>
            </ul>
        </div>
    );
}

export default MenuNavigation;