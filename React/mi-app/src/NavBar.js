import React from "react";

function NavBar(){
    return(
        <nav className="navBar">
            <h1>El Blog de DWEC</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/crear">Crear Blog</a>
            </div>
        </nav>
    )
}

export default NavBar;