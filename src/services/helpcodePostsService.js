import axios from "axios";

// readonly appconfig = window.config.app;

var domain = "https://localhost:5001";
var apiRoute = "/api";
var postController = "/post";
var accountController = "/account";
var roleController = "/role";
var pageSize = 2;

export const GetPostsByBage = async (page, callback) => {
    // // page = Number(page) - 1;
    // let posts = [...postsMock].splice(page * pageSize, page * pageSize + pageSize);
    // await sleep(800);
    // callback(posts);
    // return;

    let requestUrl = domain + "/getposts";
    axios.get(requestUrl, { params: { page: page, perPage: pageSize } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export const GetPostById = async (postId, callback) => {
    let requestUrl = domain + "/getpostbyid";
    axios.get(requestUrl, { params: { id: postId } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export const GetUserById = async (userId, callback) => {
    let requestUrl = domain + "/getuserbyid";
    axios.get(requestUrl, { params: { id: userId } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export const GetUser = async (accessToken, callback) => {
    let requestUrl = domain + "/getuser";
    axios.get(requestUrl, { headers: { "Authorization" : `Bearer ${accessToken}` }})
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback());
}

export const SignUp = async (registerModel, callback) => {
    console.error(registerModel);
    let requestUrl = domain + "/signup";
    axios.post(requestUrl, registerModel )
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback(error));
}

export const SignIn = async (authenticationModel, callback) => {
    let requestUrl = domain + "/signin";
    axios.post(requestUrl, authenticationModel )
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback(400));
}

export const Refresh = async (refreshToken, callback) => {
    let requestUrl = domain + "/refresh";
    axios.post(requestUrl, refreshToken, { headers: { "content-type" : "application/json" }})
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback(error));
}


// export const GetUserNameById = async (postId, callback) => {
//     // page = Number(page) - 1;
//     let post = [...postsMock].find((element, index, array) => { if (element.Id === postId) return true;});
//     await sleep(800);
//     callback(post);
//     return;
// }




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}