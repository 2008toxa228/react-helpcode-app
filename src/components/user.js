import React, { useState } from "react";
import UserPreview from "./userPreview";
import { NavLink } from "react-router-dom";
import { GetPostById, GetUserById } from "../services/helpcodePostsService";
import { useSelector } from "react-redux";
import { Routes } from "../common/constants";

function User(props){
    let userId = props.match.params.userId;
    let authorization = useSelector((state) => state.userReducer.user);

    let [user, setUser] = useState()

    if (!user) {
        GetUserById(userId, setUser);
    }

    return (
        <React.Fragment>
            {userId == authorization?.id
                ? (
                    <div className="customButton">
                        <NavLink className="customButton" to={Routes.POSTCREATE}>+ write new post</NavLink>
                    </div>
                )
                : ""
            }
            <div className="customButton">
                <NavLink className="customButton" to={Routes.POSTSBYUSER + "/" + userId}>Watch user posts</NavLink>
            </div>
            <div className="user">
                username: <UserPreview user={user} />
            </div>
            <div className="userEmail">
                email: {user?.email}
            </div>
           
        </React.Fragment>
    );
}

export default User;