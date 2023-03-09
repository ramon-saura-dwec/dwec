//import { useEffect, useState } from "react";

function Quiniela(){

    //generar resultados de todos los partidos incluido los que no estan incluidos en la quiniela
    //jugar con el estado en local storage para asignar resultado apuestas
    //crear componente que sera la fila de la quinierla
    //poder ver jornadas una vez creadas en ventana jornada
    //la quiniela no puede verse si no hay ninguna jornada clicada
    //generar apuesta aleatoria marcando las casillas correspondientes
    //memorizar apuestas por jornada

    function getWeeks(jornadas) {

        let arrJornadas = [];

        for (let i = 0; i < jornadas; i++) {
             arrJornadas.push(i + 1);            
        }

        return arrJornadas
    }

    let weeks = getWeeks(Number(localStorage.getItem('weeknumber')) - 1);

    function handleQuiniela(){
        console.log('web toni');
    }

     return(
        <div className="view-quiniela">
            <div>
                {weeks && weeks.map((item, i)=>{
                 return <button type="submit" onClick={()=>handleQuiniela(item)} key={i}>Jornada {item}</button>
                })
                }
            </div>
        </div>
    )

    /* useEffect(()=>{
       
    }, )

    function getWeeks(jornadas) {

        let arrJornadas = [];

        for (let i = 0; i < jornadas; i++) {
             arrJornadas.push(i + 1);            
        }

        return arrJornadas
    }

    let weeks = getWeeks(Number(localStorage.getItem('weeknumber')) - 1);

    function getGoals(){
        return Math.floor(Math.random()*6)
    }

    function handleResults(){
        
        for (let i = 0; i < apuestas.length; i++) {
            let result = [];
            result[0] = getGoals();
            result[1] = getGoals();

            if(result[0] === result[1]){
                comparadorApuestas[i] =  "X";
            }else if(result[0] > result[1]){
                comparadorApuestas[i] = "1";
            }else{
                comparadorApuestas[i] = "2";
            }
            
            auxQuiniela[i][0]['goals'] = result[0];
            auxQuiniela[i][1]['goals'] = result[1];
        }
        
        for (let y = 0; y < apuestas.length; y++) {
            if(apuestas[y] === comparadorApuestas[y]){
                aciertosQuiniela.push(1);
            }else{
                aciertosQuiniela.push(0);
            }
        }

    }

    function handleQuiniela(item){
        let auxMasc = JSON.parse(localStorage.getItem('jornadaM' + item))
        let auxFem = JSON.parse(localStorage.getItem('jornadaF' + item))
        auxMasc.map((y)=>{
            setQuiniela(quiniela => [...quiniela, y]);
            // eslint-disable-next-line array-callback-return
            return
        })
        auxFem.map((x, i)=>{
            if(i < 4){
                setQuiniela(quiniela => [...quiniela, x]);
            }
            // eslint-disable-next-line array-callback-return
            return
        })
        setCurrentWeek(item);
    }
    
    return(
        <div className="view-quiniela">
            <div>
                {weeks && weeks.map((item, i)=>{
                 return <button type="submit" onClick={()=>handleQuiniela(item)} key={i}>Jornada {item}</button>
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
                            {aciertos.length > 0 && <th className="view-quiniela-table-h"></th>}
                        </tr>
                    </thead>
                    <tbody>
                        {quiniela && quiniela.map((item, i)=>{
                                return <tr id={i} key={i}>
                                    <td className="quiniela-title">{i + 1}. {item[0].club} vs {item[1].club}</td>
                                    <td className="quiniela-result" onClick={(e)=>getTargets(e, e.target.innerText, e.currentTarget.parentNode.getAttribute('id'))}>1</td>
                                    <td className="quiniela-result" onClick={(e)=>getTargets(e, e.target.innerText, e.currentTarget.parentNode.getAttribute('id'))}>X</td>
                                    <td className="quiniela-result" onClick={(e)=>getTargets(e, e.target.innerText, e.currentTarget.parentNode.getAttribute('id'))}>2</td>
                                    {aciertos && aciertos.map((item, i)=>{
                                        return console.log(item);
                                    })}
                               </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className="view-quiniela-button">
                {!resultados.length > 0 && showbutton &&  
                    <button onClick={()=>handleResults()}>Resultados</button>
                }
            </div>
        </div>
    ) */
}

export default Quiniela;