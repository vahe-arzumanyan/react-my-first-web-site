import React from "react";
import './App.scss';
import Header from "./component/header";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/home";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import AdminPage from "./adminPage/component/adminPage";


// import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';


const App = () => {
    return <div>
       <div>
           {/*<Header/>*/}
           {/*<Routes>*/}
           {/*    <Route path={"/Home"} element={<Home/>}/>*/}
           {/*    <Route path={"/Shop"} element={<Shop/>}/>*/}
           {/*    <Route path={"/Contact"} element={<Contact/>}/>*/}
           {/*    <Route path={'/Home'} element={<Home/>}/>*/}
           {/*</Routes>*/}
       </div>
        <AdminPage />
    </div>
}

export default App;