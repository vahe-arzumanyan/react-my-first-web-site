import React, {useState} from "react";
import './style.scss';
import productImg1 from '../../../assets/image/images.png'

import RightSideBar from "../right_sidebar";
import CustomAddBtn from "../categories/button-categories";
import AddProducts from "./add-products";


const Product = () => {
    const [productsInfo, setProductsInfo] = useState([
        {
            productImg: null,
            alt: 'img',
            productName: '',
            productPrice: 0,
            productCategories:''
        }
    ])

    return <div>
        <RightSideBar name='add-product'>
            <CustomAddBtn name="Add Products" />
        </RightSideBar>
        <div className='G-center G-flex-wrap P-products-content'>
            {productsInfo.length ? productsInfo.map((item, index) => {
                return <AddProducts key={index}
                   productsItem = {item}
                />
            }) : null}
        </div>
    </div>

}

export default Product;
