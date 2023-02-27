import { useState } from "react";

function Quiniela(){

    const [quiniela, setQuiniela] = useState([]);
    let apuestas = Array(14).fill("");
    const [currentWeek, setCurrentWeek] = useState(null);

    function getWeeks(jornadas) {

        let arrJornadas = [];

        for (let i = 0; i < jornadas; i++) {
             arrJornadas.push(i + 1);            
        }

        return arrJornadas
    }

    let weeks = getWeeks((localStorage.length - 1)/2);


    function getTargets(e, apuesta, row){
        
        apuestas[row] = apuesta;

        e.currentTarget.classList.toggle('selected')
        
    }

    function getGoals(){
        return Math.floor(Math.random()*6)
    }

    function handleResults(){
        /* let results = [];
        let comparador = []; */
        let auxMasc = JSON.parse(localStorage.getItem('jornadaM'+ currentWeek))
        let auxFem = JSON.parse(localStorage.getItem('jornadaF'+ currentWeek))

        console.log(apuestas.length)

        for (let i = 0; i < apuestas.length; i++) {
            let result = [];
            result[0] = getGoals();
            result[1] = getGoals();

            if(i < 11){
                auxMasc[i][0]['goals'] = result[0];
                auxMasc[i][1]['goals'] = result[1];
            }else{
                auxFem[i][0]['goals'] = result[0]
                auxFem[i][1]['goals'] = result[1]
            }
            /* results.push(result);
            if(result[0] === result[1]){
                comparador.push("X");
            }else if(result[0] > result[1]){
                comparador.push("1");
            }else{
                comparador.push("2");
            } */
        }
        

        console.log(auxMasc)
        console.log(auxFem)
        console.log(currentWeek)
    }

    function handleQuiniela(item){
        setQuiniela([]);
        apuestas.fill("")
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
        setCurrentWeek(item);
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
                                    <td className="quiniela-result" onClick={(e)=>getTargets(e, e.target.innerText, e.currentTarget.parentNode.getAttribute('id'))}>1</td>
                                    <td className="quiniela-result" onClick={(e)=>getTargets(e, e.target.innerText, e.currentTarget.parentNode.getAttribute('id'))}>X</td>
                                    <td className="quiniela-result" onClick={(e)=>getTargets(e, e.target.innerText, e.currentTarget.parentNode.getAttribute('id'))}>2</td>
                                    <td></td>
                                </tr>
                            }
                            // eslint-disable-next-line array-callback-return
                            return
                        })}
                    </tbody>
                </table>
            </div>
            <div className="view-quiniela-button">
                <button onClick={()=>handleResults()}>Resultados</button>
            </div>
        </div>
    )
}

export default Quiniela;