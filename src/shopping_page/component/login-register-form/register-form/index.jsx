import React, {useState, useEffect} from "react";
import './style.scss';
import CustomInput from "../../custom-input";
import {createUsers} from "../../../../store/combine-reducer/reducers/authorization";
import {useDispatch, useSelector} from "react-redux";
import useRegisterValidation from "../hook-validation";


const RegisterForm = ({registerLoginModal}) => {

    const authorizationList = useSelector(state => state.Authorization.authorizationList);
    const dispatch = useDispatch();
    const  {validation, errorTextRegisterUser, setErrorTextRegisterUser} = useRegisterValidation()

    const [registerUser, setRegisterUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })




    // =========================== get input value ===========================

    const handleChange = (e) => {
        setRegisterUser({...registerUser, [e.target.name]: e.target.value})
        setErrorTextRegisterUser({...errorTextRegisterUser, [e.target.name]: ''})
    }

    useEffect(() => {
        if (authorizationList.length) {
            localStorage.setItem('authorizationUser', JSON.stringify(authorizationList))
        }
    }, [authorizationList])


    const handleClick = () => {
        if (validation(registerUser)) {
            dispatch(createUsers(registerUser))
            setRegisterUser({
                ...registerUser,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
    }




    return <div className={`P-register-form ${registerLoginModal ? "P-register-content-hide" : null}`}>
        <div className='G-flex-column hh'>
            <CustomInput
                onChange={handleChange}
                name='firstName'
                type='text'
                value={registerUser.firstName}
                errorText={errorTextRegisterUser.errorFirstName}
            />
            <CustomInput
                onChange={handleChange}
                name='lastName'
                type='text'
                value={registerUser.lastName}
                errorText={errorTextRegisterUser.errorLastName}
            />
            <CustomInput
                onChange={handleChange}
                name='email'
                type='email'
                value={registerUser.email}
                errorText={errorTextRegisterUser.errorEmail}
            />
            <CustomInput
                onChange={handleChange}
                name='password'
                type='password'
                value={registerUser.password}
                errorText={errorTextRegisterUser.errorPassword}
            />
            <CustomInput
                onChange={handleChange}
                name='confirmPassword'
                type='password'
                value={registerUser.confirmPassword}
                errorText={errorTextRegisterUser.errorPassword}
            />
        </div>
        <button onClick={handleClick} style={{width: "100%"}} className='G-center'>
            <p className='P-finish'>
                finish
            </p>
        </button>
    </div>
}

export default RegisterForm;