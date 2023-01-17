import React from "react";
import "./style.scss";

const CategoriesList = ({item}) => {
    return <div>
        <div style={{backgroundImage: `url(${item.categoriesImg})`}} alt={item.alt} className='G-image-cover P-categories-img'></div>
        <div className='G-flex-column'>
            <p>{item.title}</p>
            <p>{item.description}</p>
        </div>
    </div>
}

export default CategoriesList;