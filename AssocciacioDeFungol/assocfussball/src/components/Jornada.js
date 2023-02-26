import { useEffect, useState } from "react";
import primeraM from "../data/primeraM";
import primeraF from "../data/primeraF";
import Match from "./Match";

function Jornada(){

    const [jornadaM, setJornadaM] = useState([]);
    const [jornadaF, setJornadaF] = useState([]);
    const teams = primeraM;
    const teamsF = primeraF;

    useEffect(()=>{
        if(jornadaM.length > 0){
            if(!localStorage.getItem('weeknumber')){
                localStorage.setItem('weeknumber', 1);
            }
            
           let weeknumber = localStorage.getItem('weeknumber');
           localStorage.setItem("jornadaM" + weeknumber, JSON.stringify(jornadaM));
           localStorage.setItem("jornadaF" + weeknumber, JSON.stringify(jornadaF));
           localStorage.setItem('weeknumber', (Number(weeknumber) + 1));
        }
    })

    function handleMatches(){
        let home = [];
        let away = [];
        setJornadaM([]);
        setJornadaF([]);
        teams.sort((a,b)=> Math.random()-0.5);
        teamsF.sort((a,b)=> Math.random()-0.5);
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

        home = [];
        away = [];

        teamsF.map((item, i)=>{

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

            setJornadaF(jornadaF=>[...jornadaF, match]);
        }

    }

    return(
        <div className="view-jornada">
            <button onClick={()=>handleMatches()}>Crear Jornada</button>
            <div className="view-jornada-container">
                <div className="division">
                    {jornadaM && jornadaM.map((match, i)=>{
                       return <Match key={i} match={match}></Match>
                    })}
                </div>
                <div className="division">
                     {jornadaF && jornadaF.map((match, i)=>{
                        return <Match key={i} match={match}></Match>
                     })}
                </div>
            </div>
        </div>
    )
}

export default Jornada;