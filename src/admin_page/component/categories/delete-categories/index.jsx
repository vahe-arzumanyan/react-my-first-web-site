import React from "react";
import "./style.scss";
import {useDispatch} from "react-redux";
import {addCategoriesList} from '../../../../store/combine-reducer/reducers/categories';
import axios from "axios";

const DeleteCategories = ({item, index, handelDeleteCategories, onClose}) => {

    const dispatch = useDispatch();

    const handleDeleteAnswerYes = async () => {
dispatch(addCategoriesList(index))
        await deleteCategoriesList()
        onClose();
    }

    const deleteCategoriesList = async () => {
        await axios.delete(`https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addCategoriesInfo/${item._id}`)
        onClose()
    }
    return <div className='P-delete-categories-list'>
        <p className='P-question-delete'>Are you sure you want to delete ?</p>
        <div className='G-flex G-justify-between'>
            <button onClick={handleDeleteAnswerYes}>Yes</button>
            <button onClick={onClose}>No</button>

        </div>
    </div>
}

export default DeleteCategories;