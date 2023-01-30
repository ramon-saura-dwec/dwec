import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Create(){

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title, body, author};

        setRefreshing(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog),
        }).then(()=>{
            alert("new blog has created");
            setRefreshing(false);
            history.push('/');
        })
    }


    return(
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Content: </label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Author: </label>
                <input type="text" required  value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                {!refreshing && <button>Add blog</button>}
                {refreshing && <button disabled>Adding blog ...</button>}
            </form>
        </div>
        );
}

export default Create;