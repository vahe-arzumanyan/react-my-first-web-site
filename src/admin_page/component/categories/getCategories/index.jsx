import React, {useState} from "react";
import './style.scss';


const GetCategoriesAdmin = ({element, indexm, getCategories}) => {


    return <div className='ppp'>
        <div className='P-categorises-content'>
            <div style={{backgroundImage:`url(${element.img})`}} className='G-image-contain P-categories-img'></div>
            <p>{element.categoriesName}</p>
        </div>
    </div>
}

export default GetCategoriesAdmin;