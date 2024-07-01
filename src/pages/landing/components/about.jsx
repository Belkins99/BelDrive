import { aboutBg } from "../../../assets";


const About = () => {
  return (
    <div className="flex h-screen mt-3 bg-red-50 pl-10 pr-10">
      <div className="w-1/2">
        <img src={aboutBg} alt="About Image" className="object-contain w-full h-full" />
      </div>
      <div className="mx-auto w-fit flex flex-col items-start gap-y-4 p-20 mt-7">
        <div className="">
          <span className="font-bold text-gray-600">About BelDrive</span>
          <br /><span className="font-bold text-4xl">Quality Makes the Belief for <br /> Customers</span>
        </div>
        <p className=" text-gray-600">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
        <button className="bg-slate-300 px-6 py-3 rounded-full drop-shadow-lg text-blue-950 font-bold">Watch Here</button>
      </div>
    </div>
  )
};

export default About;