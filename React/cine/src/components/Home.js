import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Movies from "./Movies";
import InputSearch from "./InputSearch";
import Fetchi from "../hooks/fetch";

function Home(){

    Fetchi();

    const apiKey = '6a60a0cafaa3e9cbdd7ad635f6aae7ab';

    const [query, setQuery] = useState(null);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`

    let {data , loading} = useFetch(url);

    const childToParent = (childdata) => {
        setQuery(childdata);
    }

    return(
        <div className="home">
            <InputSearch childToParent={childToParent}/>
            {loading && <div>Loading...</div>}
            {data && <Movies movies={data.results}></Movies>}
        </div>
    )
}

export default Home;