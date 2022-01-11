import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";
import { Routes } from "../common/constants";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { GetUser, Refresh } from "../services/helpcodePostsService";

function Header (props) {
    const cookies = new Cookies();
    let [user, setUser] = useState();

    let accessToken = cookies.get("accessToken");
    let refreshToken = cookies.get("refreshToken");

    useEffect(() => {
        if (!user && accessToken) {
            GetUser(accessToken, setUserOrTryRefreshSession);
        }
    });

    function setUserOrTryRefreshSession(user) {
        console.log("getUser result", user)
        if (user) {
            setUser(user)
        } else {
            Refresh(refreshToken, (response) => {
                console.log("refresh response",response);
                if (response){
                    cookies.set("accessToken", response.accessToken);
                    cookies.set("refreshToken", response.refreshToken);
                    // window.location.reload();
                } else {
                    console.log("tokens cleared");
                    cookies.remove("accessToken");
                    cookies.remove("refreshToken");
                };
            });
            
        }
    }

    function signOut (){
        cookies.remove("accessToken");
        cookies.remove("refreshToken");
        window.location.assign("/");
    }


    return (
        <header>
            <div className="wrapper">
                <div className="headerTitle">
                    { props.headerTitle }
                </div>

                {/* <div>{accessToken ? "accesToken" : "accessToken is null"}</div> */}
                {/* <div>{refreshToken ? "refreshToken" : "refreshToken is null"}</div> */}
                
                <div className="headerLogin">
                    { (accessToken) 
                        ? ( <React.Fragment>
                                <NavLink activeClassName="selectedTab accountButton" className="tab" to={Routes.ACCOUNT}>
                                    {user?.username}
                                </NavLink>
                                <div onClick={signOut} style={{cursor: "pointer"}}>Sign out</div>
                            </React.Fragment>)
                        : (<React.Fragment>
                                <NavLink activeClassName="selectedTab" className="tab" to={Routes.SIGNIN}>
                                    Sign in
                                </NavLink>
                                <NavLink activeClassName="selectedTab" className="tab" to={Routes.SIGNUP}>
                                    Sign up
                                </NavLink>
                            </React.Fragment>)
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;