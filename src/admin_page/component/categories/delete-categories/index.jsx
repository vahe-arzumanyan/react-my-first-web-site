import React, {useState} from "react";
import "./style.scss";
import {useDispatch} from "react-redux";
import {addCategoriesList} from '../../../../store/combine-reducer/reducers/categories';
import {addProducts} from "../../../../store/combine-reducer/reducers/products";
import axios from "axios";

const DeleteCustomModal = ({element, productsItem, name, onClose}) => {
    const dispatch = useDispatch()


    const handleDeleteIndex = (name) => {
        if (name = "categoriesX") {
            deleteCategoriesList()
            onClose()
        }
        if (name = "productsX") {
            deleteProduct()
            onClose()
        }
    }

    const deleteProduct = async () => {
        await axios.delete(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/addProductsInfo/${productsItem._id}`)
        await getProductServer()
    }

    const deleteCategoriesList = async () => {
        await axios.delete(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/addCategoriesInfo/${element._id}`)
        await getCategories()

    }

    const getCategories = async () => {
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/addCategoriesInfo')
        if (result.data) {
            dispatch(addCategoriesList(result.data))
            onClose()
        }
    }

    const getProductServer = async () => {
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/addProductsInfo')
        if (result.data) {
            dispatch(addProducts(result.data))
            onClose()
        }
    }


    return <div className='P-delete-categories-modal G-center'>
        <div className='P-delete-modal-bgColor'></div>
        <div className='P-delete-ask G-center G-flex-column'>


            <p className='P-question-delete'>Are you sure you want to delete<span>
               { name === "categoriesX" ? element.categoriesName : productsItem.productsName}

            </span>
            </p>


            <div className='G-flex G-justify-between P-delete-yes-no'>


                <button onClick={handleDeleteIndex}>Yes</button>
                <button onClick={onClose}>No</button>

            </div>
        </div>
    </div>
}

export default DeleteCustomModal;