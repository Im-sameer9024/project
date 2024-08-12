/* eslint-disable react/prop-types */
import { useState } from "react"
import { assets } from "../../assets/assets"
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from 'axios'
import{toast} from 'react-hot-toast'
export default function LoginPopup({ setShowLogin }) {

  const [currState, setCurrState] = useState("SignUp");

  const btn = currState === "SignUp" ? "Create Account":"Login"

  const{url,setToken} = useContext(StoreContext)

  const[data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event) =>{
    const{name,value} = event.target;
    setData(
      (prev) => ({...prev,[name]:value})
    )
  }

  const onLogin =async(event) =>{
    event.preventDefault()
    let newUrl = url;
    if(currState === "Login"){
      newUrl +="/api/user/login"
      toast.success("Logged In")
      setShowLogin(false)
    }else{
      newUrl += "/api/user/register"
      toast.success(" User Registered")
      setShowLogin(false)
    
    }
    const response = await axios.post(newUrl,data);

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
    }else{
      alert(response.data.message)
    }

  }


  return (
    <div className=" bg-black bg-opacity-40 w-full h-full fixed z-10 flex justify-center items-center ">
      <form onSubmit={onLogin} id="form" className=" cursor-pointer login w-[27vw] bg-white flex flex-col p-7 rounded-lg shadow-xl " >
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
            <input type="text" placeholder="Your Name" required className="border border-black p-1 " onChange={onChangeHandler} name="name" value={data.name}  />
          )}

          <input type="email" placeholder="Your email" required className="border border-black p-1 " onChange={onChangeHandler} name="email" />
          <input type="password" placeholder="Password" required className="border border-black p-1"  name="password" onChange={onChangeHandler} value={data.password}/>
        </div>
        <button type="submit" className=" bg-red-500 mt-5 py-1 text-white font-heading">{btn}</button>
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
