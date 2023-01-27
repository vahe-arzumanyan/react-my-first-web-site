import React, {useState} from "react";
import './style.scss';
import AdminHeader from "../admin_header/index";
import AddCategories from "./addCategories/index";


const Categories = () => {

    const [btnCategories, setBtnCategories] = useState(false);

    const handleAddCategories = () => {
        setBtnCategories(!btnCategories)
    }

    return  <>
        <div className='uuu'>
        <AdminHeader name='add-categories'/>
        <button onClick={handleAddCategories}>add categories</button>

       <div className='G-flex-wrap G-justify-between P-categorises-content'>
           {/*{addCategoriesInfo.length ? addCategoriesInfo.map((item, index) => {*/}
           {/*    <div className='G-flex G-center P-categorises'>*/}
           {/*            <div  className='G-image-contain P-categories-img'></div>*/}
           {/*            <div className='G-flex-column G-center P-categories-info'>*/}
           {/*                <button>Add Categories</button>*/}
           {/*            </div>*/}
           {/*        </div>*/}
           {/*)} }: null}*/}
       </div>
    </div>

        {btnCategories ? <AddCategories onClose={handleAddCategories}/> : null}
        </>
}

export default Categories;