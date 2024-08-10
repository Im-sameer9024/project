import { Element } from "react-scroll";


export default function Header() {
  return (
    <Element name="home">
      <div className=" w-[100vw] h-auto my-[2rem]" >
        <div className=" w-10/12 mx-auto bg-[url('/header_img.png')] bg-cover  bg-no-repeat h-[80vh] rounded-xl shadow-xl px-[3rem] py-[3rem] ">
          <div id="header-content" className=" w-6/12 text-white space-y-4">
            <h2 className=" font-heading text-[3.5rem]">Order your best food here </h2>
            <p className=" font-content text-[1.5rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi labore fugit nisi delectus, impedit ex quas aspernatur possimus natus ab.</p>
            <button className=" font-smallHeading bg-white text-black px-[3rem] py-[1rem] rounded-full hover:bg-slate-300 transition-all duration-300">View Menu</button>
          </div>
        </div>
      </div>
    </Element>
  )
}
