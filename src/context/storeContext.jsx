import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState({}); //cartItems object in which key will be itemId and value will be its quantity
    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const cartTotal = () => {
        let CartBill = 0;
        food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            CartBill = CartBill + item.price * cartItems[item._id];
          }
        })
        return CartBill;
      }
    const contextValue = {
        food_list,
        addToCart,
        cartItems,
        setCartItems,
        removeFromCart,
        cartTotal
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;