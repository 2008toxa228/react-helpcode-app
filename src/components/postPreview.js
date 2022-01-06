import React from "react";
import "./css/postPreview.css";
import { PostConstants } from "../common/constants";
import { NavLink } from "react-router-dom";

function PostPreview (props) {
    let post = props.post;
    
    return (
        <div className="postPreview">
            <div className="postTitle">
                <NavLink to={"/post/" + post.Id}>{post.Title}</NavLink>
            </div>
            <div className="postPreviewContent">{post.Content.substring(0, PostConstants.PREVIEWCONTENTMAXLENGTH) + '...'}</div>
        </div>
    );
}

export default PostPreview