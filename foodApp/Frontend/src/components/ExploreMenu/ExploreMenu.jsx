/* eslint-disable react/prop-types */

import { menu_list } from "../../assets/assets"

export default function ExploreMenu({setCategory,category}) {
  return (
    
      <div id="menu" name="menu" className="w-[100vw] ">
      <div className="w-10/12 mx-auto">
        <h1 className=" font-heading text-center text-[2rem] md:text-[2.5rem]">Explore Our Menu</h1>
        <p className=" font-content text-[1.2rem] text-center">Choose from a diverse menu</p>

        {/* Menu list  */}
        <div id="menu-list" className=" flex gap-[1.5rem]  text-center justify-between overflow-x-scroll scrollbar-hidden mt-6 cursor-pointer">
          {
            menu_list.map((menu, index) => {
              return (
                <div onClick={() => setCategory((prev) => prev === menu.menu_name ? 'All':menu.menu_name )} key={index} className=" py-4 px-2">
                  <img src={menu.menu_image} alt="menu" className={` w-[7.5vw] min-w-[80px] rounded-full duration-300 transition-all p-[0.5px] ${category === menu.menu_name ? 'active':''}`} />
                  <p>{menu.menu_name}</p>
                </div>
              )
            })
          }
        </div>
        <hr className="border" />
      </div>
    </div>
  )
}
