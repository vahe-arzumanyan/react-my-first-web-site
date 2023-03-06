import React from "react";
import './style.scss';
import {Link} from 'react-router-dom'


const CategoriesClient = ({item}) => {
    return <>
        <Link to={`/categoriesFilter/${item._id}`} className='P-categorises-client-content'>
            <div className='G-flex G-justify-between G-align-center'>
                <div style={{backgroundImage: `url(${item.categoriesImg})`}}
                     className='G-image-cover P-client-categories-img'></div>
                <p className='P-client-categories-name'>{item.categoriesName}</p></div>
        </Link>
    </>

}

export default CategoriesClient;

