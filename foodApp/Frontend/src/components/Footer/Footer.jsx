import { Element } from "react-scroll";
import { assets } from "../../assets/assets";


export default function Footer() {
  return (
    <Element name="contact">
      <div id="contact" className="w-[100vw] h-auto bg-slate-800 text-white">
        <div className=" w-10/12 mx-auto flex justify-between py-[2rem]">
          {/* left side  */}
          <div className="w-3/12 space-y-4">
            <img src={assets.logo} alt="" />
            <p className=" font-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, praesentium reprehenderit soluta pariatur deleniti molestiae eligendi vero neque officiis odio.</p>
            <div className=" flex space-x-2">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>

          {/* Middler side  */}
          <div className="w-3/12 space-y-2">
            <h2 className=" font-heading text-[1.5rem]">COMPANY</h2>
            <ul className="font-smallHeading">
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>DELIVERY</li>
              <li>PRIVACY POLICY</li>
            </ul>
          </div>

          {/* Right side  */}
          <div className="w-3/12  space-y-2">
            <h2 className=" font-heading text-[1.5rem]">GET IN TOUCH</h2>
            <ul>
              <li>+1-473892-433</li>
              <li>crsger5345@gmail.com</li>
            </ul>
          </div>

        </div>
        <hr />
        <p className=" text-center py-1" >Copyright 2024 Tomoto.com - All Right Reserved</p>
      </div>
    </Element>
  )
}
