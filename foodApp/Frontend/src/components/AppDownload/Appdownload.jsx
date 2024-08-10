import { Element } from "react-scroll";
import { assets } from "../../assets/assets";


export default function Appdownload() {
  return (
    <Element name="mobile">
      <div id="mobile" className="w-[100vw] h-auto my-[2rem]">
        <div className="w-10/12 mx-auto">
          <p className="text-center font-smallHeading text-[1.5rem] font-bold">For Better Experience Download <br />Tomato App</p>
          <div className=" mx-auto flex justify-center py-4 gap-4">
            <img src={assets.play_store} alt="play" />
            <img src={assets.app_store} alt="app" />
          </div>
        </div>
      </div>
    </Element>
  )
}
