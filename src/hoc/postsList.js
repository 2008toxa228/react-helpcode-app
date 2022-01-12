import React, { useEffect, useState } from "react";
import PageSwitcher from "../components/pageSwitcher";
import PostPreview from "../components/postPreview";
import * as helpcodePostsService from "../services/helpcodePostsService";
import Loading from "../components/loading"
import { connect, useSelector } from "react-redux";

function PostsList(props) {
    const [posts, setPosts] = useState(undefined);

    if (props.match.params.categoryId) {
        if (!posts && props.page) {
            helpcodePostsService.GetPostsByCategoryId(props.match.params.categoryId, props.page, setPosts);
        }
    } else if (props.match.params.userId) {
        if (!posts && props.page) {
            helpcodePostsService.GetPostsByUserId(props.match.params.userId, props.page, setPosts);
        }
    } else {
        if (!posts && props.page) {
            helpcodePostsService.GetPostsByBage(props.page, setPosts);
        }
    }

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
                key={ post.id + "preview" }
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