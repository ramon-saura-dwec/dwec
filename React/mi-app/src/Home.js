import React, { useEffect } from "react";
import { useState } from "react";
import BlogList from "./blog-list";

function Home() {

    const [blogs, setBlogs] = useState(null);
    const [downloading, setDownloading] =  useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
            .then((res) => {
                if(!res.ok){
                    throw Error('tot en contra');
                }
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setDownloading(false);
            })
            .catch((error)=>{
                console.log(error.message);
            })
        }, 1500)
    },[]);

    return(
        <div className="home">
            {downloading && <div>Downloading...</div>}
            {blogs && <BlogList blogs={blogs} title='Blog list'/>}
        </div>
    )
}

export default Home;