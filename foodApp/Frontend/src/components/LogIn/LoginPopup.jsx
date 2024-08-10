/* eslint-disable react/prop-types */
import { useState } from "react"
import { assets } from "../../assets/assets"


export default function LoginPopup({ setShowLogin }) {

  const [currState, setCurrState] = useState("Sign Up");

  const[data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  return (
    <div className=" bg-black bg-opacity-40 w-full h-full fixed z-10 flex justify-center items-center ">
      <form id="form" className=" cursor-pointer login w-[27vw] bg-white flex flex-col p-7 rounded-lg shadow-xl " >
        <div className=" flex justify-between items-baseline mb-4">
          <h1 className=" font-heading text-[30px]">{currState}</h1>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-5">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required className="border border-black p-1 "  />
          )}

          <input type="email" placeholder="Your email" required className="border border-black p-1 " />
          <input type="password" placeholder="Password" required className="border border-black p-1" />
        </div>
        <button className=" bg-red-500 mt-5 py-1 text-white font-heading">{currState === "Sign UP" ? "Create account" : "Login"}</button>
        <div className=" flex flex-col items-start gap-1 mt-3 font-content">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <hr className=" border-black my-2" />
        {currState === "Login" ? (
          <p className=" font-content">
            Create a New account ? <span className=" text-red-500 hover:underline" onClick={()=>setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p className="font-content">
            Already have an account? <span onClick={()=>setCurrState("Login")}>Login <span className="text-red-600 hover:underline">here</span> </span>
          </p>
        )}
      </form>
    </div>
  );
}
