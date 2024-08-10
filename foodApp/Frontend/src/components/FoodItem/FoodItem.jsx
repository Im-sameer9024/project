/* eslint-disable react/prop-types */
import { useContext } from "react"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../Context/StoreContext"

export default function FoodItem({ id, name, price, description, image }) {



  const{cartItems,addToCart,removeFromCart } = useContext(StoreContext);


  return (
    <div id="grid" className=" cursor-pointer rounded-lg shadow-md flex flex-col justify-center items-center ">
    {/* food img  */}
      <div className="w-full flex flex-col relative">
        <img src={image} alt="img" className=" flex w-full rounded-t-lg h-[14rem]" />
        <div className=" absolute top-[80%] left-4 ">
        {
          cartItems[id] ? 
          <div className=" w-full">
            <div className=" bg-white px-2 rounded-full flex mx-auto items-center justify-center gap-3 py-2 ">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id) } src={assets.add_icon_green} alt="" />
            </div>
          </div>
           : 
           <img onClick={() => addToCart(id)} src={assets.add_icon_white} alt="plusIcon" width="30px" className=" shadow-md ml-2 mt-2 rounded-full"/> 
        }
        </div>
      </div>

      {/* food info  */}
      <div className=" flex flex-col justify-center px-2 space-y-3 py-3">
        <div className=" flex justify-between">
          <h2>{name}</h2>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="font-content text-[1.3rem]">{description}</p>
        <p className=" font-smallHeading text-orange-500 text-[1.4rem]">${price}</p>
      </div>

    </div>
  )
}
