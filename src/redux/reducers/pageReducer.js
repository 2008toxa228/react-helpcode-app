import { SET_PAGE, NEXT_PAGE, PREVIOUS_PAGE } from "../actions/actionTypes"

const initialState = {
    page: 0,
}

export default function PageReducer(state = initialState, action) {
    let page = state.page;

    switch (action.type) {
        case SET_PAGE:
            return {
                page: action.payload 
            }
        case NEXT_PAGE:
            return{
                page: Number(page) + 1
            }
        case PREVIOUS_PAGE:
            return {
                page: Number(page) - 1
            }

        default:
            return state
    }
}