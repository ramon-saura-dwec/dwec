import useFetch from "../hooks/useFetch";
import Movies from "./Movies";

function Home(){

    const apiKey = '6a60a0cafaa3e9cbdd7ad635f6aae7ab';

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

    let {data , loading} = useFetch(url);

   

    return(
        <div className="home">
            <h2 className="title">Most popular Movies</h2>
            {loading && <div>Loading...</div>}
            {data && <Movies movies={data.results}></Movies>}
        </div>
    )
}

export default Home;