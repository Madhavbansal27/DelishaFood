import React, { useState,useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/storeContext';
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("menu");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {cartTotal} = useContext(StoreContext)
    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo} className='logo' alt="" /></Link>
            
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to='/' onClick={() => { setMenu("home"); setIsMenuOpen(false); }} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => { setMenu("menu"); setIsMenuOpen(false); }} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#footer' onClick={() => { setMenu("contact-us"); setIsMenuOpen(false); }} className={menu === "contact-us" ? "active" : ""}>Contact-Us</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} className='find-icon' alt="search" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} className='cart-img' alt="cart" /></Link>
                    {cartTotal()>0?<div className="dot"></div> : <></>}
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
}

export default Navbar;
