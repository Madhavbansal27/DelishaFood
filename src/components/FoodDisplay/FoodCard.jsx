import React, { useContext, } from 'react'
import './FoodCard.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/storeContext'

const FoodCard = ({img,id,category,price,description,name}) => {
    const {addToCart,cartItems,removeFromCart} = useContext(StoreContext)
    console.log(cartItems)
    return (
        <div className="card">
            <div className="card-image shadow">
                <img src={img} />
            </div>
            <div className="card-content">
                {cartItems[id] ? <button onClick={()=>removeFromCart(id)} className='remove-button'>-</button> :<></>}
                <div className="card-text shadow">
                    <div className="category-count">
                    <span className="meal-category">{category}</span>
                    {cartItems[id]?<span className="item-count">{cartItems[id]}</span> : <></>}
                    </div>
                    <h2 className="card-title">{name}</h2>
                    <p className="card-body">{description}</p>
                    <img src={assets.rating_starts} className='rating-stars' alt="" />
                </div>
                <button onClick={()=>addToCart(id)} className='add-button'>+</button>
            </div>
            <div className="card-price shadow">${price}</div>
        </div>
    )
}

export default FoodCard
