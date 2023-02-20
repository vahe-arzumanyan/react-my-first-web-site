import React, {useState} from "react";
import './style.scss';
// =========================================
import axios from "axios";
import {addProducts} from "../../../../store/combine-reducer/reducers/products";
import {useDispatch, useSelector} from "react-redux";
import {pushProduct} from "../../../../store/combine-reducer/reducers/products";



const AddProducts = ({productsItem, index, onClose}) => {
    const categoriesList = useSelector(state => state.Categories.categoriesList)
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

    const handleAddProducts = async () => {
        if (productsItem) {
            addProductsServer()
            onClose()

        }
        console.log(addProductsServer)
        console.log('barev')
        setAddProductsInfo({
            ...addProductsInfo,
            productsName: '',
            productsDescription: '',
            productsPrise: 0,
            productsImg: null,
            categories: ''
        })

    }

    //  ============================ add product img ============================

    const chooseProducts = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setAddProductsInfo({...addProductsInfo, productsImg: reader.result})
        }
    }
    // ============================ select changes ============================

    const handleSelectChange = (e) => {
        if (e.target.value || e.target.value === 0)
            categoriesList.for((item, index) => {
                if (index === +e.target.value) {
                    productList.Categories = item.name
                }
                if (item.categoriesName === productList.categories) {
                    dispatch(pushProduct({productList: item, categoriesName: item.categoriesName}))
                }
            })
    }
    // ============================ axios get put post ============================

    const addProductsServer = async () => {
        const result = await axios.post("https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addProductsInfo", addProductsInfo)
        if (result.data) {
            await getProductsServer()
            onClose()
        }
    }

    const getProductsServer = async () => {
        const result = await axios.get("https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addProductsInfo")
        if (result.data) {
            dispatch(addProducts(result.data))
            console.log(result.data)
        }
    }


    return <div className='P-product-modal-container G-center'>
        <div className='P-product-modal-bgColor'></div>
        <div className='P-products-modal-content G-flex-column G-center'>
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
                        <input type='number'/>
                    </label>
                    <label>
                        <p>product categories</p>
                        <input type='text'/>
                    </label>
                </div>

                {/* categories select */}
                <div className='G-flex-column G-center P-product-select'>
                    <p>choose categories</p>
                    <select onChange={handleSelectChange}>
                        <option>select categories</option>

                        {categoriesList.length ? categoriesList.map((item, index) => {
                            return <option key={index}>
                                {item.categoriesName}</option>
                        }) : null}

                    </select>
                </div>

                {/* modal / add - close */}

                <div className='G-justify-between P-product-add-close'>
                    <button onClick={handleAddProducts}>add</button>
                    <button onClick={handleCLoseProductModal}>close</button>
                </div>
            </div>


        </div>
    </div>
}

export default AddProducts;