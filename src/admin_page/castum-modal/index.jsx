import React from "react";
import './style.scss';

const CustomModal = ({ onClose, children}) => {
    return <div className='P-custom-modal'>
        {children}
    </div>
}

export default CustomModal;
