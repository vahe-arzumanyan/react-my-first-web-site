import React, {useState} from "react";
import './style.scss';
// =========================================
import axios from "axios";
import {addProducts} from "../../../../store/combine-reducer/reducers/products";
import {useDispatch, useSelector} from "react-redux";


const AddProducts = ({productsItem, index, onClose}) => {
const categoriesList = useSelector(state =>state.Categories.categoriesList)
    const productList = useSelector(state => state.Products.productList)
    const dispatch = useDispatch();

    const [addProductsInfo, setAddProductsInfo] = useState({
        productsName: '',
        productsDescription: '',
        productsImg: null,
        productsPrise: 0,
        categories: ''
    })

    // ================ input products img ================

    const handleCLoseProductModal = () => {
        onClose()
    }
    const chooseProducts = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setAddProductsInfo({...addProductsInfo, productsImg: reader.result})
        }
    }


    return <div className='P-product-modal-container G-center'>
        <div className='P-product-modal-bgColor'></div>
        <div  className='P-products-modal-content G-flex-column'>
        <div className='G-flex-column G-center'>
            <label>
                <div className='P-choose-img G-flex-column G-center'>
                    <p className='P-choose-img-categories'>choose image</p>
                    <div className='G-choose-img'>
                    {addProductsInfo.productsImg && <img src={addProductsInfo.productsImg}/>}
                    <input onChange={chooseProducts} type='file'/>
                    </div>
                </div>
            </label>
         <div className='P-products-info G-flex-column G-center'>
             <label>
                 <p>product name</p>
                 <input type='text'/>
             </label>
             <label>
                 <p>product description</p>
                 <input type='text'/>
             </label>
             <label>
                 <p>product price</p>
                 <input type='text'/>
             </label>
             <label>
                 <p>product categories</p>
                 <input type='text'/>
             </label>
         </div>

            {/* categories select */}
<div className='G-flex-column G-center P-product-select'>
    <p>choose categories</p>
    <select>
        <option>

        </option>
    </select>
</div>

            {/* modal / add - close */}

            <div className='G-justify-between P-product-add-close'>
                <button>add</button>
                {/*<button onClick={handleAddProducts}>add</button>*/}
                <button onClick={handleCLoseProductModal}>close</button>
            </div>
        </div>


        </div>
    </div>
}

export default AddProducts;