import React from "react";
import './style.scss';

const LoginForm = ({registerLoginModal}) => {
    return <div className={`P-login-form ${registerLoginModal ? "P-login-content-hide" : null}`}>
        login
    </div>
}

export default LoginForm;