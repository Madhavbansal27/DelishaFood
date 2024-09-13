import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/storeContext'
import 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, food_list, removeFromCart, cartTotal } = useContext(StoreContext)
  return (
    cartTotal() > 0 ? (<div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <><div className='cart-items-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={() => { removeFromCart(item._id) }}>&#10006;</p>
              </div>
                <hr />
              </>
            )
          }
        })

        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className='cart-total-table'>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${cartTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${cartTotal() + 5}</b>
            </div>
            <hr />
          </div>
          <button onClick={()=>navigate('/order')} className="checkout">PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promo code' name='promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>) : <div className='empty-cart'><img className='empty-cart-img' src="/empty-cart-unscreen.gif" alt="" />
    <h2>Your cart is currently empty!</h2>
      </div>
  )
}

export default Cart;
