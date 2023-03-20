import React, {useState, useEffect} from "react";
import './style.scss';
import CustomInput from "../../custom-input";
import {createUsers} from "../../../../store/combine-reducer/reducers/authorization";
import {useDispatch, useSelector} from "react-redux";


const RegisterForm = ({registerLoginModal}) => {

    const authorizationList = useSelector(state => state.Authorization.authorizationList);
    const dispatch = useDispatch();
    const {validation, errorTextRegisterUser, setErrorTextRegisterUser} = useRegisterValidation()

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


    const handleClick = ({validation}) => {
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


    // =========================== input validation start ===========================

    const useRegisterValidation = () => {
        const [errorTextRegisterUser, setErrorTextRegisterUser] = useState({
            errorFirstName: '',
            errorLastName: '',
            errorEmail: '',
            errorPassword: '',
            errorConfirmPassword: ''
        })

        const validation = (registerUser) => {
            let isValidate = true;
            let errorString = {
                errorFirstName: '',
                errorLastName: '',
                errorEmail: '',
                errorPassword: '',
                errorConfirmPassword: ''
            }

            const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            if (!registerUser.firstName.trim().length) {
                errorString.errorFirstName = 'fill in the required first name'
                isValidate = false;
            }

            if (!registerUser.lastName.trim().length) {
                errorString.errorLastName = 'fill in the required last name'
                isValidate = false;
            }

            if (!registerUser.email.trim().length) {
                errorString.errorEmail = 'fill in the required email'
                isValidate = false;
            } else if (!validEmail.test(registerUser.errorEmail)) {
                errorString.errorEmail = 'fill in email'
            }

            if (!registerUser.password.trim().length) {
                errorString.errorPassword = 'fill in the required password'
                isValidate = false;
            } else if (registerUser.confirmPassword.trim().length && registerUser.confirmPassword.trim().length !== registerUser.password.length) {
                errorString.errorConfirmPassword = 'do not correspond to each other confirm password and password'
                isValidate = false;
            }

            setErrorTextRegisterUser(errorString)
            return isValidate;

        }
        return {validation, errorTextRegisterUser, setErrorTextRegisterUser}
    }


    // =========================== input validation start ===========================

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