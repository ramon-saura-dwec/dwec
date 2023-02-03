import { Link } from "react-router-dom";

function Movies({movies}){
    
    return(
        <div className="movies">
        {movies.map((movie)=> (
            <div className="blog-preview" key={movie.id}>
            <Link to={ `/detail/${movie.id}` }>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} />
             </Link>
         </div>
        ))}
     </div>
    );
}

export default Movies;