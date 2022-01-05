import React, { useEffect, useState } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import { Routes } from "../common/constants";
import PageSwitcher from "../components/pageSwitcher";
import PostPreview from "../components/postPreview";
import * as helpcodePostsService from "../services/helpcodePostsService";
import Loading from "../components/loading"


function PostsList(props) {
    const [posts, setPosts] = useState();
    const [page, setPage] = useState();
    let { path, url } = useRouteMatch();


    if (!posts) {
        helpcodePostsService.GetPostsByBage(page, mapPosts);
        console.log(posts);
    }

    return (        
        <React.Fragment>
        <PageSwitcher pageHook={page} setPageHook={setPage} />
            <div>(page: {page})</div>
            { 
                posts 
                    ? posts.length 
                        ? posts
                        : "page does not exist"
                    : <Loading />
            }
            <div>end of content</div>
            <PageSwitcher pageHook={page} setPageHook={changePage} />
        </React.Fragment>
    );
    
    function changePage(page) {
        setPage(page);
        setPosts(null);
    }

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