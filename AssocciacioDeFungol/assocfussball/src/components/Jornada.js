import { useState } from "react";
import primeraM from "../data/primeraM";

function Jornada(){

    const [jornada, setJornada] = useState([]);
    const teams = primeraM;

    function handleMatches(){
        teams.sort((a,b)=> Math.random()-0.5);
        teams.map((item, i)=>{
            if(i < teams.length/2){
                setJornada(jornada.push([item]))
                console.log(jornada);
            }else{
                setJornada(jornada.push(item[i-10]))
                console.log(jornada);
            }
            // eslint-disable-next-line array-callback-return
            return
        } )
    }

    return(
        <div className="view-jornada">
            <button onClick={()=>handleMatches()}>Crear Jornada</button>
            {jornada && <p>{jornada}</p>}
            <div className="matches">
                <div className="team">
                <img src="img/equipos_primera/alaves.png" width={60} height={50} alt="" />
                    <p>Deportivo Alaves</p>
                </div>
                <h3>vs</h3>
                <div className="team">
                <img src="img/equipos_primera/barcelona.png" width={60} height={50} alt="" />
                    <p>FC Barcelona</p>
                </div>
            </div>
        </div>
    )
}

export default Jornada;