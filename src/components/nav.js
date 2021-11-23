import React from "react";
import "./css/nav.css"
import { NavLink } from "react-router-dom";
import { Routes } from "../common/constants";

function Nav () {
    return (
        <nav>
            <div className="wrapper">
                <NavLink activeClassName="selectedTab" className="tab" to={Routes.POSTS}>
                    Posts
                </NavLink>
                <NavLink activeClassName="selectedTab" className="tab" to={Routes.CATEGORIES}>
                    Categories
                </NavLink>
                <NavLink activeClassName="selectedTab" className="tab" to={Routes.USERS}>
                    Users
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;