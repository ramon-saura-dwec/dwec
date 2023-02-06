import { useRef} from "react";
import Seat from "./Seat";
import * as ReactDOM from 'react-dom'

function Theatre() {

    const fila = useRef(null)

    const handleBuyTiket = (item) =>{
        let x = ReactDOM.findDOMNode(fila.current).getElementsByClassName('seient seleccionat')
        console.log(x);
    }

    return(
        <div className="theatre">
            <div className="container-theatre">
                <div >leyenda</div>
                <button className="buy-tikets" onClick={(e)=>handleBuyTiket(e)}>Buy Tikets</button>
                <div className="pantalla"></div>
                    <div className="fila" ref={fila}>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                    </div>
                    <div className="fila" ref={fila}>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                    </div>
                    <div className="fila" ref={fila}>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                    </div>
                    <div className="fila" ref={fila}>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                    </div>
                    <div className="fila" ref={fila}>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                        <Seat></Seat>
                    </div>
                </div>
        </div>
    )
}

export default Theatre;