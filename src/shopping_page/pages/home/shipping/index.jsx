import React, {useState} from "react";
import './style.scss';

const ShippingInfo = () => {

    const [shippingInfo, setShippingInfo] = useState([
        {
            title: 'Quality Product',
            svgIcon: 'icon-done'
        },
        {
            title: 'Free Shipping',
            svgIcon: 'icon-shipping-car'
        },
        {
            title: '14-Day Return',
            svgIcon: 'icon-equal'
        },
        {
            title: '24/7 Support',
            svgIcon: 'icon-call'
        }
    ])

    return <div className='G-justify-between'>
        {shippingInfo.length ? shippingInfo.map((item, index) => {
            return <div item={item} key={index}>
                <div className='P-shipping G-justify-between'>
                <div className='P-shipping-info G-center '>
                    <span className={item.svgIcon} style={{margin:'0 5px'}}></span>
                    <p style={{color:'white'}}>{item.title}</p>
                </div>
                </div>
            </div>
        }) : null}
    </div>
}

export default ShippingInfo;

