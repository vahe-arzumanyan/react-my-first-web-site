import React from "react";
import "./style.scss";

const CategoriesList = ({item}) => {
    return <div className='G-flex' style={{margin:'15px'}}>
        <div style={{backgroundImage: `url(${item.categoriesImg})`}} alt={item.alt} className='G-image-cover P-categories-img'></div>
        <div className='G-flex-column G-center P-categories-info'>
            <p>{item.title}</p>
            <p>{item.description}</p>
        </div>
    </div>
}

export default CategoriesList;