import { useState } from "react";
import { GetUserById } from "../services/helpcodePostsService";
import UserPreview from "./userPreview";



function Comment (props) {
    let [user, setUser] = useState();
    let comment = props.comment;

    console.log("comment", comment);

    if (!user && comment?.ownerUserId) {
        GetUserById(comment?.ownerUserId, setUser);
    }

    return (<div className="bordered">
        <div>{comment?.content}</div>
        <div style={{marginTop: "5px", borderTop: "1px dashed rgba(255, 255, 255, 0.082)", paddingTop:"4px"}}>
            commented by<UserPreview user={user}/>
        </div>
    </div>);
}

export default Comment