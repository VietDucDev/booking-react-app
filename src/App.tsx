import "./App.css";
<<<<<<< HEAD
import HotelListPage from "./pages/hotel-list-page/HotelListPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
=======
import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import HotelListPage from "./components/HotelListPage";
import HomePage from "./pages/HomePage/HomePage";
>>>>>>> aa53d89b2f799a6b7ed86598b3238b009c75e637
import Login_Logout from "./pages/Login_Logout";
import NavBar from "./components/NavBar";
<<<<<<< HEAD
import HotelBooking from "./pages/hotel-booking/HotelBooking";
=======
import PromotionList from "./pages/PromotionList";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
>>>>>>> 15616047a9320647d5d447a9556fd13e23c464d6

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/discount" element={<PromotionList />} />
        <Route path="/hotelList" element={<HotelListPage />} />
        <Route path="/login_logout" element={<Login_Logout />} />
        <Route path="/hotelBooking" element={<HotelBooking />} />
        <Route path="*" element={<Navigate to="register" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
