import React from "react";
import './style.scss';

const RegisterForm = ({registerLoginModal}) => {
    return <div className={`P-register-form ${registerLoginModal ? "P-register-content-hide" : null}`}>
        register
    </div>
}

export default RegisterForm;