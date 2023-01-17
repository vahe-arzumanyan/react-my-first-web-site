import React from "react";
import './style.scss';

const Carousel = ({item})=>{
    return <div className='P-home-slick-content'>
            <div style={{backgroundImage:`url(${item.carouselImg})`}} alt={item.alt} className='G-image-cover G-flex-column G-center P-home-slick-img'>
                <p className='P-carousel-title'>{item.title}</p>
                <p className='P-carousel-description'>{item.description}</p>
            </div>
        </div>

}

export default Carousel;