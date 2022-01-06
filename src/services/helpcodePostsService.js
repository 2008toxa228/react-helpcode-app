// import axios from "axios";

// readonly appconfig = window.config.app;

var domain = "https://localhost:44319/";
var apiRoute = "api/articles/";
var pageSize = 2;

const postsMock = [
    {
        Id: "post1",
        OwnerUserId: "user1",
        StatusCode: "0",
        Title: "Post1",
        Content: "post1 content1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ViewCount: "123",
        ClosedDate: "",
    },
    {
        Id: "post2",
        OwnerUserId: "user2",
        StatusCode: "0",
        Title: "Post2",
        Content: "post2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ViewCount: "56",
        ClosedDate: "",
    },
    {
        Id: "post3",
        OwnerUserId: "user1",
        StatusCode: "0",
        Title: "Post3",
        Content: "3asdas313123 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ViewCount: "321",
        ClosedDate: "",
    },
]
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const GetPostsByBage = async (page, callback) => {
    // page = Number(page) - 1;
    let posts = [...postsMock].splice(page * appconfig.pageSize, page * appconfig.pageSize + appconfig.pageSize);
    await sleep(800);
    callback(posts);
    return;

    // let requestUrl = domain + apiRoute + `getarticlebyid?id=${id}`;
    // axios.get(requestUrl)
    // .then(function (response) {
    //     callback(response.data);
    // })
    // .catch((error) => console.warn(error));
}

export const GetPostById = async (postId, callback) => {
    // page = Number(page) - 1;
    let post = [...postsMock].find((element, index, array) => { if (element.Id === postId) return true;});
    await sleep(800);
    callback(post);
    return;
}