import React, {useEffect, useState} from "react";
import './style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselMen from '../../assets/image/carousel-1.jpg';
import carouselWomen from '../../assets/image/carousel-2.jpg';
import carouselKids from '../../assets/image/carousel-3.jpg';


const Home = () => {
    const settingsSlider = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
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
        <div className='G-container'>
            <Slider {...settingsSlider}>
                {topSlick.length ? topSlick.map((item, index)=>{
                    return <div className='G-container'>
                        <div key={index} style={{backgroundImage:`url(${item.carouselImg})`}} alt={item.alt} className='G-image-cover hh'>
                            {/*<p>{item.title}</p>*/}
                            {/*<p>{item.description}</p>*/}
                        </div>
                    </div>

                }) : null}
            </Slider>

</div>

    </>
}

        export default Home;