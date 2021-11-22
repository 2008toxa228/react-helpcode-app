import React from "react";
import { useParams, useRouteMatch } from "react-router-dom"
import { Link } from "react-router-dom";
import { Routes } from "../common/constants";


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

    return (
        <div className="pageSwitcher">
            <div className="pageSwitcherName">{props.name}</div>
            <Link className={page <= 0 ? "disabledLink" : ""} to={`${path}/page/${Number(page) - 1}`}>previous page</Link>
            <div className="pageNumber">current page: {page}</div>
            <Link to={`${path}/page/${Number(page) + 1}`}>next page</Link>
        </div>
    );
}

export default PageSwitcher