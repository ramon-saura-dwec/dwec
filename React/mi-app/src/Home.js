import React from "react";
import { useState } from "react";

function Home() {
    const [blogs, setBlogs] = useState([
        {title:'Nam en pel', body: 'bla bla bla bla', author: 'my self', id: 1},
        {title:'Fot vesa tiiiiu', body: 'bla bla bla bla', author: 'xec', id: 2},
        {title:'Fumar es un placer', body: 'bla bla bla bla', author: 'susy', id: 3}
    ]);

    return(
        <div className="home">
           {blogs.map((blog)=> (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Escrito por {blog.author}</p>
            </div>
           ))}
        </div>
    )
}

export default Home;