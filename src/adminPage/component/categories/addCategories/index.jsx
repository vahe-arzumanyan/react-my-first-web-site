import React, {useState} from 'react';
import './style.scss'
import axios from "axios";

const AddCategories = ({onClose}) => {

    const [addCategoriesInfo, setCategoriesInfo] = useState({
        categoriesName: "",
        img: null
    })

    const handleCategoriesName = (e) => {
        setCategoriesInfo({...addCategoriesInfo, [e.target.name]: e.target.value})
        // console.log(addCategoriesInfo)
    }

    const handleCloseModal = ()=>{
        onClose()
    }

    const handleAddInfo = async () => {
        const result = await axios.post('https://crudcrud.com/api/b76e3217f8604a86b57ef256676003df/addCategoriesInfo',addCategoriesInfo)
        console.log(result)
    }


    return <div className='G-container'>
        <div className='P-modal-categories G-flex G-flex-column G-center'>
            <label className='G-flex G-flex-column G-center'>
                <p className='P-categories-input-name'>Categories Name</p>
                <input type='text'
                       name="categoriesName"
                       value={addCategoriesInfo.categoriesName}
                       onChange={handleCategoriesName}
                       className='P-categories-input'/>
            </label>
           <div className='G-flex G-justify-between' style={{width:'150px', margin:'30px 0'}}>
               <button onClick={handleAddInfo} className='P-btn-categories'>add</button>
               <button onClick={handleCloseModal} className='P-btn-categories'>close</button>
           </div>
            {/*<label>*/}
            {/*    <p>Choose Image</p>*/}
            {/*    <input type='file' value='categoriesImg' onChange={handleCategoriesFile}/>*/}
            {/*</label>*/}
        </div>
    </div>
}

export default AddCategories;