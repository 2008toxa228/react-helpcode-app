import { SET_POSTS_PREVIEWS } from "../actions/actionTypes"

const initialState = {
    posts: null,
}

export default function PostsPreviewsReducer(state = initialState, action) {
    // let posts = state.posts;

    switch (action.type) {
        case SET_POSTS_PREVIEWS:
            return {
                posts: action.payload 
            }

        default:
            return state
    }
}