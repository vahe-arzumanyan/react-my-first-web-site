import React, {useState} from "react";
import './style.scss';
import AddCategories from "../addCategories";
import GetCategoriesAdmin from "../getCategories";
// =========================


const CustomAddBtn = ({name}) => {

    // const [categoriesList, setCategoriesList] = useState(false)


    const [btnCategories, setBtnCategories] = useState(false);

    const handleAddCategories = () => {
        setBtnCategories(!btnCategories)
    }

    return <div>
        <button onClick={handleAddCategories} className='P-add-categories'>{name}</button>
        {btnCategories ? <AddCategories onClose={handleAddCategories}/> : null}

    </div>
}

export default CustomAddBtn;