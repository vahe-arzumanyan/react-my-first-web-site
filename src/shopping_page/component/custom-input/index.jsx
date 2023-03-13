import React from "react";
import './style.scss';

const CustomInput = ({onChange, value, name, type, errorText}) => {

    const handleLoginChange = (e) => {
        onChange(e);
    }


    return <div className='G-flex-column' style={{marginTop:'10px'}}>
        <label className='G-input-name'>{name}</label>
        <p>{errorText}</p>
        <input className='G-input-line'
            onChange={handleLoginChange}
            value={value}
            name={name}
            type={type}
        />

    </div>

}

export default CustomInput;

