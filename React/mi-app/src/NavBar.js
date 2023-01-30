import React from "react";
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <nav className="navbar">
            <h1>El Blog de DWEC</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
            </div>
        </nav>
    )
}

export default NavBar;