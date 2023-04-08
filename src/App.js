import './App.css';
import Home from "./pages/home";
import About from "./pages/about";
import Locations from "./pages/locations";
import { Route, Routes } from "react-router-dom";



function App() {

  return (
    <div className="App">

    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="locations" element={<Locations />}/>
     </Routes>     
     

    </div>
  );
}

export default App;
