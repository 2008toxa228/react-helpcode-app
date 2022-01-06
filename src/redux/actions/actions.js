import { SET_PAGE, NEXT_PAGE, PREVIOUS_PAGE, SET_POSTS_PREVIEWS, GET_PAGE } from "./actionTypes"

export function setPage(number) {
    return {
        type: SET_PAGE,
        payload: number
    }
}

export function nextPage() {
    return {
        type: NEXT_PAGE
    };
}

export function previousPage() {
    return {
        type: PREVIOUS_PAGE
    };
}

export function setPostsPreviews(posts) {
    return {
        type: SET_POSTS_PREVIEWS,
        payload: posts
    };
}