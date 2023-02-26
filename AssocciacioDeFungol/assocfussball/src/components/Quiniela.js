import { useState } from "react";

function Quiniela(){

    const [quiniela, setQuiniela] = useState([]);
    const [apuestas, setApuestas] = useState(Array(14).fill(""));

    function getWeeks(jornadas) {

        let arrJornadas = [];

        for (let i = 0; i < jornadas; i++) {
             arrJornadas.push(i + 1);            
        }

        return arrJornadas
    }

    let weeks = getWeeks((localStorage.length - 1)/2);


    function getTargets(apuesta, row){
        
        setApuestas(apuestas[row] = apuesta);
        
        console.log(apuesta);
        console.log(row);
        console.log(apuestas);
        
    }

   /*  function getGoals(){
        return Math.floor(Math.random()*6)
    } */

    function handleQuiniela(item){
        setQuiniela([]);
        let auxMasc = JSON.parse(localStorage.getItem('jornadaM' + item))
        let auxFem = JSON.parse(localStorage.getItem('jornadaF' + item))
        auxMasc.map((y)=>{
            setQuiniela(quiniela => [...quiniela, y]);
            // eslint-disable-next-line array-callback-return
            return
        })
        auxFem.map((x)=>{
            setQuiniela(quiniela => [...quiniela, x]);
            // eslint-disable-next-line array-callback-return
            return
        })
    }
    
    return(
        <div className="view-quiniela">
            <div>
                {weeks && weeks.map((item, i)=>{
                 return <button onClick={()=>handleQuiniela(item)} key={i}>Jornada {item}</button>
                })
                }
            </div>
            <div className="view-quiniela-container">
                <table className="view-quiniela-table">
                    <thead>
                        <tr>
                            <th className="view-quiniela-table-title">Clubs</th>
                            <th className="view-quiniela-table-h">1</th>
                            <th className="view-quiniela-table-h">X</th>
                            <th className="view-quiniela-table-h">2</th>
                            <th className="view-quiniela-table-h"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {quiniela && quiniela.map((item, i)=>{
                            while (i <= 13) {
                                return <tr id={i} key={i}>
                                    <td className="quiniela-title">{item[0].club} vs {item[1].club}</td>
                                    <td className="quiniela-result" onClick={(e)=>getTargets(e.target.innerText, e.currentTarget.parentNode.getAttribute('id'))}>1</td>
                                    <td className="quiniela-result" onClick={(e)=>getTargets(e.target.innerText, e.currentTarget.parentNode.getAttribute('id'))}>X</td>
                                    <td className="quiniela-result" onClick={(e)=>getTargets(e.target.innerText, e.currentTarget.parentNode.getAttribute('id'))}>2</td>
                                    <td></td>
                                </tr>
                            }
                            // eslint-disable-next-line array-callback-return
                            return
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Quiniela;