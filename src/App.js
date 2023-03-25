import './App.css';
import LandingPage from "./components/landingpage.js";
import Models from "./components/models.js";
import Contact from "./components/contact";
import Insurance from "./components/insurance.js";
import Faq from "./components/faq.js";



function App() {

  

  return (
    <div className="App">
      <LandingPage />
      <Models />
      <Insurance />
      <Faq />
      <Contact />
      
    </div>
  );
}

export default App;
