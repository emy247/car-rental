import LandingPage from "../components/landing/landingpage";
import Models from "../components/models/models";
import Insurance from "../components/insurance/insurance";
import Faq from "../components/FAQ/faq";
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"



const Home = () => {


 
  return (
    <div className="home" id="home" >
        <LandingPage />
        <Models />
        <Insurance />
        <Faq />
        <Contact />
        <Footer />

    </div>
  )
}

export default Home