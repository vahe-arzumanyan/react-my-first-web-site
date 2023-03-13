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

    // ============================== input changes / value ==============================

    const handleLoginChange = (e) => {
        setLoginUser({...loginUser,[e.target.name]:e.target.value})
        setLoginErrorText({...loginErrorText,[e.target.name]:''})
    }

  useEffect(()=>{
      dispatch(checkUsers())
  }, [])

    return <div className={`P-login-form ${registerLoginModal ? "P-login-content-hide" : null}`}>
        <div className='G-flex-column'>
            <CustomInput
                onChange={handleLoginChange}
                value={loginUser.email}
                name='email'
                type='text'
                errorText={loginErrorText.errorEmail}
            />
            <CustomInput
                onChange={handleLoginChange}
                value={loginUser.password}
                name='password'
                type='password'
                errorText={loginErrorText.errorEmail}
            />
        </div>
    </div>
}

export default LoginForm;