import React from "react";

function Home() {
    const handleClick = () =>{
        console.log('ep toni');
    }

    const handleClickDeNuevo = (nombre) =>{

        let arrNoms = nombre.sort(()=>{return Math.random() - 0.5});

        for (let i = 0; i < arrNoms.length; i++) {
            console.log(arrNoms[i]);            
        }
        
    }


    return(
        <div className="home">
            <h2>Home component</h2>
            <button onClick={handleClick} >Dale!</button>
            <button onClick={()=>handleClickDeNuevo(['xec', 'mon', 'susy', 'lluis', 'yussef'])} >Dale2!</button>
        </div>
        
    )
}

export default Home;