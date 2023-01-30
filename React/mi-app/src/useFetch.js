import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useFetch(url){

    const [data, setData] = useState(null);
    const [loading, setLoading] =  useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(()=>{
        
        const abortController = new AbortController();

        setTimeout(()=>{
            fetch(url, { signal: abortController.signal })
            .then((res) => {
                if(!res.ok){
                    /* throw Error('An error has occurred!'); */
                    history.push('/*');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch((error)=>{
                if(error.name === 'AbortError'){
                    console.log('Fail catch data')
                }else{
                    setError(error.message)
                    setLoading(false);
                }
            })
        }, 1500)

        return ()=>{ abortController.abort()}

    },[url]);

    return {data, loading, error}
}

export default useFetch;