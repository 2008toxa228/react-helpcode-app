import React from "react";
import "./css/postPreview.css";

function PostPreview (props) {
    let post = props.post;

    console.log(post);

    return (
        <div className="postPreview">
            postPreview
            <div>Title: {post.Title}</div>
            <div>Content: {post.Content}</div>
        </div>
    );
}

export default PostPreview