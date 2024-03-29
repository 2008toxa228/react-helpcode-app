import React, { useEffect, useState } from "react";
import PageSwitcher from "../components/pageSwitcher";
import * as helpcodePostsService from "../services/helpcodePostsService";
import Loading from "../components/loading"
import { connect, useSelector } from "react-redux";
import UserPreview from "../components/userPreview";

function UsersList(props) {
    const [users, setUsers] = useState();

    useEffect(() => {
        if (!users && props.page) {
            helpcodePostsService.GetUsers(props.page, setUsers);
        }
    })

    return (        
        <React.Fragment>
            { 
                users 
                    ? users.length 
                        ? mapUsers(users)
                        : <div>page does not exist</div>
                    : <Loading />
            }
            <PageSwitcher />
        </React.Fragment>
    );

    function mapUsers(data) {        
        return (data.map(user => (
            <UserPreview
                key={ user.id + "preview" }
                user={ user }
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);