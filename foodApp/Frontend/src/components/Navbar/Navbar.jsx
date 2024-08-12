/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import toast from "react-hot-toast";


export default function Navbar({ setShowLogin }) {

  const [menu, setMenu] = useState('home')
  const { getTotalCartAmount, token ,setToken,moveDown } = useContext(StoreContext)

  const navigate = useNavigate()

  const logout = () =>{
localStorage.removeItem("token")
setToken("")
navigate("/")
toast.success("Logged Out")
  }

  // it is used for when i refresh the page then user not log out 
  



  
  return (
    <div className="w-[100vw] sticky top-0 bg-white z-40">
      <div className=" w-10/12 mx-auto flex justify-between py-4 items-baseline">

        {/* Logo  */}
        <div>
          <img src={assets.logo} alt="logo" />
        </div>

        {/* List of pages  */}
        <ul id="list" className=" md:flex md:text-[0.7rem] lg:text-[1.2rem] hidden cursor-pointer font-heading gap-6">
          <li onClick={() => setMenu('home')}
            className={`${menu === 'home' ? 'active' : ''} `}
          >
            <Link to="/" >HOME</Link>
          </li>

          <li onClick={() => setMenu('menu')}
            className={`${menu === 'menu' ? 'active' : ''} `}
          >
            <Link onClick={() => moveDown("menu")}>MENU</Link>
          </li>

          <li onClick={() => setMenu('mobile')}
            className={`${menu === 'mobile' ? 'active' : ''} `}
          >
            <Link onClick={() => moveDown("mobile")} >MOBILE-APP</Link>
          </li>

          <li onClick={() => setMenu('contact')}
            className={`${menu === 'contact' ? 'active' : ''} `}
          >
            <Link onClick={() => moveDown("contact")}>CONTACT-US</Link>
          </li>
        </ul>

        {/* cart seacrch and sign in button  */}
        <div className=" flex gap-6 items-center">
          {/* <div>
            <img src={assets.search_icon} alt="" />
          </div> */}
          <div className="relative">
            <NavLink to="/cart"><img src={assets.basket_icon} alt="" /></NavLink>
            {/* red dot  */}
            <div className={`${getTotalCartAmount() === 0 ? "" : " w-4 h-4 bg-red-500 rounded-full absolute top-[-6px] left-4 "}`}></div>
          </div>
          <div className=" font-content">
            {!token ? <button onClick={() => setShowLogin(true)} className=" bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-600 hover:shadow-xl duration-200">Sign-In</button> :
              <div className="navbar-profile cursor-pointer">
                <img src={assets.profile_icon} alt="profile" id="profile" />
                <div className="nav-profile-dropdown px-6 py-2">
                  <div className=" flex items-center"><img src={assets.bag_icon} alt="bag" width="20px" /><span>Orders</span></div>
                  <div className=" border bg-red-500 w-full h-0.5"></div>
                  <div onClick={logout} className=" flex items-center"><img src={assets.logout_icon} alt="logout" width="20px" /><span>LogOut</span></div>
                </div>
              </div>}
          </div>
        </div>
      </div>

    </div>
  )
}
