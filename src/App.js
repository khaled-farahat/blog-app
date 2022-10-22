import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

/**
 * const title = `welcome to the new blog`;
  const likes = 66;
  const link = "https://www.google.com"
 */

/**
 *  <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{ 10 }</p>
        <p>{ `hello` }</p>
        <p>{ [1,2,3,4] }</p>
        <p>{ Math.random()*10 }</p>
        <a href = {link} target="_blank" rel="noreferrer"> google </a>
 */
