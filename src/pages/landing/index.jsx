
import About from "./components/about";
import Collection from "./components/collection";
import Customers from "./components/customers";
import Hero from "./components/hero";
import Production from "./components/production";
import Services from "./components/services";
import Statistics from "./components/statistics";


const LandingPage = () => {
  return (
    <div>
      
      <Hero/>
      <Services/>
      <About/>
      <Collection/>
      <Statistics/>
      <Customers/>
      <Production/>
    </div>
  )
};

export default LandingPage;