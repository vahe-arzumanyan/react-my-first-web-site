import React from "react";
import './App.scss';
import Header from "../src/shopping_page/component/header/index";
import {Route, Routes} from "react-router-dom"
import Home from "../src/shopping_page/pages/home/index";
import Shop from "./shopping_page/pages/shop";
import Contact from "./shopping_page/pages/contact";
import AdminPage from "./admin_page/component/admin-routing/index";
import Basket from "./shopping_page/component/basket";
import CategoriesFilter from "./shopping_page/pages/home/component/catigories/categories-filter";
// filter

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

                {/* ====================== basket ====================== */}
                <Route path={"/Basket"} element={<Basket/>}/>

            </Routes>

            {/*<AdminPage />*/}
        </div>
    </div>
}

export default App;