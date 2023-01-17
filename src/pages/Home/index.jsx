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
import offerImg1 from '../../assets/image/offer-1.jpg';
import offerImg2 from '../../assets/image/offer-2.jpg';
import Carousel from "./Carousel";
import Offer from "./Offer";
import ShippingInfo from "./Shipping";
import Categories from "./categories/index";


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

// ============================== shipping content / state ==============================

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
            </div>
            <div className='G-justify-between' style={{margin: '30px 0'}}>
                {shippingInfo.length ? shippingInfo.map((item, index) => {
                    return <ShippingInfo item={item} key={index}/>
                }) : null}
            </div>
<Categories />
        </div>

    </>
}

export default Home;