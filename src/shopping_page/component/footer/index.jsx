import React from "react";
import './style.scss';

const Footer = () => {
    return <div className='G-container'>
        <div className='G-flex G-justify-between P-footer'>
            <div className='G-flex-column'>
                <p className='P-footer-info-title'>GET IN TOUCH</p>
                <p>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum
                    tempor no vero est magna amet no</p>
                <p>123 Street, New York, USA</p>
                <p>test@gmail.com</p>
                <p>+010 1010 01010</p>
            </div>
            <div className='G-flex-column'>
                <p>QUICK SHOP</p>
                <ul className='G-flex G-flex-column'>
                    <li> > Home</li>
                    <li> > Our Shop</li>
                    <li> > Shop Detail</li>
                    <li> > Shopping Cart</li>
                    <li> > Checkout</li>
                    <li> > Checkout</li>
                    <li> > Contact Us</li>
                </ul>
            </div>
            <div className='G-flex-column'>

                <p>MY ACCOUNT</p>

                <ul className='G-flex-column'>
                    <li> > Home</li>
                    <li> > Our Shop</li>
                    <li> > Shop Detail</li>
                    <li> > Shopping Cart</li>
                    <li> > Checkout</li>
                    <li> > Checkout</li>
                    <li> > Contact Us</li>
                </ul>

            </div>
        </div>

    </div>
}

export default Footer;