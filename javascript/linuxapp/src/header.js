import { NavLink } from "react-router-dom";
import React from "react";

export default function Header() {
    return (
      <div>
        <h1>Navbar</h1>
        <NavLink to="/home">Home</NavLink><br />
        <NavLink to="/contact">Contact</NavLink><br />
        <NavLink to="/about">About</NavLink><br />
        {/* 
        <div>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <h1>This is Header page</h1>
        </div> 
        */}
      </div>
    );
}
