import React from "react";
import './style.scss';
import {Link} from 'react-router-dom'

const CategoriesFilterProduct = ({item}) => {
    return <div className='P-filer-content G-center G-flex-column'>
        <Link to={`/categoriesFilterProduct/${item._id}`}>
          <div className='G-center G-flex-column'>
              <div className='G-image-contain P-filter-img' style={{backgroundImage: `url(${item.productsImg})`}}></div>
              <div className='G-flex-column'>
                  <p>name  <span>{item.productsName}</span></p>
                  <p>description  <span>{item.productsDescription}</span></p>
                  <p>price  <span className='P-price'>{item.productsPrise}$</span></p>
              </div>
          </div>
        </Link>
    </div>
}

export default CategoriesFilterProduct;