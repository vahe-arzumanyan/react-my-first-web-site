import React from "react";
import './style.scss'
import {NavLink} from "react-router-dom";
import {useState} from "react";
import Login from "../login";


const Header = () => {

    const [login, setLogin] = useState(false);

    const handleOpenLoginModal = () => {
setLogin(!login)
    }

    return <div className='P-header G-flex G-align-center'>
        <div className='G-container'>
            <div className='G-flex G-align-center G-justify-between'>
                <div className='G-flex'>
                    <h1 className='P-logo-multi'>MULTI</h1>
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
<div>
                        {login ? <Login /> : null}
</div>
                        <button onClick={handleOpenLoginModal} className='icon-login-btn'>
                            <span className='icon-login'></span></button>

                    </div>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;