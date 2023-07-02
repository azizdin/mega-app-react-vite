import { useState } from "react";
import "./App.css";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import { Route, NavLink, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>mega app</h1>
        <ul className="header">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/stuff">Stuff</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div>
          <Route path="/home" Component={Home} />
          <Route path="/stuff" />
          <Route path="/contact" Component={Contact} />
        </div>
      </div>
    </>
  );
}

export default App;
