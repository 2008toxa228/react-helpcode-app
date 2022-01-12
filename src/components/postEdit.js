import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  useRouteMatch } from "react-router-dom"
import Cookies from "universal-cookie";
import { Routes } from "../common/constants";
import * as helpcodePostsService from "../services/helpcodePostsService";
import UserPreview from "./userPreview";


function PostEdit(props) {
    let user = useSelector((state) => state.userReducer.user);    
    const cookies = new Cookies();
    const [post, setPost] = useState();

    let postId = props.match.params.postId;
    console.log("postId", postId)
    console.log("user", user)
    if (postId){    
        if (!post) {
            helpcodePostsService.GetPostById(postId, setPost);
        }
    }

    function changeTitle(title) {
        let newPost = {...post}
        newPost.title = title
        return newPost
    }
    function changeContent(content) {
        let newPost = {...post}
        newPost.content = content
        return newPost
    }

    function save () {
        // let newPost = {...post}
        // newPost.ownerUserId = user
        helpcodePostsService.AddPost(post, cookies.get("accessToken"), (response) => {
            if (response == 1) {
                alert("post was succesfully saved");
            }
        })
    }
    
    return (
        <div className="post">  
            {/* {userId == authorization?.id
                ? (
                    <div className="customButton">
                        <NavLink className="customButton" to="/">+ write new post</NavLink>
                    </div>
                )
                : ""
            }*/}
            <div className="postTitle">
                <div>Title:</div>
                <textarea name="TitleArea" cols="50" rows="2" value={post?.title} onChange={(e) => setPost(changeTitle(e.target.value))}></textarea>
               {/* <input  type="text" placeholder="title" value={post?.title}/> */}
            </div>
            <div className="postPreviewContent">
                <div>Content:</div>
                <textarea name="ContentArea" cols="50" rows="10" value={post?.content}  onChange={(e) => setPost(changeContent(e.target.value))}></textarea>
               {/* <input type="text" placeholder="content" value={post?.content}/>                 */}
            </div>
            <button onClick={save}>save</button>
            <button onClick={() => setPost(undefined)}>dismiss</button>

            {/* <div>
                {JSON.stringify(post, null, 2)}
            </div> */}
        </div>
    );
}

export default PostEdit