import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Fragment } from "react/jsx-runtime";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login_Logout from "./pages/Login_Logout";
import NavBar from "./components/NavBar";
import HotelBooking from "./pages/hotel-booking/HotelBooking";
import { Fragment } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";
import Registration from "./pages/Login";
import PromotionList from "./pages/PromotionList";
import { auth } from "./pages/log-firebase/Firebase";
import RoomPage from "./pages/RoomPage/RoomPage";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState<any>({});
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
        <Route path="/register" element={<Registration />} />
        <Route path="/discount" element={<PromotionList />} />
        <Route path="/hotel-list" element={<HotelListPage />} />
        <Route path="/roomPage/:id" element={<RoomPage />} />
        <Route path="/myReservation" element={<MyReservation />} />
        <Route path="/login_logout" element={<Login_Logout />} />
        <Route
          path="/hotelBooking"
          element={user ? <HotelBooking /> : <Navigate to="login_logout" />}
        />

        <Route path="*" element={<Navigate to="login_logout" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
