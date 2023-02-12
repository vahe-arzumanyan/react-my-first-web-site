import React from "react";
import "./style.scss";
import {useDispatch} from "react-redux";
import {addCategoriesList} from '../../../../store/combine-reducer/reducers/categories';
import axios from "axios";

const DeleteCategories = ({element, onClose, categoriesName}) => {
    const dispatch = useDispatch()
    const deleteCategoriesList = async () => {
        await axios.delete(`https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addCategoriesInfo/${element._id}`)
        await getCategories()
    }


    const getCategories = async () => {
        const result = await axios.get('https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addCategoriesInfo')
        if (result.data) {
            dispatch(addCategoriesList(result.data))
            onClose()
        }
    }


    return <div className='P-delete-categories-modal G-center '>
        <div className='P-delete-modal-bgColor'></div>
        <div className='P-delete-ask G-center G-flex-column'>
            <p className='P-question-delete'>Are you sure you want to delete <span>{element.categoriesName}</span></p>
            <div className='G-flex G-justify-between P-delete-yes-no'>
                <button onClick={deleteCategoriesList}>Yes</button>
                <button onClick={onClose}>No</button>
            </div>
        </div>


    </div>
}

export default DeleteCategories;