import React, {useState} from "react";
import './style.scss';
// =========================================
import axios from "axios";
import {addProducts} from "../../../../store/combine-reducer/reducers/products";
import {useDispatch, useSelector} from "react-redux";
import {pushProduct} from "../../../../store/combine-reducer/reducers/products";


const AddProducts = ({productsItem, onClose}) => {
    const categoriesList = useSelector(state => state.Categories.categoriesList)
    const productList = useSelector(state => state.Products.productList)
    const dispatch = useDispatch();

    const [addProductsInfo, setAddProductsInfo] = useState({
        productsName: '',
        productsDescription: '',
        productsImg: null,
        productsPrise: '',
        categories: ''
    })

    // ================ input products img ================

    const handleCLoseProductModal = () => {
        onClose()
    }

    // make empty input field

    const handleAddProducts = async () => {

        if (productsItem) {
            await updateProductServer(productsItem._id)
            console.log( "as")
        }else{
            await addProductsServer()

        }

        // make input field empty

        setAddProductsInfo({
            ...addProductsInfo,
            productsName: '',
            productsDescription: '',
            productsImg: null,
            productsPrise: '',
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
            categoriesList.map((item, index) => {
                if (index === +e.target.value) {
                    addProductsInfo.categories = item.categoriesName
                }
                if (item.categoriesName === productList.categories) {
                    dispatch(pushProduct({productList: item, categoriesName: item.categoriesName}))
                }
            })


    }

    // ============================ input changes ============================

    const handleProductChange = (e) => {
        setAddProductsInfo({...addProductsInfo, [e.target.name]: e.target.value})
        // setErrorText({...setErrorText, [e.target.name]: ''})
    }

    // *********************** AXIOS **********************

    const addProductsServer = async () => {
        const result = await axios.post("https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addProductsInfo", addProductsInfo)
        if (result.data) {
            await getProductsServer()
        }
    }

    const getProductsServer = async () => {
        const result = await axios.get("https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addProductsInfo")
        if (result.data) {
            dispatch(addProducts(result.data))
        }
    }

    const updateProductServer = async (id) => {
        const body = addProductsInfo
        delete body._id
        const result = await axios.put(`https://crudcrud.com/api/e997f1cf4348411eb31ec38e5d8bfca0/addProductsInfo/${id}`,body)
        if (result) {
            getProductsServer()
            onClose()
        }
    }


    return <div className='P-product-modal-container G-center'>
        <div className='P-product-modal-bgColor'></div>
        <div className='P-products-modal-content G-flex-column G-center'>
            <div className='G-flex-column G-center'>
                <label>
                    <div className='P-choose-img G-flex-column G-center'>

                        {/* img input field*/}

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
                        <input type='text'
                               onChange={handleProductChange}
                               name='productsName'
                               value={addProductsInfo.productsName}
                        />
                    </label>
                    <label>
                        <p>product description</p>
                        <input type='text'
                               onChange={handleProductChange}
                               name='productsDescription'
                               value={addProductsInfo.productsDescription}
                        />
                    </label>
                    <label>
                        <p>product price</p>
                        <input type='number'
                               onChange={handleProductChange}
                               name='productsPrise'
                               value={addProductsInfo.productsPrise}
                        />
                    </label>

                </div>

                {/* categories select */}
                <div className='G-flex-column G-center P-product-select'>
                    <p>choose categories</p>
                    <select onChange={handleSelectChange}>
                        <option value="">select categories</option>
                        {categoriesList.length ? categoriesList.map((item, index) => {
                            return <option value={index} key={index}>
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