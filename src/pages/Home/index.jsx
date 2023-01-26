import React, {useState} from "react";
import './style.scss'
// ************ slider /start ************
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ************ slider / end ************
import carouselMen from '../../assets/image/carousel-1.jpg';
import carouselWomen from '../../assets/image/carousel-2.jpg';
import carouselKids from '../../assets/image/carousel-3.jpg';
import Carousel from "./carousel";
import Offer from "./offer";
import ShippingInfo from "./shipping";



const Home = () => {
    const settingsSlider = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        initialSlide: 0,
        autoplaySpeed: 2000,
        autoplay: true,
        arrows: false,
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
            description: 'Shop men shoes. The best shoes. Shop men shoes. The best shoes. Shop men shoes. The best shoes',
            carouselImg: carouselMen,
            alt: 'img'
        },
        {
            title: 'Woman Fashion',
            description: 'Shop Women shoes. The best shoes. Shop Women shoes. The best shoes. Shop Women shoes. The best shoes',
            carouselImg: carouselWomen,
            alt: 'img'
        },
        {
            title: 'Woman Fashion',
            description: 'Shop Kids shoes. The best kids. Shop Kids shoes. The best kids. Shop Kids shoes. The best kids.',
            carouselImg: carouselKids,
            alt: 'img'
        }
    ])

// ============================== JSX ==============================

    return <>
        <div className='G-container'>

            {/*============================== SLick Slider start ==============================*/}

            <div className='G-flex G-justify-between'>
                <div className='P-home-slick'>
                    {topSlick.length ?
                        <Slider {...settingsSlider}>
                            {topSlick.map((item, index) => {
                                return <Carousel item={item} key={index}/>
                            })}
                        </Slider> : null}
                </div>
                <Offer/>
            </div>

            {/*============================== SLick Slider end ==============================*/}

                <ShippingInfo/>

                {/*============================== categories content  ==============================*/}

            <div className='G-container'>
                <div className='G-flex G-center P-margin-categories'>
                    <p className='P-title-categories'>CATEGORIES</p>
                    <div className='P-categories-line'></div>
                </div>
            </div>
            {/*<Categories/>*/}
        </div>

        <div className='G-container'>
            <div className='G-flex G-center P-margin-categories'>
                <p className='P-title-categories'>FEATURED PRODUCTS</p>
                <div className='P-categories-line'></div>
            </div>
            {/*<UseFeaturedProduct/>*/}
        </div>


    </>
}

export default Home;