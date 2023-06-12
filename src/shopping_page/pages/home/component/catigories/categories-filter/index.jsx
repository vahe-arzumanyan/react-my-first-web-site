import React, {useEffect, useState} from "react";
import "./style.scss";
import {useParams} from 'react-router-dom'
import CustomFilterCheckbox from "../../../custom-filter-checkbox";
import CategoriesFilterProduct from "../categories-filter-product";
import Loading from "../../../../../../admin_page/component/loading";
import axios from 'axios';
import {CONNECTION_API} from "../../../../../../connect-api/connect";


const CategoriesFilter = () => {

    const [categoriesProductInfo, setCategoriesProductInfo] = useState([])
    const [filterCheckedValue, setFilterCheckedValue] = useState(null)

    // ******************** checked clicked value ********************

    const handleCheckedClick = (e) => {
        setFilterCheckedValue(e.target.value)
    }

    const {id} = useParams

    // ********************** useEffect axios ***********************

    useEffect(() => {
        getFilterProducts()
    }, [filterCheckedValue])

    // ==================== axios request ====================

    const getFilterProducts = async () => {
        const result = await axios.get(`${CONNECTION_API}addProductsInfo`)
        setCategoriesProductInfo(result.data)
        if (filterCheckedValue === "1000") {
            setCategoriesProductInfo(result.data)
        }
        if (filterCheckedValue === "100") {
            let filter100 = result.data.filter(item => item.productsPrise < 100)
            setCategoriesProductInfo(filter100)
        }
        if (filterCheckedValue === "200") {
            let filter200 = result.data.filter(item => item.productsPrise > 100 && item.productsPrise < 200)
            setCategoriesProductInfo(filter200)
        }
        if (filterCheckedValue === "300") {
            let filter300 = result.data.filter(item => item.productsPrise > 200 && item.productsPrise < 300)
            setCategoriesProductInfo(filter300)
        }
        if (filterCheckedValue === "400") {
            let filter400 = result.data.filter(item => item.productsPrise > 300 && item.productsPrise < 400)
            setCategoriesProductInfo(filter400)
        }
        if (filterCheckedValue === "500") {
            let filter500 = result.data.filter(item => item.productsPrise > 400 && item.productsPrise < 500)
            setCategoriesProductInfo(filter500)
        }
        if (filterCheckedValue === "600") {
            let filter600 = result.data.filter(item => item.productsPrise > 500 && item.productsPrise < 600)
            setCategoriesProductInfo(filter600)
        }
        if (filterCheckedValue === "700") {
            let filter700 = result.data.filter(item => item.productsPrise > 600 && item.productsPrise < 700)
            setCategoriesProductInfo(filter700)
        }
        if (filterCheckedValue === "800") {
            let filter800 = result.data.filter(item => item.productsPrise > 700 && item.productsPrise < 800)
            setCategoriesProductInfo(filter800)
        }
        if (filterCheckedValue === "900") {
            let filter900 = result.data.filter(item => item.productsPrise > 800 && item.productsPrise < 900)
            setCategoriesProductInfo(filter900)
        }
    }

    return <div className='G-container'>
        <div className='G-flex'>
            <div className='P-categories-filter'>
                {/*     filter number   */}
                <p className='P-filter-price-title'>filter by price</p>
                <div className='G-filter-info'>
                    <CustomFilterCheckbox
                        onClick={handleCheckedClick}
                        type='radio'
                        number='1000'
                        info='All Price'
                        name='check'
                        value='1000'
                    />
                    <CustomFilterCheckbox
                        onClick={handleCheckedClick}
                        type='radio'
                        number='1000'
                        info='0 - 100'
                        name='check'
                        value='100'
                    />
                    <CustomFilterCheckbox
                        onClick={handleCheckedClick}
                        type='radio'
                        number='1000'
                        info='100 - 200'
                        name='check'
                        value='200'
                    />
                    <CustomFilterCheckbox
                        onClick={handleCheckedClick}
                        type='radio'
                        number='1000'
                        info='200-300'
                        name='check'
                        value='300'
                    />
                    <CustomFilterCheckbox
                        onClick={handleCheckedClick}
                        type='radio'
                        number='1000'
                        info='300 - 400'
                        name='check'
                        value='400'
                    />
                    <CustomFilterCheckbox
                        onClick={handleCheckedClick}
                        type='radio'
                        number='1000'
                        info='400-500'
                        name='check'
                        value='500'
                    />
                    <CustomFilterCheckbox
                        onClick={handleCheckedClick}
                        type='radio'
                        number='1000'
                        info='500-600'
                        name='check'
                        value='600'
                    />
                    <CustomFilterCheckbox
                        onClick={handleCheckedClick}
                        type='radio'
                        number='1000'
                        info='600-700'
                        name='check'
                        value='700'
                    />
                    <CustomFilterCheckbox
                        onClick={handleCheckedClick}
                        type='radio'
                        number='1000'
                        info='700-800'
                        name='check'
                        value='800'
                    />
                    <CustomFilterCheckbox
                        onClick={handleCheckedClick}
                        type='radio'
                        number='1000'
                        info='800-900'
                        name='check'
                        value='900'
                    />

                </div>

                {/*     filter color   */}

                <div className='G-filter-info'>
                    <CustomFilterCheckbox type='radio' info='All color'/>
                    <CustomFilterCheckbox type='radio' info='red'/>
                    <CustomFilterCheckbox type='radio' info='blue'/>
                    <CustomFilterCheckbox type='radio' info='green'/>
                    <CustomFilterCheckbox type='radio' info='magenta'/>
                    <CustomFilterCheckbox type='radio' info='black'/>
                </div>

            </div>
            <div className='G-justify-center G-flex-wrap P-categories-filter-product'>
                {categoriesProductInfo.length ? categoriesProductInfo.map((item, index) => {
                    return <CategoriesFilterProduct item={item} key={index}/>
                }) : <Loading/>}
            </div>

        </div>
    </div>
}
export default CategoriesFilter;