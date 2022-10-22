//if you want to pass parameter to function in onClick 
//you have to create anonymous function that call the real function and send it the parameter 
// import { useState } from "react";

// const Home = () => {
//     const [name, setName] = useState("mario") // use state return two things the current value and function to change THE Value
//     //here we create reactive variable
//     const handleClick =()=>{
//         console.log("Hello, ninja");
//         setName(`khaled`);
//     }
//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{ name }</p>
//             <button onClick={handleClick}>Click me</button>
//             { /* <button onClick={(e)=>{func(name,e)}}></button>*/ }
//         </div>
//     );
// }

// useEffect hook this hook runs a function every render of component 
// and every change by useState(in the state of component) it render component again so function called again
//import { useState, useEffect } from "react";
import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {



    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');



    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && /*!error &&*/ <div>loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "all blogs" />}
            {/*here will pass blogs as props so you can add as mush props as you want*/}
        </div>
    );
}

export default Home;


/*
/blogs GET Fetch all blogs
/blogs/{id} GET Fetch a single blog
/blogs POST Add a new Blog
/blogs/{id} DELETE Delete a blog
🐱‍💻
*/
