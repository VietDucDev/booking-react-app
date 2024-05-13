import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HotelListPage from "./pages/hotel-list-page/HotelListPage";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import Login_Logout from "./pages/Login_Logout";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import PromotionList from "./pages/PromotionList";
import { auth } from "./pages/log-firebase/Firebase";
import RoomPage from "./pages/room-page/RoomPage";
import { Fragment, useEffect, useState } from "react";
import MyReservation from "./pages/MyReservation";
import HotelBooking from "./pages/hotel-booking/HotelBooking";

function App() {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });
  });

  return (
    <Fragment>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/discount" element={<PromotionList />} />
        <Route path="/hotel-list" element={<HotelListPage />} />
        <Route path="/roomPage/:id" element={<RoomPage />} />
        <Route path="/myReservation" element={<MyReservation />} />
        <Route path="/hotelBooking" element={<HotelBooking />} />
        <Route
          path="/login_logout"
          element={user ? <Navigate to="/home" /> : <Login_Logout />}
        />

        <Route path="*" element={<Navigate to="login_logout" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
