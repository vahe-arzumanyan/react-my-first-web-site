import React from "react";
import './style.scss';

const AddProducts = ({productsItem, index}) => {
    return <div className='G-center G-flex-column P-products-list'>
        <div style={{backgroundImage: `url(${productsItem.productImg})`}} alt={productsItem.alt}
             className='G-image-cover P-product-img'></div>
        <div className='G-center G-flex-column'>
            <p className='P-products-name'>Product Name <span>{productsItem.productName}</span></p>
            <p className='P-products-price'>Product Price <span>{productsItem.productPrice}</span></p>
            <p className='P-products-categories'>Product Categories <span>{productsItem.productCategories} $</span></p>
        </div>
    </div>
}

export default AddProducts;