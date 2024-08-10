/* eslint-disable react/prop-types */

import { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-scroll";


export default function Navbar({setShowLogin}) {
  
  const[menu,setMenu] = useState('home')



  return (
    <div className="w-[100vw]">
      <div className=" w-10/12 mx-auto flex justify-between py-4 items-baseline">

      {/* Logo  */}
        <div>
          <img src={assets.logo} alt="logo" />
        </div>

        {/* List of pages  */}
        <ul id="list" className=" cursor-pointer font-heading flex gap-6">
          <Link smooth={true} duration={500} to="home" onClick={() =>setMenu('home')} className={`${menu === 'home' ?'active': ''} `}>HOME</Link>
          <Link smooth={true} duration={500}  to="menu" onClick={() => setMenu('menu')} className={`${menu === 'menu' ?'active': ''} `} >MENU</Link>
          <Link smooth={true} duration={500}  to="mobile" onClick={() => setMenu('mobile')} className={`${menu === 'mobile' ?'active': ''} `} >MOBILE-APP</Link>
          <Link smooth={true} duration={500}  to="contact" onClick={() =>setMenu('contact')} className={`${menu === 'contact' ?'active': ''} `} >CONTACT-US</Link>
        </ul>

        {/* cart seacrch and sign in button  */}
        <div className=" flex gap-6 items-center">
          <div>
            <img src={assets.search_icon} alt="" />
          </div>
          <div>
            <img src={assets.basket_icon} alt="" />
            {/* red dot  */}
            <div className="dot"></div>
          </div>
          <div className=" font-content">
            <button onClick={() =>setShowLogin(true)} className=" bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-600 hover:shadow-xl duration-200">Sign-In</button>
          </div>
        </div>
      </div>

    </div>
  )
}
