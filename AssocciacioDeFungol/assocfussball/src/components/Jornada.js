import { useState } from "react";
import primeraM from "../data/primeraM";
import Match from "./Match";

function Jornada(){

    const [jornadaM, setJornadaM] = useState([]);
    const teams = primeraM;

    function handleMatches(){
        let home = [];
        let away = [];
        setJornadaM([]);
        teams.sort((a,b)=> Math.random()-0.5);
        teams.map((item, i)=>{
            if(i%2 === 0){
                home.push(item);
            }else{
                away.push(item);
            }
            // eslint-disable-next-line array-callback-return
            return
        } )

        for (let i = 0; i < home.length; i++) {
            let match = [];

            match.push(...match, home[i], away[i])

            setJornadaM(jornadaM=>[...jornadaM, match]);
        }

    }

    return(
        <div className="view-jornada">
            <button onClick={()=>handleMatches()}>Crear Jornada</button>
            {jornadaM && jornadaM.map((match, i)=>{
               return <Match key={i} match={match}></Match>
            })}
        </div>
    )
}

export default Jornada;