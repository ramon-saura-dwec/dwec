import { useEffect } from "react";
import { useState } from "react";

function InputSearch({childToParent}){
    
    const [query, setQuery] = useState('');

    useEffect(()=>{
        childToParent(query);
    })

    return(
        <div className="input-search">
            <input value={query} name='query' onChange={(e)=>{setQuery(e.target.value)} } />
        </div>
    )

}

export default InputSearch;