import React from "react";
import './style.scss';

const Carousel = ({item})=>{
    return <div className='G-container'>
            <div style={{backgroundImage:`url(${item.carouselImg})`}} alt={item.alt} className='G-image-cover hh'>
                <p>{item.title}</p>
                <p>{item.description}</p>
            </div>
        </div>

}

export default Carousel;