import React, {useState, useEffect} from "react";
import './style.scss';
import RightSideBar from "../right_sidebar";
import {useDispatch, useSelector,} from "react-redux";
import axios from "axios";
import {addCategoriesList} from "../../../store/combine-reducer/reducers/categories";
import {editCategories} from "../../../store/combine-reducer/reducers/categories";
import GetCategoriesAdmin from "./getCategories";
import CustomAddBtn from "./button-categories";
import Loading from "../loading";


const Categories = () => {
    const categoriesList = useSelector(state => state.Categories.categoriesList)
    const dispatch = useDispatch()


    const getCategories = async () => {
        const result = await axios.get('https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addCategoriesInfo')
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
            <CustomAddBtn name="Add Categories"/>
        </RightSideBar>

        <div className="G-flex G-center G-flex-wrap P-categories-container">
            {categoriesList.length ? categoriesList.map((getElement, index) => {
                return <GetCategoriesAdmin
                    key={index}
                    getElement={getElement}
                    getCategories={getCategories}
                />
            }) : <Loading />
            }
        </div>
    </>
}

export default Categories;