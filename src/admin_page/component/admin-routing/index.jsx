import React, {useState} from "react";
import './style.scss';
import {Route, Routes} from "react-router-dom"
// ----------------------------------------------------------------
import SideBar from "../side_bar/index"
import Categories from "../categories";
import Product from "../products";


const AdminPage = () => {
    return <>
        <div className='G-flex'>
            <SideBar/>
            <div className='G-admin-scrolling'>
                <Routes>
                    <Route path={"*"} element={<Categories/>}></Route>
                    <Route path={"categories"} element={<Categories/>}></Route>
                    <Route path={"products"} element={<Product/>}></Route>
                </Routes>

            </div>
        </div>
    </>
}

export default AdminPage;

