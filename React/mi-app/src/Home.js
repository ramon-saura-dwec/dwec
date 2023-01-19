import React from "react";
import { useState } from "react";
import BlogList from "./blog-list";

function Home() {
    const [blogs, setBlogs] = useState([
        {title:'Nam en pel', body: 'bla bla bla bla', author: 'my self', id: 1},
        {title:'Fot vesa tiiiiu', body: 'bla bla bla bla', author: 'xec', id: 2},
        {title:'Fumar es un placer', body: 'bla bla bla bla', author: 'susy', id: 3}
    ]);

    let blogId = [blogs.find(blog => blog.author === 'xec')];

    console.log(blogId);

    return(
        <div className="home">
           <BlogList blogs={blogs}/>
           <BlogList blogs={blogId}/>
        </div>
    )
}

export default Home;