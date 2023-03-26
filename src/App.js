import './App.css';
import Home from "./components/home";
import About from "./components/about";
import { Route, Routes } from "react-router-dom";



function App() {

  return (
    <div className="App">

    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
     </Routes>     
     

    </div>
  );
}

export default App;
