import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useFetch(url){

    const [data, setData] = useState(null);
    const [loading, setLoading] =  useState(true);
    const history = useHistory();

    useEffect(()=>{

        setTimeout(()=>{
            fetch(url)
            .then((response) => {
                if(!response.ok){
                    history.push('/');
                }
                return response.json()   
            }).then((data)=>{
                setData(data);
                setLoading(false);
            })
        }, 1500)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    return {data, loading}
}

export default useFetch;