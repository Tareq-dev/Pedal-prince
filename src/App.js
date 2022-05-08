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
import NotFound from "./components/Pages/NotFound/NotFound";
import Blogs from "./components/Pages/Blogs/Blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPass from "./components/Pages/Login/ResetPass/ResetPass";
import FactoryGallery from "./components/Pages/FactoryGallery/FactoryGallery";
import Statistic from "./components/Pages/Statistic/Statistic";

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
        <Route
          path="/statistic"
          element={
            <RequireAuth>
              <Statistic />
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        <Route path="/reset" element={<ResetPass />}></Route>
        <Route path="/factory" element={<FactoryGallery />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
