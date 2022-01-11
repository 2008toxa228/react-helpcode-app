import React, { useState } from "react";
import "./css/postPreview.css";
import { PostConstants } from "../common/constants";
import * as helpcodePostsService from "../services/helpcodePostsService";
import { NavLink } from "react-router-dom";

function PostPreview (props) {
    let post = props.post;

    let [user, setUser] = useState(undefined);
    if(!user) {
        console.log("post.ownerUserId",post.ownerUserId);
        helpcodePostsService.GetUserById(post.ownerUserId, setUser)
    }
    
    return (
        <div className="postPreview">
            <div className="postTitle">
                <NavLink to={"/post/" + post.id}>{post.title}</NavLink>
            </div>
            <div className="postPreviewContent">{post.content.length > PostConstants.PREVIEWCONTENTMAXLENGTH 
                ? post.content.substring(0, PostConstants.PREVIEWCONTENTMAXLENGTH) + '...'
                : post.content}
            </div>
            <div className="postPreviewUser">author: {user?.username}</div>
            <div className="postPreviewDate">creationDate: {post.creationDate}</div>
        </div>
    );
}

export default PostPreview