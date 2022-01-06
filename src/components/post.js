import React, { useEffect, useState } from "react";
import {  useRouteMatch } from "react-router-dom"
import { Routes } from "../common/constants";
import * as helpcodePostsService from "../services/helpcodePostsService";


function Post(props) {
    const [post, setPost] = useState(undefined);
    let pageMatch = useRouteMatch("*" + Routes.POSTBYID);
    let { path } = useRouteMatch();

    let postId = pageMatch?.params?.postId;    

    useEffect(() => {
        if (!post) {
            helpcodePostsService.GetPostById(postId, setPost);
        }
    })
    
    return (
        <div className="post">            
            <div className="postTitle">
               {post?.Title}
            </div>
            <div className="postContent">
                {post?.Content}
            </div>           
        </div>
    );
}

export default Post