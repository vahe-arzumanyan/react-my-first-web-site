import React, {useState, useEffect} from "react";
import './style.scss';
import RightSideBar from "../right_sidebar";
import {useDispatch, useSelector,} from "react-redux";
import axios from "axios";
import {addCategoriesList} from "../../../store/combine-reducer/reducers/categories";
import GetCategoriesAdmin from "./getCategories";
import ButtonAddCategories from "./button-categories";


const Categories = () => {
    const categoriesList = useSelector(state => state.Categories.categoriesList)
    const dispatch = useDispatch()


    const getCategories = async () => {
        const result = await axios.get('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/addCategoriesInfo')
        if (result.data) {
            dispatch(addCategoriesList(result.data))
            console.log(result.data)

        }
    }


    useEffect(() => {
        getCategories()
    }, [])

    return <>
        <RightSideBar name='add-categories'>
            <ButtonAddCategories/>
        </RightSideBar>

        <div className="G-flex G-center G-flex-wrap P-categories-container">
            {categoriesList.length ? categoriesList.map((element, index) => {
                return <GetCategoriesAdmin
                    key={index}
                    element={element}
                    getCategories={getCategories}
                />
            }) : <div className='G-flex'>
                <p className='P-loading-title'>Loading </p>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            }
        </div>
    </>
}

export default Categories;