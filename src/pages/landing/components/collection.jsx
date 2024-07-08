
import { imageOne } from "../../../assets";
import { imageTwo } from "../../../assets";
import { imageThree } from "../../../assets";
import { imageFour } from "../../../assets";
import { imageFive } from "../../../assets";
import { imageSix } from "../../../assets";

const Collection = () => {
  return (
    <div className=" pl-10 pr-10 mt-20">
      <div className="text-center">
      <h5 className="text-gray-300 font-bold">OUR CLASSIC CARS</h5>
      <h3 className="font-bold text-[30px] text-blue-950">Car Collections</h3>
      </div>
      <div className="grid grid-cols-4 mt-8 gap-y-7 pl-10 pr-10 shadow-xl p-10">
      <img src={imageOne} alt="image one"  className="transform transition-transform duration-500 hover:scale-125"/>
        <img src={imageTwo} alt=""  className="transform transition-transform duration-500 hover:scale-125"/>
        <img src={imageThree}alt="" className="transform transition-transform duration-500 hover:scale-125"/>
        <img src={imageTwo} alt="" className="transform transition-transform duration-500 hover:scale-125"/>
        <img src={imageFive} alt="" className="transform transition-transform duration-500 hover:scale-125"/>
        <img src={imageSix}alt="" className="transform transition-transform duration-500 hover:scale-125"/>
        <img src={imageOne} alt="" className="transform transition-transform duration-500 hover:scale-125"/>
        <img src={imageTwo} alt=""  className="transform transition-transform duration-500 hover:scale-125"/>
        
      </div>
      
    </div>
  )
};

export default Collection;