import { SET_ACCESSTOKEN, SET_REFRESHTOKEN } from "../actions/actionTypes"

const initialState = {
    // page: 1,
}

export default function TokensReducer(state = initialState, action) {
    let page = state.page;

    switch (action.type) {
        case SET_ACCESSTOKEN:
            return {
                accessToken: action.payload,
                refreshToken: state?.refreshToken
            }
        case SET_REFRESHTOKEN:
            return{
                refreshToken: action.payload,
                accessToken: state?.accessToken
            }

        default:
            return state
    }
}