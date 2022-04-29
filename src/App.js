import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import CustomLogin from "./components/Pages/Login/CustomLogin/CustomLogin";
import Register from "./components/Pages/Login/Register/Register";
import Navbar from "./components/Pages/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<CustomLogin />}></Route> 
      <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
