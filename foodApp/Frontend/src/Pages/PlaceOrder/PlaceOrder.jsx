import { useContext } from "react"
import { StoreContext } from "../../Context/StoreContext"
import { useNavigate } from "react-router-dom"


export default function PlaceOrder() {

  const{getTotalCartAmount} =useContext(StoreContext)
  const navigate = useNavigate()

  return (
    <form className=" mx-auto w-10/12 justify-between flex font-content py-[3rem]">
      {/* left side  */}
      <div className="w-5/12 gap-2 flex flex-col">
          <p className=" font-heading text-[30px]">Delivery Information</p>
          <div className=" flex justify-between gap-2 " >
            <input type="text" placeholder="First Name"  required className="border border-black p-1 w-full outline-none" />
            <input type="text" placeholder="Last Name" required className="border border-black  w-full p-1 outline-none " />

          </div>
          <div className="flex flex-col gap-2 ">
            <input type="email" placeholder="Email" name="" id="" required className="border border-black p-1 outline-none" />
            <input type="text" placeholder="Street" name="" id=""  required className="border border-black p-1 outline-none"/>

          </div>
          <div className=" flex justify-between gap-2 ">
            <input type="text" placeholder="City" name="" id="" required className="border border-black w-full p-1 outline-none" />
            <input type="text" placeholder="State" name="" id="" required className="border border-black w-full p-1 outline-none " />

          </div>
          <div className=" flex justify-between gap-2 ">
            <input type="number" placeholder="Zip Code" name="" id="" required className=" w-full border border-black p-1 outline-none " />
            <input type="text" placeholder="Country" name="" id="" required className="border border-black w-full p-1 outline-none" />

          </div>
          <input type="text" placeholder="Phone" required className="border border-black w-full p-1 outline-none" />
      </div>

      {/* right side  */}
      <div className=" flex flex-col w-5/12 mt-[1rem]">
      <h1 className=" font-heading text-[2rem]">Cart Total</h1>
          <div>
            <div className=" flex justify-between pr-5">
              <p className=" font-heading text-[1.2rem]">Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className=" my-2 border-black"/>
            <div className=" flex justify-between pr-5">
              <p className=" font-heading text-[1.2rem]">Delivery Fee</p>
              <p>${getTotalCartAmount() === 0? 0:2}</p>
            </div>
            <hr className=" my-2 border-black"/>
            <div className=" flex justify-between pr-5">
              <b className=" font-heading text-[1.2rem]">Total</b>
              <b>${getTotalCartAmount()=== 0 ? 0 : getTotalCartAmount()+2}</b>
            </div>
            <button onClick={()=>navigate("/order")} className=" bg-red-500 px-3 py-2 mt-3 text-white font-heading ">Proces to Checkout</button>
          </div>
      </div>
    </form>
  )
}
