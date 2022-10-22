/*const BlogList = ({blogs,title}) 
any props you give to it in parent element distruct it
as props this object we use object destructing
*/
import React from "react";
import { Link } from "react-router-dom";

/*you can do that */
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => {
                // key to keep react track the element
                return (
                    <div className="blog-preview" key={blog.id}> 
                        <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}
export default BlogList;