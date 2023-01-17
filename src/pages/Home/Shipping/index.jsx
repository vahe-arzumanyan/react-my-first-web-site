import React from "react";
import './style.scss';

const ShippingInfo = ({item}) =>{
    return <div className='G-container'>
<div className='G-center P-shipping'>
    <span className={item.svgIcon} style={{margin:'0 15px'}}></span>
    <p>{item.title}</p>
</div>
    </div>
}

export default ShippingInfo;