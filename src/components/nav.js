import React from "react";
// import "./css/nav.css"
import { NavLink } from "react-router-dom";

function Nav () {
    return (
        <nav>
            <div className="wrapper">
                <NavLink activeClassName="selectedTab" className="tab" to="/posts">
                    Posts
                </NavLink>
                <NavLink activeClassName="selectedTab" className="tab" to="/categories">
                    Categories
                </NavLink>
                <NavLink activeClassName="selectedTab" className="tab" to="/users">
                    Users
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;