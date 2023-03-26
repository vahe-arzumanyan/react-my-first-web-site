import React from "react";
import './style.scss';

const CustomModal = ({children, onClose}) => {
    return <div className='P-custom-modal' onClick={onClose}>
        {children}
    </div>
}

export default CustomModal;
