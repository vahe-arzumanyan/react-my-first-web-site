import React, {useState} from "react";
import "./style.scss";
import {NavLink} from "react-router-dom";


const SideBar = () => {

    return <div className='P-left-side-bar'>
        <div className='P-logo-banner G-center'>
            <div className='G-flex'>
                <h1 className='P-logo-custom'>CUSTOM</h1>
                <h1 className='P-logo-shop'>SHOP</h1>
            </div>
        </div>

        {/* ========================  NavLink ======================== */}

        <div className='P-nav-bar'>
            <ul className='G-flex-column G-center'>
              <div style={{margin:'30px 0', textAlign:'center'}}>
                  <li>
                      <NavLink to={"/categories"}>Categories</NavLink>
                  </li>
                  <li>
                      <NavLink to={"/products"}>Products</NavLink>
                  </li>
              </div>
            </ul>
        </div>
    </div>

}

export default SideBar;

