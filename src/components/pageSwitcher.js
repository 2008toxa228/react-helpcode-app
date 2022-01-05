import React, { useEffect } from "react";
import { NavLink, useParams, useRouteMatch } from "react-router-dom"
import { Link } from "react-router-dom";
import { Routes } from "../common/constants";
import "./css/pageSwitcher.css"; 


function PageSwitcher (props) {
    let pageMatch = useRouteMatch("*/page/:page");
    let { path, url } = useRouteMatch();

    let page = Number(pageMatch?.params?.page);
    if (!Number.isInteger(page)) {
        page = 0;
    }

    // console.log(pageMatch);
    // console.log(page);
    // console.log(path);
    // console.log(url);
    
    // ToDo rewrite link disabling when page is not avaliable

    useEffect(() => {
        if (props.pageHook != page && props.setPageHook) {
            // console.log(page, "calling setpage hook");
            props.setPageHook(page);
        }
    })

    return (
        <div className="pageSwitcher">
            <div className="wrapper">
                <NavLink to={`${path}/page/${Number(page) - 1}`}
                    className={page <= 0 ? "disabledLink" : ""}>
                    previous page
                </NavLink>
                <div className="pageNumber">current page: {page}</div>
                <NavLink to={`${path}/page/${Number(page) + 1}`}>
                    next page
                </NavLink>
            </div>
        </div>
        
    );
}

export default PageSwitcher