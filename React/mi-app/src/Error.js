import React from "react";
import { Link } from "react-router-dom";

const Error = () =>{
    return(
        <div className="error">
            <h2>¡Error!</h2>
            <p>The page doesn't work or not exist</p>
            <Link to="/">Back to the home page</Link>
        </div>
    )
}

export default Error;