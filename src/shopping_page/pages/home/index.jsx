import React, {useState, useEffect} from "react";
import './style.scss'
// ************ slider /start ************
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ************ slider / end ************
import carouselMen from '../../../assets/image/carousel-1.jpg';
import carouselWomen from '../../../assets/image/carousel-2.jpg';
import carouselKids from '../../../assets/image/carousel-3.jpg';
import Carousel from "./carousel";
import Offer from "./offer";
import ShippingInfo from "./shipping";
import Footer from "../../component/footer/index"
import axios from "axios";
import Loading from "../../../admin_page/component/loading";
import CategoriesClient from "./component/catigories";
import ProductClient from "./component/product";


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

//    Categories and Products / hook

    const [categoriesClient, setCategoriesClient] = useState([])
    const [productsClient, setProductsClient] = useState([])

// ============================== SERVER REQUEST ==============================


    useEffect(() => {
        getCategories()
        getProductsServer()
    }, [])

    const getCategories = async () => {
        const result = await axios.get('https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addCategoriesInfo')
        if (result.data) {
            setCategoriesClient(result.data)
        }
    }

    const getProductsServer = async () => {
        const result = await axios.get("https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addProductsInfo")
        if (result.data) {
            setProductsClient(result.data)
        }
    }

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


            <div className='G-flex G-center P-margin-categories'>
                <p className='P-title-categories'>CATEGORIES</p>
                <div className='P-categories-line'></div>
            </div>
        </div>
        <div className='G-flex G-flex-wrap G-center'>
            {categoriesClient.length ? categoriesClient.map((item, index) => {
                return <CategoriesClient key={index}
                                         item={item}/>
            }) : <Loading/>}
        </div>

        <div className='G-container'>
            <div className='G-flex G-center P-margin-categories'>
                <p className='P-title-categories'>FEATURED PRODUCTS</p>
                <div className='P-categories-line'></div>
            </div>
        </div>
        <div className='G-flex-wrap G-center'>
            {productsClient.length ? productsClient.map((item, index) => {
                return <ProductClient
                    key={index}
                    item={item}/>
            }) : null}
        </div>

        <Footer/>

    </>
}

export default Home;