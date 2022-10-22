import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>That page cannot found</p>
            <Link to='/'>Back to homepage...</Link>
        </div>
    );
}

export default NotFound;