import React, {useState} from "react";
import './style.scss';
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const LoginRegister = () => {

    const [registerLoginModal, setRegisterLoginModal] = useState(false)

    const handleLoginRegisterClick = () => {
        setRegisterLoginModal(!registerLoginModal)
    }
    return <div className='P-login G-center'>
        <div className="P-login-modal-bg"></div>
        <div className="P-login-modal-container">
            <button onClick={handleLoginRegisterClick} className='P-login-register G-center'>
                {registerLoginModal ? "Login" : "Register"}
            </button>
         <div className='G-center' style={{marginTop:'70px', width:'100%'}}>
             <LoginForm registerLoginModal={registerLoginModal} />
             <RegisterForm registerLoginModal={registerLoginModal} />
         </div>
        </div>
    </div>
}

export default LoginRegister;