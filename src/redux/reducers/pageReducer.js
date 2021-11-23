import { SET_PAGE, NEXT_PAGE, PREVIOUS_PAGE, GET_PAGE } from "../actions/actionTypes"
// import * as ApiProvider from "../../ApiProvider";
import React from "react";
import { setPage, nextPage, previousPage } from "../actions/actions";

const initialState = {
    page: 0,
}

export default function articleReducer(state = initialState, action) {

    // console.log("reducer state", state, action);

    let page = state.page;

    switch (action.type) {
        case GET_PAGE:
            return {
                page: page
            }
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
    
    // function changeArticleDescription (value) {
    //     article.Description = value;
    //     setArticle({...article});
    // }
    
    // function changeArticlePreview (value) {
    //     article.Preview = value;
    //     setArticle({...article});
    // }
    
    // function changeArticleContent (value) {
    //     article.Content = value;
    //     setArticle({...article});
    // }
    
    // function changeArticleName (value) {
    //     article.Name = value;
    //     setArticle({...article});
    // }
    
    // function saveButtonCallback (result) {
    //     if (result) {
    //         setIsEditing(false);
    //         alert("saved succesfully");
    //     } else {
    //         alert("error occured during saving");
    //     }
    // }
}