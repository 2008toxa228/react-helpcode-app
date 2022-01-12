import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../common/constants";
import { GetRoleNameByUserId } from "../services/helpcodePostsService";

function UserPreview(props) {
    let user = props.user;
    let [role, setRole] = useState();
    
    if(!role && user) {
        GetRoleNameByUserId(user?.id, setRole);
    }

    return (
        <div className="userPreview">
            <NavLink 
                to={Routes.USER +"/"+user?.id}>
                <div className="username">{user?.username}</div>
            </NavLink>
             <div className={"role" + role}>({role})</div>
        </div>
    );
}

export default UserPreview;