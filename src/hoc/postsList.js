import React, { useEffect, useState } from "react";
// import { useRouteMatch, useParams } from "react-router-dom";
import PageSwitcher from "../components/pageSwitcher";
import PostPreview from "../components/postPreview";
import * as helpcodePostsService from "../services/helpcodePostsService";
import Loading from "../components/loading"
import { connect } from "react-redux";

function PostsList(props) {    
    const [posts, setPosts] = useState(undefined);
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!posts) {
            helpcodePostsService.GetPostsByBage(props.page, setPosts);
        }
        console.log(posts);
    })

    return (        
        <React.Fragment>
            <div>(page: {props.page})</div>
            <div>*beginning of content*</div>
            { 
                posts 
                    ? posts.length 
                        ? mapPosts(posts)
                        : "page does not exist"
                    : <Loading />
            }
            <div>*end of content*</div>
            <PageSwitcher /*isLoading={isLoading} onPageChange={loadPostsByPage}*/ />
        </React.Fragment>
    );

    function mapPosts(data) {        
        return (data.map(post => (
            <PostPreview
                key={ post.Id + "preview" }
                post={ post }
            />)
            )
        );
    }
}
function mapStateToProps(state) {
    return {
        page: state.pageReducer.page,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);