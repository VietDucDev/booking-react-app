import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// import HotelListPage from "./components/HotelListPage";
import HomePage from "./pages/HomePage/HomePage";
import Login_Logout from "./pages/Login_Logout";
import NavBar from "./components/NavBar";
import RoomPage from "./pages/RoomPage/RoomPage";
import HotelBooking from "./pages/hotel-booking/HotelBooking";
import PromotionList from "./pages/PromotionList";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import RoomDetail from "./pages/room-detail/RoomDetail";
import LoginFirebase from "./pages/log-firebase/LoginFirebase";
import RegisterFirebase from "./pages/log-firebase/RegisterFirebase";
import Profile from "./pages/log-firebase/Profile";
import { auth } from "./pages/log-firebase/Firebase";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Fragment>
      <ToastContainer />
      <NavBar />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/discount" element={<PromotionList />} />

        {/* <Route path="/hotelList" element={<HotelListPage />} /> */}
        {/* <Route path="/login_logout" element={<Login_Logout />} /> */}
        <Route path="/login_logout" element={<RoomPage />} />
        {/* <Route path="/hotelList" element={<HotelListPage />} /> */}
        <Route path="/login_logout" element={<Login_Logout />} />

        <Route path="/hotelBooking" element={<HotelBooking />} />
        <Route path="/roomDetail" element={<RoomDetail />} />

        {/* login firebase */}
        <Route path="/loginFirebase" element={<LoginFirebase />} />
        <Route path="/registerFirebase" element={<RegisterFirebase />} />
        <Route path="/profileFirebase" element={user ? <Navigate to="/profileFirebase" /> : <LoginFirebase />} />

        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
