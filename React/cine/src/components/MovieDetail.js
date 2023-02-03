import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function MovieDetail (){

const { id } = useParams();
const { data : movie, loading} = useFetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=6a60a0cafaa3e9cbdd7ad635f6aae7ab&language=en-US');

    return(
        <div className="movie-detail">
            {loading && <div>Loading...</div>}
            {movie && (
                <article>
                    <h2>{movie.title}</h2>
                </article>
            )}
        </div>
    )
}

export default MovieDetail;