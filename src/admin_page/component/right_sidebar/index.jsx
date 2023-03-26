import React, {useState} from "react";
import './style.scss';
import CustomModal from "../../castum-modal";
import Logout from "../logout";


const RightSideBar = ({children}) => {

    const [logoutModal, setLogoutModal] = useState(false)


    const handleLogout = () => {
        setLogoutModal(!logoutModal)
    }
    const logoutUser = () => {
        let userToken = localStorage.getItem('userToken')
        if (userToken) {
            userToken = ''
            localStorage.setItem('userToken', userToken)
            window.location.reload();
        }
    }

    return <div className='P-RightSideBar G-flex G-justify-between'>
        {children}

        {/* ================== logout ================== */}
        <button onClick={handleLogout} className='icon-logout'>
            {logoutModal ? <CustomModal onClose={handleLogout}>
                <Logout onClose={handleLogout} logoutUser={logoutUser}/>
            </CustomModal> : null}
        </button>
    </div>
}

export default RightSideBar;