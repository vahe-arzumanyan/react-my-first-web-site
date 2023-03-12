import React from "react";
import './App.scss';
import Header from "../src/shopping_page/component/header/index";
import {Route, Routes} from "react-router-dom"
import Home from "../src/shopping_page/pages/home/index";
import Shop from "./shopping_page/pages/shop";
import Contact from "./shopping_page/pages/contact";
import AdminPage from "./admin_page/component/admin-routing/index";
import Basket from "./shopping_page/component/basket";
// filter
import CategoriesFilter from "./shopping_page/pages/home/component/catigories/categories-filter";
import CategoriesFilterProduct from "./shopping_page/pages/home/component/catigories/categories-filter-product";
import LoginRegister from "./shopping_page/component/login-register-form";

// import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';


const App = () => {
    return <div>
        <div>
            <Header/>
            <Routes>
                <Route path={'/*'} element={<Home/>}/>
                <Route path={"/Home"} element={<Home/>}/>
                <Route path={"/Shop"} element={<Shop/>}/>
                <Route path={"/Contact"} element={<Contact/>}/>

                {/* ====================== filter ====================== */}
                <Route path={"categoriesFilter/:id"} element={<CategoriesFilter/>}/>
                <Route path={"categoriesFilterProduct/:id"} element={<CategoriesFilterProduct/>}/>

                {/* ====================== basket ====================== */}
                <Route path={"/Basket"} element={<Basket/>}/>

                {/* ====================== login / register ====================== */}
                <Route path={"/login"} element={<LoginRegister />} />

            </Routes>

            {/*<AdminPage />*/}
        </div>
    </div>
}

export default App;