import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetail (){

const { id } = useParams();
const { data : blog, error, loading} = useFetch('http://localhost:8000/blogs/' + id);
const history = useHistory();
const handleDeleteBlog = () =>{
    fetch('http://localhost:8000/blogs/' + blog.id,{
        method: 'DELETE'
    }).then(()=>{
        alert('The post had been deleted');
        history.push('/');
    })
}

    return(
        <div className="blog-detail">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>whited by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDeleteBlog}>Delete Blog</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetail;