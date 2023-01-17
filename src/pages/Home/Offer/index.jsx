import React from "react";
import './style.scss';

const Offer = ({item}) => {
    return <div className='P-offer-content'>
        <div style={{backgroundImage: `url(${item.offerImg})`}} alt={item.alt} className='G-image-cover P-offer-img'>
            <p>{item.title}</p>
            <p>{item.description}</p>
        </div>
    </div>
}

export default Offer;