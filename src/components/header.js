import React from "react";
import { NavLink } from "react-router-dom";
// import "./css/header.css";

function Header (props) {
    return (
        <header>
            <div className="wrapper">
                <div className="headerTitle">
                    { props.headerTitle }
                </div>
                <div className="headerLogin">
                    <NavLink activeClassName="selectedTab" className="tab" to="/Signin">
                        Sign in
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;