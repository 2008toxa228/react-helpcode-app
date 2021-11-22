import React, { useState } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import { Routes } from "../common/constants";
import PageSwitcher from "../components/pageSwitcher";
import PostPreview from "../components/postPreview";


function PostsList(props) {
    const [posts, setPosts] = useState();
    let { path, url } = useRouteMatch();

    return (        
        <React.Fragment>
            { 
                posts 
                    ? posts.length 
                        ? posts
                        : "page not exist"
                    : ""
            }
            <PageSwitcher name="postsList" pathMatch={Routes.POSTSBYPAGE} />
        </React.Fragment>
    );
    
    function mapPosts(data) {
        setPosts(data.map(post => (
            <PostPreview
                key={ post.Id + "preview" }
                post={ post }
            />)
            )
        );
    }
}

export default PostsList