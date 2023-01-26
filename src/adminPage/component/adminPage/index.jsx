import React from "react";
import './style.scss';
import {Route,Routes} from "react-router-dom"
// ----------------------------------------------------------------
import Banner from "../navBar";
import Categories from "../categories";
import UseFeaturedProduct from "../featured";



const AdminPage = ()=>{
    return <div className='G-flex'>
    <Banner/>

           <div className='G-admin-scrolling'>
               <Routes>
                   <Route path={"*"} element={<Categories />}></Route>
                   <Route path={"categories"} element={<Categories />}></Route>
                   <Route path={"products"} element={<UseFeaturedProduct />}></Route>
               </Routes>
           </div>




    </div>
}

export default AdminPage