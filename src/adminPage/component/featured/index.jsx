import React, {useState} from "react";
import './style.scss';
import productImg1 from '../../../assets/image/product/product-1.jpg'
import productImg2 from '../../../assets/image/product/product-2.jpg'
import productImg3 from '../../../assets/image/product/product-3.jpg'
import productImg4 from '../../../assets/image/product/product-4.jpg'
import productImg5 from '../../../assets/image/product/product-5.jpg'
import productImg6 from '../../../assets/image/product/product-6.jpg'
import productImg7 from '../../../assets/image/product/product-7.jpg'
import productImg8 from '../../../assets/image/product/product-8.jpg'
import AdminHeader from "../../../adminPage/component/adminHeader";


const UseFeaturedProduct = () => {
    const [featured, setFeatured] = useState([
        {
            featuredImg: productImg1,
            alt: 'img',
            name: 'Goes Here',
            price: '100$'
        },
        {
            featuredImg: productImg2,
            alt: 'img',
            name: 'Goes Here',
            price: '100$'
        },
        {
            featuredImg: productImg3,
            alt: 'img',
            name: 'Goes Here',
            price: '100$'
        },
        {
            featuredImg: productImg4,
            alt: 'img',
            name: 'Goes Here',
            price: '100$'
        },
        {
            featuredImg: productImg5,
            alt: 'img',
            name: 'Goes Here',
            price: '100$'
        },
        {
            featuredImg: productImg6,
            alt: 'img',
            name: 'Goes Here',
            price: '100$'
        },
        {
            featuredImg: productImg7,
            alt: 'img',
            name: 'Goes Here',
            price: '100$'
        },
        {
            featuredImg: productImg8,
            alt: 'img',
            name: 'Goes Here',
            price: '100$'
        }
    ])

    return <div>
        <AdminHeader/>
        <div className='G-flex G-flex-wrap G-justify-between'>
            {featured.length ? featured.map((item, index) => {
                return <div key={index}>
                    <div style={{backgroundImage: `url(${item.featuredImg})`}} alt={item.alt}
                         className='G-image-cover P-feature-img'></div>
                    <div className='G-flex G-flex-column'>
                        <p>Product Name{item.name}</p>
                        <p>Product Pri e{item.price}</p>
                    </div>
                </div>
            }) : null}
        </div>
    </div>

}

export default UseFeaturedProduct;
