import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HotelListPage from "./pages/hotel-list-page/HotelListPage";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login_Logout from "./pages/Login_Logout";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import Registration from "./pages/Login";
import PromotionList from "./pages/PromotionList";
import { auth } from "./pages/log-firebase/Firebase";
import LoginFirebase from "./pages/log-firebase/LoginFirebase";
import RegisterFirebase from "./pages/log-firebase/RegisterFirebase";
import RoomPage from "./pages/RoomPage/RoomPage";
import { Fragment, useEffect, useState } from "react";
import MyReservation from "./pages/MyReservation";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setUser(user);
    });
    console.log("userEffet", user);
  });
  console.log(user);

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
