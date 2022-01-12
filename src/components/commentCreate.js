import { useState } from "react";
import Cookies from "universal-cookie";
import { previousPage } from "../redux/actions/actions";
import { AddCommentRequest } from "../services/helpcodePostsService";
import UserPreview from "./userPreview";



function CommentCreate (props) {
    let cookie = new Cookies();
    let [comment, setComment] = useState();

    function saveComment(){
        if (comment?.content) {
            AddCommentRequest(comment, cookie.get("accessToken"), function (response) {
                if (response) {
                    alert("comment was added");
                    window.location.reload();
                }
            });
        }
    }
    console.log("postId", props.postId);

    function changeContent (value) {
        let newComment = {...comment}
        newComment.postId = props.postId;
        newComment.content = value;
        return newComment;
    }

    return (<div  style={{display: "flex"}}>
        <textarea name="contentArea" cols="60" rows="2" value={comment?.content} onChange={(e) => setComment(changeContent(e.target.value))}></textarea>
        <button onClick={saveComment}>Add comment</button>
    </div>);
}

export default CommentCreate