import { useEffect, useRef, useState } from "react";
import { BsCheckLg } from 'react-icons/bs'

function RowQuiniela({equipos, week, index, onApuesta}){
    
    const [disable, setDisable] = useState(false);
    const [selected, setSelected] = useState(null);
    const [right, setRight] = useState(false);
    const ref = useRef(null);

    useEffect(()=>{
        setSelected(localStorage.getItem('apuestasJornada' + week))
        if(selected){
            for (let i = 0; i < ref.current.children.length; i++) {
                if(ref.current.children[i].innerText === JSON.parse(selected)[index]){
                    ref.current.children[i].children[0].classList.toggle('selected');
                    setDisable(true);
                }
            }
            setRight(false)
        }else{
            setDisable(false)
        }
        if(localStorage.getItem('aciertosJornada' + week)){
            let aciertos =  JSON.parse(localStorage.getItem('aciertosJornada' + week));
            if(aciertos[index] === '1'){
                setRight(true);
            }
        }
        if(!right){
            ref.current.children[4].setAttribute('hidden', true)
        }else{
            ref.current.children[4].removeAttribute('hidden')
        }
    }, [selected, week, index,right])

    function handleApuesta(item){
        item.classList.toggle('selected');
        setDisable(true);
        onApuesta(item.innerText);
    }

    return(
        <tr className="row-quiniela" ref={ref}>
                <td className="equipos-quiniela">{index + 1}. {equipos[0].club} vs {equipos[1].club}</td>
                <td className="apuesta"><button disabled={disable} onClick={(e)=>handleApuesta(e.currentTarget)}>1</button></td>
                <td className="apuesta"><button disabled={disable} onClick={(e)=>handleApuesta(e.currentTarget)}>x</button></td>
                <td className="apuesta"><button disabled={disable} onClick={(e)=>handleApuesta(e.currentTarget)}>2</button></td>
                <td><BsCheckLg style={{color:'green', marginLeft:'5px'}}></BsCheckLg></td>
        </tr>
    )
}

export default RowQuiniela;