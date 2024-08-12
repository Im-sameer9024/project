import { useContext } from "react"
import { StoreContext } from "../../Context/StoreContext"
import { useNavigate } from "react-router-dom"


export default function Cart() {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <div className=" w-[100vw] h-auto">
      {/* Cart items  */}
      <div className=" w-10/12 mx-auto my-[3rem]">
        {/* title  */}
        <div className=" grid grid-cols-6 place-items-center">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className=" border border-slate-400" />
        <div>
          {
            food_list.map((item, index) => {

              if (cartItems[item._id] > 0) {
                return (
                  <div key={index} className="gap-4 flex flex-col">
                    <div key={index} className=" grid grid-cols-6 place-items-center mt-3 cursor-pointer">
                      <img src={item.image} alt="" width="58px" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p className=" text-[1rem] font-bold" onClick={() => removeFromCart(item._id)}>x</p>
                    </div>
                    <hr className=" border border-slate-200" />
                  </div>
                )
              }

            })
          }
        </div>
        <div className=" flex w-full justify-between  my-[3rem]">
          {/* Left section  */}
          <div className="w-4/12 space-y-4">
            <h2 className=" font-bold text-[1.5rem] font-heading">Cart Totals</h2>
            <div className=" space-y-3">
              <div className=" flex justify-between font-smallHeading px-4">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className=" border border-slate-400" />
              <div className=" flex justify-between font-smallHeading px-4">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2 }</p>
              </div>
              <hr className=" border border-slate-400" />
              <div className=" flex justify-between font-smallHeading px-4">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
              <button onClick={()=>navigate("/order")} className=" bg-orange-500 text-white px-6 py-2 font-content hover:bg-orange-600">PROCEED TO CHECKOUT</button>
            </div>
          </div>

          {/* Right section  */}
          <div className="w-4/12 mt-3 space-y-3">
            <p className=" font-smallHeading">If you have a promo code, Enter it here</p>
            <div className=" flex w-full">
              <input type="text" name="" id="" className=" bg-slate-200 outline-none flex w-full p-2" />
              <button className=" bg-black font-content text-white px-6 ">Submit</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
