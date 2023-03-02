import React from "react";
import './style.scss'

const ProductClient = ({item}) => {
    return <div>
        <div className='G-center G-flex-column P-products-list'>

            <div style={{backgroundImage: `url(${item.productsImg})`}} alt={item.alt}
                 className='G-image-cover P-product-img'></div>
            <div className='G-center G-flex-column'>
                <p className='P-products-name'>
                    <span>{item.productsName}</span></p>
                <p className='P-products-price'> <span
                    className='Product-price-value'>{item.productsPrise + "$"}</span></p>
                <p className='P-products-categories'>Product Categories : <span>{item.categories}</span>
                </p>
            </div>

        </div>
    </div>
}

export default ProductClient;
