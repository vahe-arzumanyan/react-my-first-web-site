import React from "react";
import './style.scss';

const CustomModal = () => {
    return <div className='G-custom-modal'>
        <p>Are you sure you want to delete ?</p>
<div className='G-flex G-justify-between'>
    <button>No</button>
    <button>Yes</button>
</div>

    </div>
}

export default CustomModal;
