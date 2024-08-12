import { useContext } from "react"
import { StoreContext } from "../../Context/StoreContext"



export default function Header() {

  const{moveDown} = useContext(StoreContext)

  return (
    
      <div id="home" className=" w-[100vw] h-auto my-[2rem]" >
        <div className=" w-10/12 mx-auto bg-[url('/header_img.png')] bg-cover  bg-no-repeat h-[80vh] rounded-xl shadow-xl px-[3rem] py-[3rem] ">
          <div id="header-content" className=" w-full text-white space-y-4 md:w-full lg:w-6/12 ">
            <h2 className=" font-heading text-[1.5rem] md:text-[3.5rem]">Order your best food here </h2>
            <p className=" font-content md:text-[2.4rem] lg:text-[1.5rem] text-[0.7rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi labore fugit nisi delectus, impedit ex quas aspernatur possimus natus ab.</p>
            <button onClick={() => moveDown("menu")} className="font-smallHeading bg-white text-black px-[3rem] py-[1rem] rounded-full hover:bg-slate-300 transition-all duration-300">View Menu</button>
          </div>
        </div>
      </div>
    
  )
}
