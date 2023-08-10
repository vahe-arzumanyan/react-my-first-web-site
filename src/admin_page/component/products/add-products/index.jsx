import React, {useState, useEffect} from "react";
import './style.scss';
// =========================================
import axios from "axios";
import {addProducts} from "../../../../store/combine-reducer/reducers/products";
import {useDispatch, useSelector} from "react-redux";
import {pushProduct} from "../../../../store/combine-reducer/reducers/products";
import {CONNECTION_API} from "../../../../connect-api/connect";


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


    // ================ validation ================
    const [errorText, setErrorText] = useState({
        name: '',
        description: '',
        img: '',
        price: '',
        categories: ''
    })

    const validation = () => {
        let validate = true;
        const errorString = {
            name: '',
            description: '',
            img: '',
            price: '',
            categories: ''
        }

        if (!addProductsInfo.productsName) {
            errorString.name = 'fill in the required name'
            validate = false
        }
        if (!addProductsInfo.productsDescription) {
            errorString.description = 'fill in the required description'
            validate = false
        }
        if (!addProductsInfo.productsImg) {
            errorString.img = 'fill in the required image'
            validate = false
        }
        if (!addProductsInfo.productsPrise) {
            errorString.price = 'fill in the required price'
            validate = false
        }
        if (!addProductsInfo.categories) {
            errorString.categories = 'select in the required categories'
        }
        setErrorText(errorString)
        return validate
    }


    // ================ input products img ================

    // make empty input field

    const handleAddProducts = async () => {
        if (validation()) {
            if (productsItem) {
                await updateProductServer(productsItem._id)
            } else {
                await addProductsServer()
                onClose()
            }
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
            setAddProductsInfo({
                ...addProductsInfo, productsImg: reader.result
            })
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

    }

    // *********************** AXIOS **********************

    const addProductsServer = async () => {
        const result = await axios.post(`${CONNECTION_API}addProductsInfo`, addProductsInfo)
        if (result.data) {
            await getProductsServer()
        }
    }

    const getProductsServer = async () => {
        const result = await axios.get(`${CONNECTION_API}addProductsInfo`)
        if (result.data) {
            dispatch(addProducts(result.data))
        }
    }

    const updateProductServer = async (id) => {
        const body = addProductsInfo;
        delete body._id
        const result = await axios.put(`${CONNECTION_API}addProductsInfo/${id}`, body)
        if (result) {
            await getProductsServer()
            onClose()
        }
    }

    useEffect(() => {
        if (productsItem) {
            setAddProductsInfo(productsItem)
        }
    }, [])

    return <div className='P-product-modal-container G-center'>
        <div className='P-product-modal-bgColor'></div>
        <div className='P-products-modal-content G-flex-column G-center'>
            <div className='G-flex-column G-center'>
                <label>
                    <div className='P-choose-img G-flex-column G-center'>

                        {/* img input field*/}

                        <p className='P-choose-img-categories'>choose image</p>
                        <div className='G-choose-img'>

                            {addProductsInfo.productsImg &&
                            <div style={{backgroundImage: `url("${addProductsInfo.productsImg}")`}} alt="#"
                                 className='P-add-products-img G-image-cover'></div>}
                            <input onChange={chooseProducts} type='file'/>
                        </div>
                    </div>
                    <p className='P-error-text-product'>{errorText.img}</p>
                </label>
                <div className='P-products-info G-flex-column G-center'>
                    <label className='G-flex-column G-align-center'>
                        <p>product name</p>
                        <input type='text'
                               onChange={handleProductChange}
                               name='productsName'
                               value={addProductsInfo.productsName}
                        />
                        <p className='P-error-text-product'>{errorText.name}</p>
                    </label>
                    <label className='G-flex-column G-align-center'>
                        <p>product description</p>
                        <input type='text'
                               onChange={handleProductChange}
                               name='productsDescription'
                               value={addProductsInfo.productsDescription}
                        />
                        <p className='P-error-text-product'>{errorText.description}</p>
                    </label>
                    <label className='G-flex-column G-align-center'>
                        <p>product price</p>
                        <input type='number'
                               onChange={handleProductChange}
                               name='productsPrise'
                               value={addProductsInfo.productsPrise}
                        />
                        <p className='P-error-text-product'>{errorText.price}</p>
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
                    <p className='P-error-text'>{errorText.categories}</p>
                </div>

                {/* modal / add - close */}

                <div className='G-justify-between P-product-add-close'>
                    <button onClick={handleAddProducts}>add</button>
                    <button onClick={onClose}>close</button>
                </div>
            </div>


        </div>
    </div>
}

export default AddProducts;