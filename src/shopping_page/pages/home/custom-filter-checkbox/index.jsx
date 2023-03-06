import React from "react";
import './style.scss';

const CustomFilterCheckbox = ({onClick, type, number, info, name, value}) => {

const handleCheckedClick = (e) => {
onClick(e)
}

    return <div className='G-flex'>
<input onClick={handleCheckedClick}
       value={value}
       name={name}
       type={type}
        />
        <p>{info}</p>
    </div>
}

export default CustomFilterCheckbox;