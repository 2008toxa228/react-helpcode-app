import axios from "axios";

// readonly appconfig = window.config.app;

var domain = "https://localhost:5001";
var apiRoute = "/api";
var postController = "/post";
var accountController = "/account";
var roleController = "/role";
var pageSize = 10;


export const Query1 = async (username, startDate, endDate, callback) => {
    let requestUrl = domain + "/query1";
    axios.get(requestUrl, { params: { username: username, startDate: startDate, endDate: endDate } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}
export const Query2 = async (username, startDate, endDate, callback) => {
    let requestUrl = domain + "/query2";
    axios.get(requestUrl, { params: { username: username, startDate: startDate, endDate: endDate } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}
export const Query3 = async (postTitle, callback) => {
    let requestUrl = domain + "/query3";
    axios.get(requestUrl, { params: { postTitle: postTitle } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}


export const GetPostsByBage = async (page, callback) => {
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
export const AddPost = async (post, accessToken, callback) => {
    let requestUrl = domain + "/addpost";
    axios.post(requestUrl, post, { headers: { "Authorization" : `Bearer ${accessToken}` }} )
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback(error));
}
export const GetPostsByCategoryId = async (id, page, callback) => {
    let requestUrl = domain + "/getpostsbycategoryid";
    axios.get(requestUrl, { params: { id: id, page: page, perPage: pageSize } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}
export const GetPostsByUserId = async (id, page, callback) => {
    let requestUrl = domain + "/getpostsbyuserid";
    axios.get(requestUrl, { params: { id: id, page: page, perPage: pageSize } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}



export const GetCategoriesByBage = async (page, callback) => {
    let requestUrl = domain + "/getcategories";
    axios.get(requestUrl, { params: { page: page, perPage: pageSize } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}
export const AddCategory = async (name, description, callback) => {
    let requestUrl = domain + "/addcategory";
    axios.get(requestUrl, { params: { name: name, description: description } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback());
}
export const AddPostCategory = async (postId, name, callback) => {
    let requestUrl = domain + "/addpostcategory";
    axios.get(requestUrl, { params: { postId: postId, name: name } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback());
}
export const RemovePostCategory = async (postId, categoryId, callback) => {
    let requestUrl = domain + "/removepostcategory";
    axios.get(requestUrl, { params: { postId: postId, categoryId: categoryId } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback());
}
export const GetCategoriesByPostId = async (id, callback) => {
    let requestUrl = domain + "/getcategoriesbypostid";
    axios.get(requestUrl, { params: { id: id } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback());
}











export const GetUserById = async (userId, callback) => {
    let requestUrl = domain + "/getuserbyid";
    axios.get(requestUrl, { params: { id: userId } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export const GetUsers = async (page, callback) => {
    let requestUrl = domain + "/getusers";
    axios.get(requestUrl, { params: { page: page, perPage: pageSize } })
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







export const GetRoleNameByUserId = async (id, callback) => {
    let requestUrl = domain + "/getrolenamebyuserid";
    axios.get(requestUrl, { params: { id: id } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback());
}











export const SignUp = async (registerModel, callback) => {
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
    .catch((error) => callback());
}



export const AddCommentRequest = async (comment, accessToken, callback) => {
    let requestUrl = domain + "/addcomment";
    axios.post(requestUrl, comment, { headers: { "content-type" : "application/json", "Authorization" : `Bearer ${accessToken}` }})
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback());
}
export const GetCommentsByPostId = async (id, callback) => {
    let requestUrl = domain + "/getcommentsbypostid";
    axios.get(requestUrl, { params: { id: id } })
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => callback());
}







function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}