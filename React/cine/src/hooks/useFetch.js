import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

function useFetch(url){

    const [data, setData] = useState(null);
    const [loading, setLoading] =  useState(true);
    const history = useHistory();

    const getMovies = useCallback((history, url)=>{
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
    },[])

    useEffect(()=>{

        getMovies(history, url);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    return {data, loading}
}

export default useFetch;