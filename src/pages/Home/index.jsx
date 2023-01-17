import React, {useState} from "react";
import './style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselMen from '../../assets/image/carousel-1.jpg';
import carouselWomen from '../../assets/image/carousel-2.jpg';
import carouselKids from '../../assets/image/carousel-3.jpg';
import offerImg1 from '../../assets/image/offer-1.jpg';
import offerImg2 from '../../assets/image/offer-2.jpg';
import Carousel from "./Carousel";
import Offer from "./Offer";


const Home = () => {
    const settingsSlider = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        initialSlide: 0,
        autoplaySpeed: 3000,
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

// ============================== slider / state ==============================

    const [shippingInfo, setShippingInfo]=useState([
        {
            title:'Quality Product',
            className:''
        },
        {
            title:'Free Shipping',
            className:''
        },
        {
           title:'14-Day Return',
            className:''
        },
        {
            title:'24/7 Support',
            className:''
        }
    ])

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

    // ============================== offer content / state ==============================

    const [offer, setOffer] = useState([
        {
            title: 'save 20%',
            description: 'Special Offer',
            offerImg: offerImg1,
            alt: 'img'
        },
        {
            title: 'save 20%',
            description: 'Special Offer',
            offerImg: offerImg2,
            alt: 'img'
        }
    ])

    return <>
        <div className='G-container'>
            <div className='G-flex G-justify-between'>
                <div className='P-home-slick'>
                    <Slider {...settingsSlider}>
                        {topSlick.length ? topSlick.map((item, index) => {
                            return <Carousel item={item} key={index}/>
                        }) : null}
                    </Slider>
                </div>
                <div>
                    {offer.length ? offer.map((item, index) => {
                        return <Offer item={item} key={index}/>
                    }) : null}
                </div>
                <div>
                    {shippingInfo.length ? shippingInfo.map((item, index) => {
                        return <Shipping item={item} key={index}/>
                    }) : null}
                </div>
            </div>


        </div>

    </>
}

export default Home;