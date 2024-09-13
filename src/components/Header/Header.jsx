import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h1>Crave It?</h1>
        <h1>Order It Here!</h1>
        <p>Simply browse our menu, choose your favorite dishes, and enjoy delicious food delivered right to your doorstep. Whether it's a quick snack or a hearty meal, your cravings are just a click away.</p>
        <button onClick={()=>{
            const section=document.getElementById("food-display")
            section.scrollIntoView({ behavior: 'smooth' });
        }}>View Menu</button>
      </div>
    </div>
  )
}

export default Header
