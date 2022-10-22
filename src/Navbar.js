import React from "react";
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1>The Dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;
/**
 * style = {{
                    color: "white",
                    backgroundColor: "rgb(254, 109, 109)",
                    borderRadius: "8px", 
                }}
 */

//<a href = "/create" ></a> : here we still send requests to server 