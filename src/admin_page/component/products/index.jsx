import React, {useEffect, useState} from "react";
import './style.scss';
import axios from "axios";
import RightSideBar from "../right_sidebar";
import CustomAddBtn from "../categories/button-categories";
import AddProducts from "./add-products";
import Loading from "../loading";
import {useDispatch, useSelector} from "react-redux";
import {addProducts} from "../../../store/combine-reducer/reducers/products";
import ProductsList from "./products-list";
import {CONNECTION_API} from "../../../connect-api/connect";


const Products = () => {
    const products = useSelector(state => state.Products.productList)
    const dispatch = useDispatch();

    const getProductsServer = async () => {
        const result = await axios.get(`${CONNECTION_API}addProductsInfo`)
        if (result.data) {
            dispatch(addProducts(result.data))
        }
    }

    useEffect(() => {
        getProductsServer()
    }, [])


    return <div>
        <RightSideBar name='add-product'>
            <CustomAddBtn name="Add Products"/>
        </RightSideBar>
        <div className='G-center G-flex-wrap P-products-content'>
            {products.length ? products.map((item, index) => {
                return <ProductsList key={index}
                                     index={index}
                                     productsItem={item}
                />
            }) : <Loading/>}
        </div>
    </div>

}

export default Products;


