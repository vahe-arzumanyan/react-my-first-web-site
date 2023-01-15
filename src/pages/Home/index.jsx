import React, {useState} from "react";
import './style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselMen from '../../assets/image/carousel-1.jpg';
import carouselWomen from '../../assets/image/carousel-2.jpg';
import carouselKids from '../../assets/image/carousel-3.jpg';
import Carousel from "./Carousel";


const Home = () => {
    const settingsSlider = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        initialSlide: 0,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
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
            alt: 'img'
        },
        {
            title: 'Woman Fashion',
            description: 'Shop Women shoes',
            carouselImg: carouselWomen,
            alt: 'img'

        },
        {
            title: 'Woman Fashion',
            description: 'Shop Kids shoes',
            carouselImg: carouselKids,
            alt: 'img'
        }
    ])


    return <>
        <div className='G-container'>
            <Slider {...settingsSlider}>
                {topSlick.length ? topSlick.map((item, index) => {
                    return <Carousel item={item} key={index} />
                }) : null}
            </Slider>

        </div>

    </>
}

export default Home;