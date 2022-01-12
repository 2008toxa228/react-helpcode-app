import React, { useState } from "react";
import "./css/postPreview.css";
import { PostConstants } from "../common/constants";
import * as helpcodePostsService from "../services/helpcodePostsService";
import { NavLink } from "react-router-dom";
import UserPreview from "./userPreview";
import Category from "./category";
import categoriesList from "../hoc/categoriesList";

function PostPreview (props) {
    let post = props.post;

    let [comments, setComemnts] = useState();
    if (!comments && post?.id) {
        helpcodePostsService.GetCommentsByPostId(post?.id, setComemnts);
    }

    let [categories, setCategories] = useState();
    if (!categories && post?.id)
    {
        helpcodePostsService.GetCategoriesByPostId(post.id, setCategories);
    }

    let [user, setUser] = useState(undefined);
    if(!user) {
        helpcodePostsService.GetUserById(post.ownerUserId, setUser)
    }
    
    return (
        <div className="postPreview bordered">            
            <div className="postTitle">
                <NavLink to={"/post/" + post.id}>{post.title}</NavLink>
            </div>
            
                
            
            <div className="postPreviewContent">
                {categories 
                    ? mapCategories(categories)
                    : ""}
                {post.content.length > PostConstants.PREVIEWCONTENTMAXLENGTH 
                    ? post.content.substring(0, PostConstants.PREVIEWCONTENTMAXLENGTH) + '...'
                    : post.content}
            </div>
            <div className="postPreviewAuthor">author: {(user ? <UserPreview user={user}/> : "")}</div>
            <div className="postPreviewDate">creationDate: {post.creationDate}</div>
            <div className="postPreviewCommentsCount">comments: {comments?.length ? comments.length : 0}</div>
        </div>
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
}

export default PostPreview