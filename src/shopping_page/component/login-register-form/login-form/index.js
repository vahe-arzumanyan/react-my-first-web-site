import React, {useState, useEffect} from "react";
import './style.scss';
import CustomInput from "../../custom-input";
import {useSelector, useDispatch} from "react-redux";
import {checkUsers, checkToken} from "../../../../store/combine-reducer/reducers/authorization";


const LoginForm = ({registerLoginModal}) => {
    const authorizationList = useSelector(state => state.Authorization.authorizationList)
    const dispatch = useDispatch()

    // ============================== login users / error / useState ==============================
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    })

    const [loginErrorText, setLoginErrorText] = useState({
        errorEmail: '',
        errorPassword: ''
    })

    // ============================== onChange ==============================

    const handleChange = (e) => {
        setLoginUser({...loginUser, [e.target.name]: e.target.value})
        setLoginErrorText({...loginErrorText, [e.target.name]: ''})
    }

    useEffect(() => {
        dispatch(checkUsers())
    }, [])

    // ============================== validation / error ==============================

    const validation = () => {
        let isValidation = true;
        const errorString = {
            errorEmail: '',
            errorPassword: ''
        }

        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (!loginUser.password.trim().length) {
            errorString.errorPassword = "Fill in The Required Password"
            isValidation = false;
        }

        if (!loginUser.email.trim().length) {
            errorString.errorPassword = "Fill in The Required Email"
            isValidation = false

        }if (!validEmail.test(loginUser.email)) {
            errorString.errorEmail = "Fill in Email"
            isValidation = false
        }

        setLoginErrorText(errorString)
        return isValidation;
    }
    // ============================== onCLick ==============================


    const handleClick = () => {
        if (validation()) {
            if (authorizationList.length) {
                authorizationList.forEach((item, index) => {
                    if (item.email === loginUser.email && item.password === loginUser.password) {
                        dispatch(checkToken(loginUser.email + loginUser.password))
                        localStorage.setItem("userToken", (loginUser.email + loginUser.password).toString())
                        window.location.reload()
                    }
                })
            }
            setLoginUser({
                ...loginUser,
                email: '',
                password: ''
            })
        }
    }



    return <div className={`P-login-form ${registerLoginModal ? "P-login-content-hide" : ''}`}>
        <div className='G-flex-column'>
            <CustomInput
                onChange={handleChange}
                value={loginUser.email}
                name='email'
                type='text'
                errorText={loginErrorText.errorEmail}
            />
            <CustomInput
                onChange={handleChange}
                value={loginUser.password}
                name='password'
                type='password'
                errorText={loginErrorText.errorPassword}
            />
        </div>
        <button onClick={handleClick} style={{width: "100%"}} className='G-center'>
            <p className='P-finish'>finish</p>
        </button>
    </div>
}

export default LoginForm;