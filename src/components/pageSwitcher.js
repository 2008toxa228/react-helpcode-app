import React, { useEffect } from "react";
import { /*NavLink, useParams,*/ useRouteMatch } from "react-router-dom"
import { useHistory } from "react-router-dom";
import "./css/pageSwitcher.css";
import { connect } from "react-redux";
import { setPage, nextPage, previousPage } from "../redux/actions/actions";
import Pagination from "../common/pagination";
import { Routes } from "../common/constants";


function PageSwitcher (props) {
    let pageMatch = useRouteMatch("*" + Routes.BYPAGE);
    let { path } = useRouteMatch();
    const history = useHistory();

    let page = Number(pageMatch?.params?.page);
    if (!Number.isInteger(page)) {
        page = 1;
    } else if (page < 1) {
        page = 1;
    }

    // console.log(pageMatch);
    // console.log(page);
    // console.log(path);
    // console.log(url);
    
    // ToDo rewrite link disabling when page is not avaliable

    useEffect(() => {
        if (page !== props.page) {
            props.onSetPage(page);
        }
    })
    
    // const handlePageClick = (data) => {
    //     history.push(`${path}/page/${data.selected+1}`);
    // };

    return (
        <div className="pageSwitcher">
            <div className="paginationWrapper">
                <Pagination
                    count={10}
                    current={page} 
                    path={`${path}/page/`} 
                />
            </div>
        </div>
        
    );
}

function mapStateToProps(state) {
    return {
        page: state.pageReducer.page,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetPage: page => dispatch(setPage(page)),
        onNextPage: () => dispatch(nextPage()),
        onPreviousPage: () => dispatch(previousPage()),
        // onSetPosts: posts => dispatch(setPostsPreviews(posts)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSwitcher);