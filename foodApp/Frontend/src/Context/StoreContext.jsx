/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import {food_list} from "../assets/assets.js"
export const StoreContext = createContext(null)


const StoreData = ({ children }) => {


  const [cartItems, setCartItems] = useState({})
  const url = "http://localhost:3000"
  const [token, setToken] = useState("")

  // const [food_list, setFoodList] = useState([])

  // const fetchFoodList = async () => {
  //   const response = await axios.get(url + "/api/food/list")
  //   setFoodList(response.data.data)
  // }

  const loadCartData = async(token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData)
  }

  useEffect(() => {
    async function loadData() {
      // await fetchFoodList();
      if (localStorage.get("token")) {
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
      }
    }

    loadData()
  }, [])

  const addToCart = useCallback(async(itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }

  }, [cartItems,token])


  const removeFromCart = useCallback(async(itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  }, [cartItems,token])

  function getTotalCartAmount() {

    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;

  }

  function moveDown(id) {
    const Id = document.getElementById(id)
    Id.scrollIntoView({ behavior: "smooth" })
  }


  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    url,
    token,
    setToken,
    moveDown,
  }

  return (

    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>

  )

}

export default StoreData;