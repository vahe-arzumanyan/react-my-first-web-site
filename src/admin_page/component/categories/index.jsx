import React, {useState} from "react";
import './style.scss';
import RightSideBar from "../right_sidebar";
import AddCategories from "./addCategories/index";
import {useDispatch, useSelector,} from "react-redux";
import axios from "axios";
// add, edit , delete categories
import {addCategoriesList} from "../../../store/combine-reducer/reducers/categories";
import GetCategoriesAdmin from "./getCategories";


const Categories = () => {

    const [addCategoriesInfo, setCategoriesInfo] = useState({
        categoriesName: "",
        img: null
    })

    // create categories name
    const handleCategoriesName = (e) => {
        setCategoriesInfo({...addCategoriesInfo, [e.target.name]: e.target.value})
        // console.log(addCategoriesInfo)
    }

    const categoriesList = useSelector(state => state.Categories.categoriesList)
    console.log(categoriesList)
    const dispatch = useDispatch();

    const [btnCategories, setBtnCategories] = useState(false);

    const handleAddCategories = () => {
        setBtnCategories(!btnCategories)
    }

    const getCategories = async () => {
        const result = await axios.get('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/addCategoriesInfo')
        if (result.data) {
            dispatch(addCategoriesList(result.data))
        }
    }

    // useEffect(() => {
    //     getCategories()
    // }, [])

    return <>
        <RightSideBar name='add-categories'>
            <button onClick={handleAddCategories} style={{margin: '20px'}}>add categories</button>
        </RightSideBar>

         {/*modal add categories*/}

        {btnCategories ? <AddCategories onClose={handleAddCategories}/> : null}
        {categoriesList.length ? categoriesList.map((item, index) => {
            return <GetCategoriesAdmin
                item={item}
                key={index}
                getCategories={getCategories}
            />
        }) : <p className='P-empty'>empty list category</p>}
    </>
}

export default Categories;