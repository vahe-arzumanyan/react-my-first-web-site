import React, {useState} from "react";
import './style.scss';
import AddCategories from "../addCategories";
import GetCategoriesAdmin from "../getCategories";
import AddProducts from "../../products/add-products";
import ProductsList from "../../products/products-list";
// =========================


const CustomAddBtn = ({name}) => {

    const [btnCategories, setBtnCategories] = useState(false);
    const [btnProducts, setBtnProducts] = useState(false);


    const handleAddCategories = () => {
        setBtnCategories(!btnCategories)
    }

    const handleAddProducts = () => {
        setBtnProducts(!btnProducts)
    }

    const handleAdd = () => {
        if (name = "Add Categories") {
            handleAddCategories()
        }
        if (name = "Add Products") {
            handleAddProducts()
        }
    }


    return <div>
        { btnCategories ? <AddCategories onClose = {handleAddCategories} /> : null}
        { btnProducts ? <AddProducts onClose = {handleAddProducts} /> : null}
        <button onClick={handleAdd} className='G-add-title'>{name}</button>

    </div>

}

export default CustomAddBtn;