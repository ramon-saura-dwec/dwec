import {useState } from "react";
import RowQuiniela from "./RowQuiniela";

function Quiniela(){

    //declaració de variables
    const [currentWeek, setCurrentWeek] = useState(''); //al apretar quina jornada volem aqui guardam es nombre de jornada
    const [quiniela, setQuiniela] = useState([]); //aquí emmagatzemam el 14 partits necessaris per formar la quiniela
    const [apuestas, setApuestas]  = useState([]); //array on tindrem les apostes realitzades

    //aquesta funció calcula quantes jornades s'han de mostrar
    function getWeeks(jornadas) {

        let arrJornadas = [];

        for (let i = 0; i < jornadas; i++) {
             arrJornadas.push(i + 1);            
        }

        return arrJornadas
    }

    //en aquesta variable obtenim el numero de jornades existents    
    let weeks = getWeeks(Number(localStorage.getItem('weeknumber')) - 1);

    //cada cop que seleccionam una aposta es guarda a l'array apuestas
    const handleApuestas = (value) =>{
            setApuestas(apuestas => [...apuestas, value]);
    }
    
    //recupera els partits de la jornada seleccionada i selecciona els 14 partits a mostrar, que es guarden a quiniela
    function handleQuiniela(item){
        setQuiniela([])
        setApuestas([])
        
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
    
    //dona un valor de gols aleatori entre 0 i 6
    function getGoals(){
        return Math.floor(Math.random()*6)
    }
    
    
    //generam els resultats de la jornada i els guarda a localstorage
    function handleResults(){
        let auxMasc = JSON.parse(localStorage.getItem('jornadaM' + currentWeek));
        let auxFem = JSON.parse(localStorage.getItem('jornadaF' + currentWeek));
        let resolucion = [];
        let aciertos = [];
        
        auxMasc.map((item, i)=>{
            let result = [];
            result[0] = getGoals();
            result[1] = getGoals();

            item[0]['goals'] = result[0];
            item[1]['goals'] = result[1];

            if(result[0] === result[1]){
                resolucion.push('x')
            }else if(result[0] > result[1]){
                resolucion.push('1')
            }else{
                resolucion.push('2')
            }
            return ''
        })

        auxFem.map((item, i)=>{
            let result = [];
            result[0] = getGoals();
            result[1] = getGoals();

            item[0]['goals'] = result[0];
            item[1]['goals'] = result[1];

            if(i < 4){
                if(result[0] === result[1]){
                    resolucion.push('x')
                }else if(result[0] > result[1]){
                    resolucion.push('1')
                }else{
                    resolucion.push('2')
                }
            }

            return ''
        })

        if(resolucion.length === 14){
            for (let i = 0; i < resolucion.length; i++) {
                if(resolucion[i] === apuestas[i]){
                    aciertos.push('1');
                }else{
                    aciertos.push('0');
                }
            }
        }
        
        localStorage.setItem('jornadaM' + currentWeek, JSON.stringify(auxMasc))
        localStorage.setItem('jornadaF' + currentWeek, JSON.stringify(auxFem))
        localStorage.setItem('apuestasJornada' + currentWeek, JSON.stringify(apuestas))
        localStorage.setItem('aciertosJornada' + currentWeek, JSON.stringify(aciertos))
    
        setApuestas([])

        window.location.reload();
    }
    
   
     return(
        <div className="view-quiniela">
            <div>
                {weeks && weeks.map((item, i)=>{
                    let disabled = false;
                    if(item === currentWeek){
                        disabled = true;
                    }
                 return <button disabled={disabled} type="submit" onClick={()=>handleQuiniela(item)} key={i}>Jornada {item}</button>
                })
                }
                {quiniela.length > 0 &&
                <div className="view-quiniela-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <td className="equipos-quiniela">Equipos</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>      
                            {quiniela.map((item, i)=>{
                                return <RowQuiniela key={i} index={i} week={currentWeek} equipos={item} onApuesta={handleApuestas}></RowQuiniela>
                            }) }
                        </tbody>
                    </table>
                </div>
                }
                {apuestas.length === 14 &&
                    <div className="view-quiniela-button">
                        <button onClick={()=>handleResults()}>Resultados</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Quiniela;