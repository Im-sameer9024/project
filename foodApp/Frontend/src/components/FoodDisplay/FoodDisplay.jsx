/* eslint-disable react/prop-types */
import { useContext } from "react"
import { StoreContext } from "../../Context/StoreContext"
import FoodItem from "../FoodItem/FoodItem"



export default function FoodDisplay({ category }) {

  const { food_list } = useContext(StoreContext)

  return (
    <div className=" w-[100vw]">

      <div className="w-10/12 mx-auto py-[1rem]">
        <h2 className=" font-smallHeading text-[1.4rem] text-center md:text-[1.7rem]">Top Dishes Near You</h2>

        {/* food display list  */}
        <div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-[2rem]">
          {
            food_list.map((item, index) => {
              if(category === 'All' || category === item.category) {
                return (
                  <FoodItem key={index} name={item.name} description={item.description} price={item.price} id={item._id} image={item.image} />
                )
              }

            })
          }
        </div>

      </div>

    </div>
  )
}
