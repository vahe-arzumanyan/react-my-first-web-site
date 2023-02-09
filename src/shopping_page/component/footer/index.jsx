import React from "react";
import './style.scss';

const Footer = () => {
    return <div className='P-footer'>
        <div className='G-flex G-justify-between G-container'>
            <div className='G-flex-column P-footer-contact'>
                <p className='P-footer-info-title'>GET IN TOUCH</p>
                <p className='P-footer-info-description'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                    et et dolor sed dolor. Rebum
                    tempor no vero est magna amet no</p>
               <div className='P-footer-info-address'>
                   <p>123 Street, New York, USA</p>
                   <p>test@gmail.com</p>
                   <p>+ 010 1010 01010</p>
               </div>
            </div>
            <div className='G-flex-column P-footer-quick-shop'>
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
            <div className='G-flex-column P-footer-my-account'>
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