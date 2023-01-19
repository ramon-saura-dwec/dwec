import React from "react";

function BlogList({blogs}){
    
    return(
        <div className="blog-list">
        {blogs.map((blog)=> (
         <div className="blog-preview" key={blog.id}>
             <h2>{blog.title}</h2>
             <p>Escrito por {blog.author}</p>
         </div>
        ))}
     </div>
    );
}

export default BlogList;