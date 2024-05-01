import "./App.css";
import { Fragment, useEffect, useState } from "react";
// import HotelListPage from "./pages/hotel-list-page/HotelListPage";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login_Logout from "./pages/Login_Logout";
import NavBar from "./components/NavBar";
// import { Fragment } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";
// import Registration from "./pages/Login";
import PromotionList from "./pages/PromotionList";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import RoomDetail from "./pages/room-detail/RoomDetail";
import LoginFirebase from "./pages/log-firebase/LoginFirebase";
import RegisterFirebase from "./pages/log-firebase/RegisterFirebase";
import Profile from "./pages/log-firebase/Profile";
import { auth } from "./pages/log-firebase/Firebase";
import RoomPage from "./pages/RoomPage/RoomPage";

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
        {/* <Route path="/hotel-list" element={<HotelListPage />} /> */}
        <Route path="/roomPage/:id" element={<RoomPage />} />
        <Route path="/login_logout" element={<Login_Logout />} />

        {/* <Route path="/hotelBooking" element={<HotelBooking />} /> */}
        <Route path="/roomDetail" element={<RoomDetail />} />

        {/* login firebase */}
        <Route path="/loginFirebase" element={<LoginFirebase />} />
        <Route path="/registerFirebase" element={<RegisterFirebase />} />
        <Route
          path="/profileFirebase"
          element={
            user ? <Navigate to="/profileFirebase" /> : <LoginFirebase />
          }
        />

        <Route path="*" element={<Navigate to="login" />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
