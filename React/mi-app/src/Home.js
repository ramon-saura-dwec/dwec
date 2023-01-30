import React from "react";
import BlogList from "./Blog-List";
import useFetch from "./useFetch";

/* http://localhost:8000/blogss */

function Home() {

    const {data: blogs, loading, error} = useFetch('http://localhost:8000/blogs');

    return(
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='Blog list'/>}
        </div>
    )
}

export default Home;