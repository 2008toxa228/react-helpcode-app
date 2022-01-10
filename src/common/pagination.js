import React from "react";
import { PREVIOUS_PAGE } from "../redux/actions/actionTypes";

function Pagination (props) {
    let current = isNotNullOrUndefined(Number(props.current)) 
        ? props.current 
        : 6

    let displayed = 3;

    let count = isNotNullOrUndefined(props.count)
        ? props.count 
        : 15;

    let first = [];
    let last = [];
    let pages = [];
    
    let startPage = current-Math.floor(displayed/2);
    let startIndex = startPage > count - displayed ? count - displayed + 1 : startPage;
    let endIndex = current+Math.floor(displayed/2)
    for (let i = startIndex; i <= endIndex || i <= displayed; i++) {
        if (i > 1 && i < count) {
            pages.push(<PageView 
                key={"pageView" + i}
                page={i} 
                current={current} 
                path={props.path}/>
            )
        }
    }

    first.push(<PageView 
        key={"pageView0"}
        page={1} 
        current={current}
        path={props.path}/>
    );
    if (current > displayed)
    {
        first.push(<PageView key={"emptyPageView0"} />);
    }

    if (current <= count - displayed)
    {
        last.push(<PageView key={"emptyPageView1"} />)
    }
    last.push(<PageView 
        key={"pageView"+count}
        page={count} 
        current={current}
        path={props.path}/>
    );

    return(
        <React.Fragment>
            <ul>
                <li>
                    <a className="paginateMovePreviousButton page-item" href={props.current 
                        ? Number(props.current) <= 1
                            ? 1 
                            : props.path + (Number(props.current)-1)
                        : 1}
                        >Previous</a>
                </li>            
                {first}
                {pages}
                {last}
                <li>
                    <a className="paginateMoveNextButton page-item"href={props.current 
                        ? Number(props.current) >= count
                            ? count
                            : props.path + (Number(props.current)+1)
                        : count}>Next</a>
                </li>
            </ul>
        </React.Fragment>
    );

}

export default Pagination;

function PageView (props) {
    let page;
    if (isNotNullOrUndefined(props.page)) {
        page = String(props.page);
    }

    return (
        <li className={"page-item " + ((page && page == props.current) ? "active": "")}
            key = {props.page + "li"}>
            <a href={props.page ? props.path + page : undefined}>
                {
                    page 
                        ? page
                        : <span>&hellip;</span>
                }
            </a>
        </li>
    );
}

function isNotNullOrUndefined (value)
{
    if (value !== undefined && value !== null)
    {
        return true;
    }
    return false;
}