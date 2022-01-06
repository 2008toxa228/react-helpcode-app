import React from "react";
import { PREVIOUS_PAGE } from "../redux/actions/actionTypes";

function Pagination (props) {

    console.log(props.current);

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
    

    for (let i = current-Math.floor(displayed/2); i <= current+Math.floor(displayed/2); i++) {
        if (i > 1 && i < count) {
            pages.push(<PageView 
                page={i} 
                current={current} 
                path={props.path}/>
            )
        }
    }

    first.push(<PageView 
        page={1} 
        current={current}
        path={props.path}/>
    );
    if (current > displayed)
    {
        first.push(<PageView />);
    }

    if (current <= count - displayed)
    {
        last.push(<PageView />)
    }
    last.push(<PageView 
        page={count} 
        current={current}
        path={props.path}/>
    );

    // if (current > displayed)
    // {
    //     pages.push(<PageView />)
    // }

    // if (current < count - displayed)
    // {
    //     pages.push(<PageView page={current-1}/>)
    //     pages.push(<PageView page={current}/>)        
    //     pages.push(<PageView page={current+1}/>)
    // }

    // if (current < count - displayed - 1)
    // {
    //     pages.push(<PageView />)
    //     pages.push(<PageView page={count}/>)
    // }




    return(
        <ul>
            {first}
            {pages}
            {last}
        </ul>
    );

}

export default Pagination;

function PageView (props) {
    let page;
    if (isNotNullOrUndefined(props.page)) {
        console.log("suka");
        page = String(props.page);
    }

    return (
        <li className={"page-item " + ((page && page == props.current) ? "active": "")}>
            <a href={props.page ? props.path + page : undefined}>
                {
                    page 
                        ? page
                        : "..."
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