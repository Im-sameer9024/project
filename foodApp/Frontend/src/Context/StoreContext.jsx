/* eslint-disable react/prop-types */
import { createContext, useCallback, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)




const StoreData = ({children}) => {


const[cartItems,setCartItems] = useState({})

const addToCart = useCallback((itemId)=>{
  if(!cartItems[itemId]){
      setCartItems((prev) => ({...prev,[itemId]:1}))
     }else{
      setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
     }
     
},[cartItems])


const removeFromCart =  useCallback((itemId) =>{
  if(cartItems[itemId]){
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
  }
},[cartItems])




  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
  }

  return (

    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>

  )

}

export default StoreData;