import React, {useState} from "react";
import './style.scss';
import AddCategories from "../addCategories";
import DeleteCustomModal from "../delete-categories";


const GetCategoriesAdmin = ({getElement, index}) => {

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


        {categoriesEditModal ? <AddCategories onClose={handleCategoriesEditModal}
                                              elementEdit={getElement}
                                              elementIndex={index}/> : null}

        {/* ========================== categories delete ========================== */}

        {categoriesDeleteModal ? <DeleteCustomModal name="categoriesX" element={getElement}
                                                    index={index}
                                                    onClose={handleCategoriesDeleteModal}/> : null}
    </div>
}

export default GetCategoriesAdmin;