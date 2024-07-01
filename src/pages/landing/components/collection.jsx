
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
      <div className="grid grid-cols-3 mt-8 gap-y-7">
      <img src={imageOne} alt="image one" />
        <img src={imageTwo} alt="" />
        <img src={imageThree}alt="" />
        <img src={imageFour} alt="" />
        <img src={imageFive} alt="" />
        <img src={imageSix}alt="" />
      </div>
      
    </div>
  )
};

export default Collection;