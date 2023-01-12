import React from "react";
import './App.scss';
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";


// import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';


const App = () => {
    return <div>
        <Header/>
        <Routes>
            <Route path={"/Home"} element={<Home/>}/>
            <Route path={"/Shop"} element={<Shop/>}/>
            <Route path={"/Contact"} element={<Contact/>}/>
            {/*<Route path={'/Home'} element={<Home/>}/>*/}
        </Routes>
    </div>
}

export default App;