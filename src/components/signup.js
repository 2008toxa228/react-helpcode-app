import React, { useState } from "react";
import { SignUp } from "../services/helpcodePostsService";

function SignUpComponent()
{
    let [response, setResponse] = useState();
    let [login, setLogin] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    if (response) {
        console.error("signup response", response);
    }

    function signUp() {
        setResponse(undefined);
        SignUp({userName: login, email: email, password:password}, setResponse);
    }

    return (
        <React.Fragment>
        <input type="text" placeholder="login" value={login} onChange={e => setLogin(e.target.value)}/>
        <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={signUp}>
            Зарегистрироваться
        </button>
        {response
            ? response == 201
                ? "Регистрация прошла успешно"
                : "Ошибка регистрации"
            : ""}
        </React.Fragment>
    );
}

export default SignUpComponent;