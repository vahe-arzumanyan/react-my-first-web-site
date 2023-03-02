import React from "react";
import './style.scss'

const CategoriesClient = ({item}) => {
    return <div className='P-categorises-client-content'>
            <div className='G-flex G-justify-between G-align-center'>
                <div style={{backgroundImage: `url(${item.categoriesImg})`}}
                     className='G-image-cover P-client-categories-img'></div>
                <p className='P-client-categories-name'>{item.categoriesName}</p></div>
        </div>

}

export default CategoriesClient;
