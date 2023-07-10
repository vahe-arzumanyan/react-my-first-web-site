import React from "react";
import './style.scss';

const CustomModal = ({children, onClose}) => {
    return <div onClick={onClose}>
        {children}
    </div>
}

export default CustomModal;
