import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Theatre from "./Theatre";

function MovieDetail (){

const { id } = useParams();
const { data : movie, loading} = useFetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=6a60a0cafaa3e9cbdd7ad635f6aae7ab&language=en-US');

    return(
        <div className="movie-detail">
            {loading && <div>Loading...</div>}
            {movie && (
                <article className="container-movie">
                    <h2>{movie.title}</h2>
                    <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} />
                    <p>{movie.release_date}</p>
                    <div>
                        <p><spna>{Math.round((movie.vote_average) * 100) / 100}</spna>  ( {movie.vote_count} votos )</p>
                    </div>
                </article>
            )}
            {movie && <Theatre></Theatre>}
        </div>
    )
}

export default MovieDetail;