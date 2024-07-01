import { HeartHandshake } from "lucide-react";
import K from "../../../constant";


const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-4 mt-3 pl-2 pr-2 ">
      {
        K.SERVICES.map(
          ({ title, description, icon, bgColor, iconBg}, index) => {
            return <div key={index} className={``} style={{backgroundColor: bgColor}}>
            <div className="p-14">
              
                <span className=" box-border rounded-full w-[60px] h-[60px] justify-center items-center flex"style={{backgroundColor: iconBg}}>{icon}</span>
              
            
              <h3>{title}</h3>
              <p>{description}</p>
              </div> 
            </div>


          }
        )
      }
    </div>
  )
};

export default Services;