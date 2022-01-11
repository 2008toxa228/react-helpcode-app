import React, { useEffect, useState } from "react";
import { SignIn } from "../services/helpcodePostsService";
import Cookies from "universal-cookie";

import { connect, useDispatch, useSelector } from "react-redux";
import { setAccessToken, setRefreshToken } from "../redux/actions/actions";

function SignInComponent()
{
    const cookies = new Cookies();

    let [response, setResponse] = useState();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    if (response) {
        console.error("signup response", response);
        cookies.set("accessToken", response.accessToken);
        cookies.set("refreshToken", response.refreshToken);
        window.location.assign("/");
    }
    else {        
        cookies.remove("accessToken");
        cookies.remove("refreshToken");
    };

    function signIn() {
        setResponse(undefined);
        SignIn({email: email, password:password}, setResponse);
    }

    return (
        <React.Fragment>
        <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={signIn}>
            Войти
        </button>
        {response
            ? response != 400
                ? "Авторизация успешно"
                : "Ошибка авторизации"
            : ""}
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    return {
        accessToken: state.tokensReducer.accessToken,
        refreshToken: state.tokensReducer.refreshToken
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetPage: token => dispatch(setAccessToken(token)),
        onNextPage: token => dispatch(setRefreshToken(token)),
    }
}

export default SignInComponent;