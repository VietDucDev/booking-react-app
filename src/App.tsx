import "./App.css";
import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// import HotelListPage from "./components/HotelListPage";
import HomePage from "./pages/HomePage/HomePage";
import Login_Logout from "./pages/Login_Logout";
import NavBar from "./components/NavBar";
import RoomPage from "./pages/RoomPage";
import HotelBooking from "./pages/hotel-booking/HotelBooking";
import PromotionList from "./pages/PromotionList";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

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
        {/* <Route path="/login_logout" element={<Login_Logout />} /> */}
        <Route path="roomPage" element={<RoomPage />} />
        {/* <Route path="/hotelList" element={<HotelListPage />} /> */}
        <Route path="/login_logout" element={<Login_Logout />} />

        <Route path="/hotelBooking" element={<HotelBooking />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
