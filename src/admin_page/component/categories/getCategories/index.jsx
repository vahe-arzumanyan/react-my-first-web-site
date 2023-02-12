import React, {useState} from "react";
import './style.scss';
import CustomModal from "../../../castum-modal";
import AddCategories from "../addCategories";
import DeleteCategories from "../delete-categories";


const GetCategoriesAdmin = ({getElement, index, onCLose}) => {

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
                <button onClick={handleCategoriesDeleteModal}>Delete</button>
            </div>
            <div style={{backgroundImage: `url(${getElement.categoriesImg})`}}
                 className='G-image-cover P-categories-img'></div>
            <p className='P-categories-name'>{getElement.categoriesName}</p></div>

        {/* ========================== categories edit ========================== */}

        {/*{categoriesEditModal ? <CustomModal EditModal={handleCategoriesEditModal}>*/}
        {/*    <AddCategories elementEdit={getElement} elementIndex={index} categoriesEditBtn={handleCategoriesEditModal}/>*/}
        {/*</CustomModal> : null}*/}

        {categoriesEditModal ? <AddCategories
            elementEdit={getElement}
            elementIndex={index}
            categoriesEditBtn={handleCategoriesEditModal}/> : null}

        {/* ========================== categories delete ========================== */}

        {categoriesDeleteModal ? <CustomModal>
            <DeleteCategories element={getElement}
                              index={index}
                              onClose={handleCategoriesDeleteModal}
            />
        </CustomModal> : null}
    </div>
}

export default GetCategoriesAdmin;