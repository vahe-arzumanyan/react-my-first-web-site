import React, {useState, useEffect} from "react";
import './style.scss';
import CustomInput from "../../custom-input";

const RegisterForm = ({registerLoginModal}) => {

    const [registerUser, setRegisterUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errorTextRegisterUser, setErrorTextRegisterUser] = useState({
        errorFirstName: '',
        errorLastName: '',
        errorEmail: '',
        errorPassword: '',
        errorConfirmPassword: ''
    })

    // =========================== get input value ===========================

    const handleLoginChange = (e) => {
        setRegisterUser({...registerUser, [e.target.name]: e.target.value})
        setErrorTextRegisterUser({...errorTextRegisterUser, [e.target.name]: e.target.value})
    }

    // ===========================  ===========================


    return <div className={`P-register-form ${registerLoginModal ? "P-register-content-hide" : null}`}>
        <div className='G-flex-column hh'>
            <CustomInput
                onChange={handleLoginChange}
                name='firstName'
                type='text'
                value={registerUser.firstName}
                errorText={errorTextRegisterUser.errorFirstName}
            />
            <CustomInput
                onChange={handleLoginChange}
                name='lastName'
                type='text'
                value={registerUser.lastName}
                errorText={errorTextRegisterUser.errorLastName}
            />
            <CustomInput
                onChange={handleLoginChange}
                name='email'
                type='email'
                value={registerUser.email}
                errorText={errorTextRegisterUser.errorEmail}
            />
            <CustomInput
                onChange={handleLoginChange}
                name='password'
                type='password'
                value={registerUser.password}
                errorText={errorTextRegisterUser.errorPassword}
            />
            <CustomInput
                onChange={handleLoginChange}
                name='confirmPassword'
                type='password'
                value={registerUser.confirmPassword}
                errorText={errorTextRegisterUser.errorPassword}
            />
        </div>
    </div>
}

export default RegisterForm;