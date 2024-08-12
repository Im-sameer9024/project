import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";


export default function Sidebar() {


  return (
    <div className=" font-smallHeading sidebar border border-black h-[100vh] border-r-2 w-2/12 jus flex flex-col items-end   gap-3 ">
      <NavLink to="/" className=" mt-3 flex w-10/12 pl-6 gap-3 border border-r-0 py-1 border-black ">
        <div>
          <img src={assets.add_icon} alt="" />
        </div>
        <p>Add Items</p>
      </NavLink>
      <NavLink to="/list" className=" mt-3 flex w-10/12 border border-black pl-6 gap-3   py-1 border-r-0  ">
        <div>
          <img src={assets.order_icon} alt="" />
        </div>
        <p>List Items</p>
      </NavLink>
      <NavLink to="/orders" className=" mt-3 flex w-10/12 border border-black pl-6 gap-3  py-1 border-r-0  ">
        <div>
          <img src={assets.order_icon} alt="" />
        </div>
        <p>Orders</p>
      </NavLink>
    </div>
  )
}
