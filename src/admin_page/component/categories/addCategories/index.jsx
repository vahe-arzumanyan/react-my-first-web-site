import React, {useEffect, useState} from 'react';
import './style.scss'
import axios from "axios";
import {useDispatch} from "react-redux";
import {addCategoriesList} from "../../../../store/combine-reducer/reducers/categories";
import {CONNECTION_API} from "../../../../connect-api/connect";


const AddCategories = ({onClose, elementEdit}) => {
    const dispatch = useDispatch();
    const [addCategoriesInfo, setCategoriesInfo] = useState({
        categoriesName: "",
        categoriesImg: null
    })


// ===================== validation =====================
    const [errorText, setErrorText] = useState({
        name: '',
        img: ''
    })

    const validation = () => {
        let validate = true;
        let errorString = {
            name: '',
            img: ''
        }

        if (!addCategoriesInfo.categoriesName) {
            errorString.name = 'fill in the request name'
            validate = false;
        }
        if (!addCategoriesInfo.categoriesImg) {
            errorString.img = 'fill in the request image'
        }
        setErrorText(errorString)
        return validate
    }

    // ===================== edit segment start =====================

    useEffect(() => {
        if (elementEdit) {
            setCategoriesInfo(elementEdit)
        }
    }, [])


    const editData = async (id) => {
        const body = addCategoriesInfo
        delete body._id
        const result = await axios.put(`${CONNECTION_API}addCategoriesInfo/${id}`, body)
        if (result) {
            await getCategories()
        }
    }

    const getCategories = async () => {
        const result = await axios.get(`${CONNECTION_API}addCategoriesInfo`)
        if (result.data) {
            dispatch(addCategoriesList(result.data))
        }
    }


    const postCategories = async () => {
        const result = await axios.post(`${CONNECTION_API}addCategoriesInfo`, addCategoriesInfo)
        if (result.data) {
            await getCategories()
            onClose()
        }
    }
    // ===================== edit segment end =====================

    const handleCategoriesName = (e) => {
        setCategoriesInfo({...addCategoriesInfo, [e.target.name]: e.target.value})
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



    const handleAddCategories = async () => {
        if (validation()) {
            if (elementEdit) {
                await editData(elementEdit._id)
                onClose()
            } else {
                await postCategories()
            }
        }
    }


    return <div className='P-add-categories-modal G-center'>
        <div className='P-add-categories-modal-bgColor '></div>
        <div className='P-modal-categories G-flex G-flex-column G-center'>
            <label className='G-flex G-flex-column G-center'>
                <p className='P-categories-input-name'>Categories Name</p>
                <input onChange={handleCategoriesName}
                       type='text'
                       name="categoriesName"
                       value={addCategoriesInfo.categoriesName}
                       className='P-categories-input'
                />
                <p className='P-error-text'>{errorText.name}</p>

            </label>
            <label className='G-center'>
                <div className='P-choose-img G-flex-column G-center'>
                    <p className='P-choose-img-categories'>choose image</p>
                    <div className='G-choose-img'>
                        {addCategoriesInfo.categoriesImg &&
                        <div style={{backgroundImage: `url("${addCategoriesInfo.categoriesImg}")`}}
                             className='P-add-categories-img G-image-cover' alt="#"></div>}
                        <input onChange={chooseCategoriesImg} type='file'
                        />
                        <p className='P-error-text'>{errorText.img}</p>
                    </div>
                </div>

            </label>

            <div className='G-flex G-justify-between P-add-categories-content'>
                <button onClick={handleAddCategories}>add</button>
                <button onClick={handleCloseModal}>close</button>
            </div>
        </div>

    </div>
}

export default AddCategories;