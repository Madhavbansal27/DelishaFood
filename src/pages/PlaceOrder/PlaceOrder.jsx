import React, {useContext} from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext'

const PlaceOrder = () => {
  const {cartTotal } = useContext(StoreContext)
  return (
    
      <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='zipcode' />
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
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
              <p>$5</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${cartTotal() + 5}</b>
            </div>
            <hr />
          </div>
          <button className="checkout">PROCEED TO PAYMENT</button>
        </div>
      </div>
      </form>
    
  )
}

export default PlaceOrder
