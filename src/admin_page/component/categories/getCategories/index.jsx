import React, {useState} from "react";
import './style.scss';
import CustomModal from "../../../castum-modal";
import AddCategories from "../addCategories";
import DeleteCategories from "../delete-categories";


const GetCategoriesAdmin = ({element, index, onCLose, getCategories}) => {

    const [categoriesEditModal, setCategoriesEditModal] = useState(false)
    const [categoriesDeleteModal, setCategoriesDeleteModal] = useState(false)

    const handleCategoriesEditModal = () => {
        setCategoriesEditModal(!categoriesEditModal)
    }

    const handleCategoriesDeleteModal = () => {
        setCategoriesDeleteModal(!categoriesDeleteModal)
    }

    return <div className='P-categorises-content'>

        <div className='G-flex-column G-center P-categories-element'>
            <div className='G-flex G-justify-between P-categories-rename'>
                <button onClick={handleCategoriesEditModal}>Edit</button>
                <button onclick={handleCategoriesDeleteModal}>Delete</button>
            </div>
            <div style={{backgroundImage: `url(${element.categoriesImg})`}} className='G-image-cover P-categories-img'></div>
            <p className='P-categories-name'>{element.categoriesName}</p></div>
        {categoriesEditModal ? <CustomModal EditModal={handleCategoriesEditModal}>
            <AddCategories elementEdit={element} elementIndex={index} categoriesEditBtn={handleCategoriesEditModal}/>
        </CustomModal> : null}
        {/*{categoriesDeleteModal ? <CustomModal deleteModal={handleCategoriesDeleteModal}>*/}
        {/*    <DeleteCategories element={element}*/}
        {/*                      index={index}*/}
        {/*                      onClose={onCLose}*/}
        {/*                      />*/}
        {/*</CustomModal> : null}*/}
    </div>
}

export default GetCategoriesAdmin;

