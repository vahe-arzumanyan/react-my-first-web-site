import React, {useEffect, useState} from 'react';
import './style.scss'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addCategoriesList} from "../../../../store/combine-reducer/reducers/categories";
import img from '../../../../assets/image/product/product-1.jpg';


const AddCategories = ({onClose, elementEdit, elementIndex, categoriesEditBtn}) => {
    const categoriesList = useSelector(state => state.Categories.categoriesList)
    const dispatch = useDispatch();
    const [addCategoriesInfo, setCategoriesInfo] = useState({
        categoriesName: "",
        img: img
    })

    // ===================== edit segment start =====================

    useEffect(() => {
        if (elementEdit) {
            setCategoriesInfo(elementEdit)
        }
    }, [])


    const editData = async (id) => {
        const editBody = addCategoriesInfo
        delete editBody._id
        const editResult = await axios.put(`https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/addCategoriesInfo/${id}`, addCategoriesInfo)
        if (editResult) {
            getCategories()
            console.log(editData(id))

        }
    }

    const getCategories = async () => {
        const result = await axios.get('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/addCategoriesInfo')
        if (result.data) {
            dispatch(addCategoriesList(result.data))
            console.log(result.data)
        }
    }



    const postCategories = async () => {
        const result = await axios.post('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/addCategoriesInfo', addCategoriesInfo)
        if (result.data) {
            await getCategories()
            onClose()
        }
    }
    // ===================== edit segment end =====================

    const handleCategoriesName = (e) => {
        setCategoriesInfo({...addCategoriesInfo, [e.target.name]: e.target.value})
        // console.log(addCategoriesInfo)
    }


    const chooseCategoriesImg = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setCategoriesInfo({...addCategoriesInfo, img: reader.result})
        }
    }

    const handleCloseModal = () => {
        onClose()
    }

    // ==================== crud-crud post ====================
    const handleAddInfo = async () => {
        const result = await axios.post('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/addCategoriesInfo', addCategoriesInfo)
        if(editData){
            editData(elementEdit ._id);
        }
    }

    // ==================== crud-crud get ====================


    return <div className='G-container'>
        <div className='P-modal-categories G-flex G-flex-column G-center'>
            <label className='G-flex G-flex-column G-center'>
                <p className='P-categories-input-name'>Categories Name</p>
                <input type='text'
                       name="categoriesName"
                       value={addCategoriesInfo.categoriesName}
                       onChange={handleCategoriesName}
                       className='P-categories-input'/>
            </label>
            <label className='G-center'>
                <div className='P-choose-img'>
                    <p>Choose Image</p>
                    {addCategoriesInfo.img && <img src={addCategoriesInfo.img} alt="img"/>}
                    <input onChange={chooseCategoriesImg} type='file'/>
                </div>

            </label>

            <div className='G-flex G-justify-between' style={{width: '150px', margin: '30px 0'}}>
                <button onClick={handleAddInfo} className='P-btn-categories'>add</button>
                <button onClick={handleCloseModal} className='P-btn-categories'>close</button>
            </div>
        </div>

    </div>
}

export default AddCategories;