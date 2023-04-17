import React, {useState, useEffect} from "react";
import './style.scss'
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom"

const ProductClient = ({item}) => {

    const dispatch = useDispatch();
    const basket = useSelector(state => state.Basket.basketList)
    const [createBasket, setCreateBasket] = useState(true)

    // =================== handle mouse event ===================
    const handleShowHeart = (e) => {
        e.stopPropagation()
        e.preventDefault()
        alert('sd')
    }

    const handleShowBasket = (e) => {
        e.stopPropagation()
        e.preventDefault()
    }
    return <div>
        <div className='G-center G-flex-column P-products-list'>
            <div className='P-product-img-parent'>
                <div style={{backgroundImage: `url(${item.productsImg})`}} alt={item.alt}
                     className='G-image-cover P-product-img'></div>
            </div>
            {/* ===================== onHover event ===================== */}
            <div className='P-product-hover G-flex'>
                <span onClick={(e) => handleShowHeart(e)}
                      className='icon-heart-fill show' ></span>
                {createBasket ? <span onClick={(e) => handleShowBasket(e)}
                                      className='icon-basket show'  ></span> : null}
            </div>

            {/* ===================== product information ===================== */}
            <div className='G-center G-flex-column'>
                <p className='P-products-name'>
                    <span>{item.productsName}</span></p>
                <p className='P-products-price'><span
                    className='Product-price-value'>{item.productsPrise + "$"}</span></p>
                <p className='P-products-categories'>Product Categories : <span>{item.categories}</span>
                </p>
            </div>
        </div>
    </div>
}

export default ProductClient;
