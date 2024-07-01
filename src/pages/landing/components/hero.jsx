import { heroBg } from "../../../assets";


const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-purple-100 place-content-center"> 
      <div className="mx-auto w-fit flex flex-col items-start gap-y-4 p-20">
      <div className="text-4xl flex flex-col">
        <span className="font-thin">Best of cars from</span>
       <span className="font-bold">BelDrive Collections</span>
         </div>
         <p className="80">What car do you want to drive</p>
        <button className="bg-slate-300 px-6 py-3 rounded-full drop-shadow-lg text-blue-950 font-bold">DISCOVER</button>
      </div>
      </div>
        <div className="w-1/2">
          <img src={heroBg} alt="Hero background" className="object-cover w-full h-full" />
      </div>
    </div>
  )
};

export default Hero;