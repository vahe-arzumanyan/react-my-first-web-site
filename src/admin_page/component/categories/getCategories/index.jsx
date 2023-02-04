import React, {useState} from "react";
import './style.scss';
import {addCategoriesList} from '../../../../store/combine-reducer/reducers/categories'
import AddCategories from "../addCategories";
import {useDispatch, useSelector} from "react-redux";

const GetCategoriesAdmin = ({item, index, getCategories}) => {





    return <div key={index}>
        <div>
            <p>{item.categoriesName}</p>
        </div>
    </div>
}

export default GetCategoriesAdmin;