import React from "react";
import './style.scss';
import Header from "./component/header";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/home";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Basket from "./component/basket";
// filter
import CategoriesFilter from "./pages/home/component/catigories/categories-filter";
import CategoriesFilterProduct from "./pages/home/component/catigories/categories-filter-product";
import LoginRegister from "./component/login-register-form";


const ShoppingPage = () => {
    return <div>
        <Header/>
        <div className='gh'>
            <Routes>
                <Route path={"/*"} element={<Home/>}/>
                <Route path={"/Home"} element={<Home/>}/>
                <Route path={"/Shop"} element={<Shop/>}/>
                <Route path={"/Contact"} element={<Contact/>}/>

                {/* ====================== filter ====================== */}
                <Route path={"categoriesFilter/:id"} element={<CategoriesFilter/>}/>
                <Route path={"categoriesFilterProduct/:id"} element={<CategoriesFilterProduct/>}/>

                {/* ====================== basket ====================== */}
                <Route path={"/Basket"} element={<Basket/>}/>

                {/* ====================== login / register ====================== */}
                <Route path={"/login"} element={<LoginRegister/>}/>
            </Routes>
        </div>
    </div>
}

export default ShoppingPage;