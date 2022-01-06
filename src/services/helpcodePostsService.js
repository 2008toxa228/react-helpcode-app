// import axios from "axios";

// readonly appconfig = window.config.app;

const appconfig = window.config.app;

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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const GetPostsByBage = async (page, callback) => {
    console.log(`service page ${page}`,postsMock);
    let posts = [...postsMock].splice(page * appconfig.pageSize, page * appconfig.pageSize + appconfig.pageSize);
    await sleep(2000);
    callback(posts);
    return;

    // let requestUrl = domain + apiRoute + `getarticlebyid?id=${id}`;
    // axios.get(requestUrl)
    // .then(function (response) {
    //     callback(response.data);
    // })
    // .catch((error) => console.warn(error));
}