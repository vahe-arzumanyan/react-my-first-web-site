import React, {useState} from "react";
import './style.scss';
import RightSideBar from "../right_sidebar";
import AddCategories from "./addCategories/index";


const Categories = () => {

    const [btnCategories, setBtnCategories] = useState(false);

    const handleAddCategories = () => {
        setBtnCategories(!btnCategories)
    }

    const getCategories = async () => {
        const result = await axios.get('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/categories')
        if(result.data){
            result.data.forEach((item,i)=>{
                dispatch(setCategories(item))
            })
        }
    }

    return <>
        <RightSideBar name='add-categories'>
            <div>
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

        </RightSideBar>

        {btnCategories ? <AddCategories onClose={handleAddCategories}/> : null}
    </>
}

export default Categories;