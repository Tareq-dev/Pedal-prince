import { Route, Routes } from "react-router-dom";
import Footer from "./components/Pages/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Inventory from "./components/Pages/Inventory/Inventory";
import CustomLogin from "./components/Pages/Login/CustomLogin/CustomLogin";
import Register from "./components/Pages/Login/Register/Register";
import Navbar from "./components/Pages/Navbar/Navbar";
import SingleInventory from "./components/Pages/SingleInventory/SingleInventory";
import RequireAuth from "./components/Pages/RequireAuth/RequireAuth";
import AddItem from "./components/Pages/AddItem/AddItem";
import ManageItem from "./components/Pages/ManageItem/ManageItem";
import MyItem from "./components/Pages/MyItem/MyItem";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <SingleInventory />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myItem"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<CustomLogin />}></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
