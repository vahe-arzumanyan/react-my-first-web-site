import React from "react";
import './style.scss'
import {NavLink} from "react-router-dom";
import {useState} from "react";
import Login from "../login-register-form";
import {useSelector} from "react-redux";


const Header = () => {
    const basketList = useSelector(state => state.Basket.basketList)


    return <>
    <div className='P-header G-flex G-align-center'>
        <div className='G-container'>
            <div className='G-flex G-align-center G-justify-between'>
                <div className='G-flex'>
                    <h1 className='P-logo-multi'>CUSTOM</h1>
                    <h1 className='P-logo-shop'>SHOP</h1>
                </div>
                <ul className='G-flex P-header-ul'>
                    <li>
                        <NavLink to={"/Home"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Shop"}>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Contact"}>Contact</NavLink>
                    </li>
                    <div className='G-flex G-align-center P-header-heart-basket'>
                        <div style={{padding: '0 5px'}} className='G-flex G-align-center'>
                            <span className='icon-heart-fill'></span>
                            <div className='P-product-like G-center'><p>0</p></div>
                        </div>
                        <div className='G-flex G-align-center'>
                            <span className='icon-basket'></span>
                            <div className='P-product-like G-center'><p>0</p></div>
                        </div>

                        {/* ============================= Login ============================= */}

                        <NavLink to={"login"}><span className='icon-login'></span></NavLink>

                    </div>
                </ul>
            </div>
        </div>
    </div>
    </>
}

export default Header;