import React, { useEffect } from "react";
import { NavLink, useParams, useRouteMatch } from "react-router-dom"
import { Link } from "react-router-dom";
import { Routes } from "../common/constants";
import "./css/pageSwitcher.css"; 
import { connect } from "react-redux";
import { setPage, nextPage, previousPage, getPage } from "../redux/actions/actions";


function PageSwitcher (props) {
    let pageMatch = useRouteMatch("*/page/:page");
    let { path, url } = useRouteMatch();

    let page = Number(pageMatch?.params?.page);
    if (!Number.isInteger(page)) {
        page = 0;
    }
    
    // ToDo rewrite link disabling when page is not avaliable

    useEffect(() => {
        if (props.pageHook != page && props.setPageHook) {
            // console.log(page, "calling setpage hook");
            props.setPageHook(page);
        }
    })

    return (
        <div className="pageSwitcher">
            {/* <div className="wrapper">
                <NavLink to={`${path}/page/${Number(page) - 1}`}
                    className={page <= 0 ? "disabledLink" : ""}>
                    previous page
                </NavLink>
                <div className="pageNumber">current page: {page}</div>
                <NavLink to={`${path}/page/${Number(page) + 1}`}>
                    next page
                </NavLink>
            </div> */}
            <div className="wrapper">
                <button onClick={() => (
                    props.onPreviousPage(),
                    console.log(props.page)
                )}>prev</button>
                
                <div>cur: {props.page}</div>

                <button onClick={() => (
                    props.onNextPage(),
                    console.log(props.page)
                )}>next</button>
                
                <button onClick={() => (
                    props.onSetPage(10),
                    console.log(props.page)
                )}>set 10</button>
            </div>
        </div>
        
    );
}

function mapStateToProps(state) {
    // console.log("mapStateToProps(state)", state);
    return {
        page: state.page,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetPage: page => dispatch(setPage(page)),
        onNextPage: () => dispatch(nextPage()),
        onPreviousPage: () => dispatch(previousPage()),
        onGetPage: () => dispatch(getPage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSwitcher);