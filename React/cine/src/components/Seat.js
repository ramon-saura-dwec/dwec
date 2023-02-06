import { useRef, useState } from "react";

function Seat() {

    const [isSelected, setIsSelected] = useState(false);
    const seat = useRef(null);

    const handleSeat = () => {
        if(isSelected){
            seat.current.className = 'seient';
            setIsSelected(false);
        }else{
            seat.current.className = "seient seleccionat"
            setIsSelected(true);
        }
    }

    return(
        <button className="seient" ref={seat} value="a" onClick={(e)=>{handleSeat(e.target.value)}}></button>
    )
}

export default Seat;