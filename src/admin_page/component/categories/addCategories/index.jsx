import React, {useEffect, useState} from 'react';
import './style.scss'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addCategoriesList} from "../../../../store/combine-reducer/reducers/categories";


const AddCategories = ({onClose, elementEdit, elementIndex, categoriesEditBtn}) => {
    const categoriesList = useSelector(state => state.Categories.categoriesList)
    const dispatch = useDispatch();
    const [addCategoriesInfo, setCategoriesInfo] = useState({
        categoriesName: "",
        categoriesImg: null
    })



    // ===================== edit segment start =====================

    useEffect(() => {
        // console.log(elementEdit)
        if (elementEdit) {
            setCategoriesInfo(elementEdit)
        }
    }, [])



    const editData = async (id) => {
        const body = addCategoriesInfo
        delete body._id
        await axios.put(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/addCategoriesInfo/${id}`, body)
            getCategories()
    }

    const getCategories = async () => {
        const result = await axios.get('https://crudcrud.com/api/930f836115ae432ead0852485b104105/addCategoriesInfo')
        if (result.data) {
            dispatch(addCategoriesList(result.data))
            // console.log(result.data)
        }
    }



    const postCategories = async () => {
        const result = await axios.post('https://crudcrud.com/api/930f836115ae432ead0852485b104105/addCategoriesInfo', addCategoriesInfo)
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
            setCategoriesInfo({...addCategoriesInfo, categoriesImg: reader.result})
        }
    }

    const handleCloseModal = () => {
        onClose()
    }

    // ==================== crud-crud post ====================

    const handleAddInfo = async () => {
        postCategories()
        await getCategories()
        onClose()
        if(elementEdit){
            editData(elementEdit._id);
        }
    }




    return <div className='P-add-categories-modal G-center'>
        <div className='P-add-categories-modal-bgColor '></div>
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
                <div className='P-choose-img G-flex-column G-center'>
                    <p className='P-choose-img-categories'>choose image</p>
                    <div className='G-choose-img'>
                    {addCategoriesInfo.categoriesImg && <img src={addCategoriesInfo.categoriesImg} alt="img"/>}
                    <input onChange={chooseCategoriesImg} type='file' />
                    </div>
                </div>

            </label>

            <div className='G-flex G-justify-between P-add-categories-content'>
                <button onClick={handleAddInfo}>add</button>
                <button onClick={handleCloseModal}>close</button>
            </div>
        </div>

    </div>
}

export default AddCategories;