import React, {useState} from "react";

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
            isValidate = false
        }

        if (!registerUser.lastName.trim().length) {
            errorString.errorLastName = 'fill in the required last name'
            isValidate = false
        }

        if (!registerUser.email.trim().length) {
            errorString.errorEmail = 'fill in the required email'
            isValidate = false;
        } else if (!validEmail.test(registerUser.email)) {
            errorString.errorEmail = 'fill in email'
            isValidate = false
        }

        if (!registerUser.password.trim().length) {
            errorString.errorPassword = 'fill in the required password'
            isValidate = false

        } else if(registerUser.password.trim().length && registerUser.password.trim().length < 8){
            errorString.errorPassword = 'should not be less 8'
            isValidate = false
        }

        if(!registerUser.confirmPassword.trim().length){
            errorString.errorConfirmPassword = 'fill in the required confirm password'
            isValidate = false
        }
        else if(registerUser.errorConfirmPassword.trim().length && registerUser.confirmPassword.trim().length !== registerUser.password.length) {
            errorString.errorConfirmPassword = 'do not correspond to each other confirm password and password'
            isValidate = false;
        }

        setErrorTextRegisterUser(errorString)
        return isValidate;
    }

    return {validation, errorTextRegisterUser, setErrorTextRegisterUser};
}

export default useRegisterValidation;


