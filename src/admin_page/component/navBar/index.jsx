import React from "react";
import './style.scss'
import {NavLink} from "react-router-dom";

const Banner = () => {
    return <div>
        <div className='P-header G-flex G-align-center'>
            <div className='G-container'>
                <div className='G-flex G-align-center G-justify-between'>
                    <div className='G-flex'>
                        <h1 className='P-logo-multi'>MULTI</h1>
                        <h1 className='P-logo-shop'>SHOP</h1>
                    </div>
                </div>
            </div>
        </div>

        {/* ========================  NavLink ======================== */}

        <div className='P-banner'>
            <ul>
                <li>
                    <NavLink to={"/categories"}>Categories</NavLink>
                </li>
                <li>
                    <NavLink to={"/products"}>Products</NavLink>
                </li>
            </ul>
        </div>
    </div>
}

export default Banner;

