import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  useRouteMatch } from "react-router-dom"
import { Routes } from "../common/constants";
import * as helpcodePostsService from "../services/helpcodePostsService";


function Post(props) {

    let accessToken = useSelector((state) => state.tokensReducer.accessToken);
    let refreshToken = useSelector((state) => state.tokensReducer.refreshToken);

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
               {post?.title}
            </div>
            <div>{accessToken}</div>
            <div className="postContent">
                {post?.content}
            </div>           
        </div>
    );
}

export default Post