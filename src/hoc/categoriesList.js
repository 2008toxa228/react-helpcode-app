import React, { useEffect, useState } from "react";
import PageSwitcher from "../components/pageSwitcher";
import * as helpcodePostsService from "../services/helpcodePostsService";
import Loading from "../components/loading"
import { connect, useSelector } from "react-redux";
import Category from "../components/category";

function CategoriesList(props) {
    const [categories, setCategories] = useState();

    useEffect(() => {
        if (!categories && props.page) {
            helpcodePostsService.GetCategoriesByBage(props.page, setCategories);
        }
    })

    return (        
        <React.Fragment>
            { 
                categories 
                    ? categories.length 
                        ? mapCategories(categories)
                        : <div>page does not exist</div>
                    : <Loading />
            }
            <PageSwitcher />
        </React.Fragment>
    );

    function mapCategories(data) {        
        return (data.map(category => (
            <Category
                key={ category.id + "preview" }
                category={ category }
            />)
            )
        );
    }
}
function mapStateToProps(state) {
    return {
        page: state.pageReducer.page,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);