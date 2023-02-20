import React from "react";
import './style.scss';
import AddProducts from "../add-products";

const ProductsList = ({index, productsItem}) => {
    return <div className='G-flex G-flex-wrap'>
        <div className='G-center G-flex-column P-products-list'>
            <div style={{backgroundImage: `url(${productsItem.productsImg})`}} alt={productsItem.alt}
                 className='G-image-cover P-product-img'></div>
            <div className='G-center G-flex-column'>
                <p className='P-products-name'>Product Name : <span>{productsItem.productsName}</span></p>
                <p className='P-products-price'>Product Price : <span>{productsItem.productsPrise}</span></p>
                <p className='P-products-categories'>Product Categories : <span>{productsItem.categories} $</span>
                </p>
            </div>
        </div>
    </div>
}

export default ProductsList


