import React from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../common/constants";

function Category (props) {
    let category = props.category;

    return (
        <div className="categoryPreview">
            {/* <div>{JSON.stringify(category, null, 2)}</div> */}
            <NavLink to={Routes.POSTSBYCATEGORY + "/" + category.id}>{category.name}</NavLink>
        </div>
    );
}

export default Category