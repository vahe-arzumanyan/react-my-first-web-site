import React from "react";
import './style.scss';


const GetCategoriesAdmin = ({element, indexm, getCategories}) => {


    return <div className='P-categorises-content'>
        <div className='G-flex-column G-center P-categories-element'>
            <div style={{backgroundImage: `url(${element.img})`}} className='G-image-contain P-categories-img'></div>
            <p className='P-categories-name'>{element.categoriesName}</p></div>

    </div>
}

export default GetCategoriesAdmin;