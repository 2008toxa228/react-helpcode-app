import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  NavLink, useRouteMatch } from "react-router-dom"
import { Routes } from "../common/constants";
import * as helpcodePostsService from "../services/helpcodePostsService";
import Category from "./category";
import Comment from "./comment";
import CommentCreate from "./commentCreate";
import UserPreview from "./userPreview";


function Post(props) {
    let [user, setUser] = useState();
    const [post, setPost] = useState(undefined);
    let { path } = useRouteMatch();
    let authorization = useSelector((state) => state.userReducer.user);

    let [comments, setComemnts] = useState();
    if (!comments && post?.id) {
        helpcodePostsService.GetCommentsByPostId(post?.id, setComemnts);
    }
    
    let [categories, setCategories] = useState();
    if (!categories && post?.id)
    {
        helpcodePostsService.GetCategoriesByPostId(post.id, setCategories);
    }

    let postId = props.match.params.postId;
    if (postId){    
        if (!post) {
            helpcodePostsService.GetPostById(postId, setPost);
        }

        if(!user && post) {
            helpcodePostsService.GetUserById(post.ownerUserId, setUser)
        }
    }
    
    return (
        <React.Fragment>
            <div className="post"> 
                {post?.ownerUserId == authorization?.id
                    ? (
                        <div className="customButton">
                            <NavLink className="customButton" to={Routes.POSTCREATE + "/" + postId}>edit post</NavLink>
                        </div>
                    )
                    : ""
                }
                <div className="postTitle">
                {post?.title}
                </div>
                <div className="postPreviewContent">
                    {categories 
                        ? mapCategories(categories)
                        : ""}
                    {post?.content}
                </div>            
                <div className="postPreviewAuthor">author: {(user ? <UserPreview user={user}/> : "")}</div>
                <div className="postPreviewDate">creationDate: {post?.creationDate}</div>      
            </div>
            <CommentCreate postId={post?.id} />
            {comments 
                ? mapComments(comments)
                : ""}
        </React.Fragment>
    );
    
    function mapCategories(data) {        
        return (data.map(category => (
            <Category
                key={ category.id + "preview" }
                category={ category }
            />)
            )
        );
    }
    
    function mapComments(data) {        
        return (data.map(comment => (
            <Comment
                key={ comment.id + "preview" }
                comment={ comment }
            />)
            )
        );
    }
}

export default Post