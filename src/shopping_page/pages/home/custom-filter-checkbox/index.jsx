import React from "react";
import './style.scss';

const CustomFilterCheckbox = ({onClick, type, info, name, value}) => {

    const handleCheckedClick = (e) => {
        onClick(e)
    }

    return <div className='G-flex P-categories-input-checkbox'>
        <input onClick={handleCheckedClick}
               value={value}
               name={name}
               type={type}
        />
        <p style={{color: info}}>{info}</p>
    </div>
}

export default CustomFilterCheckbox;