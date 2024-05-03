import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Fragment } from "react/jsx-runtime";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login_Logout from "./pages/Login_Logout";
import NavBar from "./components/NavBar";
import HotelListPage from "./pages/hotel-list-page/HotelListPage";
import { ToastContainer } from "react-toastify";
import Registration from "./pages/Login";
import PromotionList from "./pages/PromotionList";
import Login from "./pages/Login";
import RoomPage from "./pages/RoomPage/RoomPage";
import MyReservation from "./pages/MyReservation";

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
        <Route path="/hotel-list" element={<HotelListPage />} />
        <Route path="/roomPage/:id" element={<RoomPage />} />
        <Route path="/myReservation" element={<MyReservation />} />
        <Route path="/login_logout" element={<Login_Logout />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
