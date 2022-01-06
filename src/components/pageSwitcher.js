import React, { useEffect } from "react";
import { /*NavLink, useParams,*/ useRouteMatch } from "react-router-dom"
import { useHistory } from "react-router-dom";
import "./css/pageSwitcher.css"; 
import { connect } from "react-redux";
import { setPage, nextPage, previousPage } from "../redux/actions/actions";
import ReactPaginate from "react-paginate";
import Pagination from "../common/pagination";


function PageSwitcher (props) {
    let pageMatch = useRouteMatch("*/page/:page");
    let { path } = useRouteMatch();
    const history = useHistory();

    let page = Number(pageMatch?.params?.page);
    if (!Number.isInteger(page)) {
        page = 0;
    }
    
    // ToDo rewrite link disabling when page is not avaliable

    useEffect(() => {
        if (page !== props.page) {
            props.onSetPage(page);
        }
    })
    
    const handlePageClick = (data) => {
        // window.location=`${path}/page/${data.selected+1}`;
        history.push(`${path}/page/${data.selected+1}`);
        // window.location.reload();
    };

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