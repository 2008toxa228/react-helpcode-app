import { SET_USER } from "../actions/actionTypes"

const initialState = {
    // page: 1,
}

export default function UserReducer(state = initialState, action) {
    let page = state.page;

    switch (action.type) {
        case SET_USER:
            return {
                user: action.payload,
            }

        default:
            return state
    }
}