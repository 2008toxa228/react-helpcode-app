import React, { useEffect, useState } from "react";
import PageSwitcher from "../components/pageSwitcher";
import PostPreview from "../components/postPreview";
import * as helpcodePostsService from "../services/helpcodePostsService";
import Loading from "../components/loading"
import { connect } from "react-redux";

function PostsList(props) {
    const [posts, setPosts] = useState(undefined);

    useEffect(() => {
        console.log("useEffect was called");
        if (!posts) {
            console.log("request for page",props.page);
            helpcodePostsService.GetPostsByBage(props.page-1, setPosts);
        }
        console.log("posts", posts);
    })

    return (        
        <React.Fragment>
            { 
                posts 
                    ? posts.length 
                        ? mapPosts(posts)
                        : <div>page does not exist</div>
                    : <Loading />
            }
            <PageSwitcher />
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