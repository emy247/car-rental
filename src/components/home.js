import LandingPage from "./landingpage.js";
import Models from "./models.js";
import Contact from "./contact";
import Insurance from "./insurance.js";
import Faq from "./faq.js";

const Home = () => {
  return (
    <div className="home">
        <LandingPage />
        <Models />
        <Insurance />
        <Faq />
       
       
    </div>
  )
}

export default Home