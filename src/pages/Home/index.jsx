import React, {useEffect, useState} from "react";
import './style.scss'
// import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import carouselMen from '../../assets/image/carousel-1.jpg';
import carouselWomen from '../../assets/image/carousel-2.jpg';
import carouselKids from '../../assets/image/carousel-3.jpg';


const Home = () => {

    const [topSlick, setTopSlick] = useState([
       {
            title: 'Men Fashion',
            description: 'Shop men shoes',
            carouselImg: carouselMen,
           alt:'img'
        },
       {
            title: 'Woman Fashion',
            description: 'Shop Women shoes',
            carouselImg: carouselWomen,
           alt:'img'

       },
        {
            title: 'Woman Fashion',
            description: 'Shop Kidas shoes',
            carouselImg: carouselKids,
            alt:'img'

        }
])


    
    return <> 
        <div className='G-image-contain'>
    {topSlick.length ? topSlick.map((item, index)=>{
        return <div className='G-container'>
            <div key={index} style={{backgroundImage:`url(${item.carouselImg})`}} alt={item.alt} className='G-image-cover hh'>
                <p>{item.title}</p>
                <p>{item.description}</p>
                </div>
        </div>

    }) : null}
</div>

    </>
}

        export default Home;