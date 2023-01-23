import React, { useEffect } from "react";
import { useState } from "react";
import BlogList from "./blog-list";

function Home() {
    const [blogs, setBlogs] = useState(null);

   /*  const [longitud, setLongitud] = useState('');

    const handleDeleteBlog = (id)=>{
        setLongitud(blogs.length)
        const newBlogs = blogs.filter((blog)=> blog.id !== id);
        setBlogs(newBlogs);
    } */

    useEffect(()=>{
       /*  if(blogs.length < longitud){
            console.log('Blog deleted');
        } */
        fetch('http://localhost:8000/blogs')
        .then((res) => {
            console.log(res);
            res.json();
        })
        .then((data) => {
            console.log(data);
        })
    },[]);

    return(
        <div className="home">
{/*            <BlogList blogs={blogs} title = 'Blog list' handleDeleteBlog = {handleDeleteBlog}/>
 */}        </div>
    )
}

export default Home;