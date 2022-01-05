import axios from "axios";

var domain = "https://localhost:44319/";
var apiRoute = "api/articles/";
var pageSize = 2;

const postsMock = [
    {
        Id: "post1",
        Title: "Post1",
        Content: "post content1",
        Score: "4",
        ViewCount: "123",
        CreationDate: "1988-03-21",
        ClosedDate: "",
        LastEditDate: "1989-03-21",
        LastActivityDate: "1990-03-21",
    },
    {
        Id: "post2",
        Title: "Post2",
        Content: "pos2 content1",
        Score: "4",
        ViewCount: "123",
        CreationDate: "1988-03-21",
        ClosedDate: "",
        LastEditDate: "1989-03-21",
        LastActivityDate: "1990-03-21",
    },
    {
        Id: "post3",
        Title: "Post3",
        Content: "post3 content",
        Score: "4",
        ViewCount: "123",
        CreationDate: "1988-03-21",
        ClosedDate: "",
        LastEditDate: "1989-03-21",
        LastActivityDate: "1990-03-21",
    },
]

export function GetPostsByBage(page, callback) {  
    // console.log({page: page, start: page * pageSize, end: page * pageSize + pageSize}, "page");
    setTimeout(() => {
        let posts = [...postsMock].splice(page * pageSize, page * pageSize + pageSize);
        console.log(page);
        console.log(posts, "returned posts");
        console.log(postsMock);
        callback(posts);
    }, 2000); 
    // let requestUrl = domain + apiRoute + `getarticlebyid?id=${id}`;
    // axios.get(requestUrl)
    // .then(function (response) {
    //     callback(response.data);
    // })
    // .catch((error) => console.warn(error));
}