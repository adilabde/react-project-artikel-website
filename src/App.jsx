import "./css/style.css";
import About from "./pages/aboutUs/About";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    </div>
  );
}

export default App;
