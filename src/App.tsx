import "./App.css";
import HotelListPage from "./components/HotelListPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login_Logout from "./pages/Login_Logout";
import NavBar from "./components/NavBar";
import HotelBooking from "./pages/hotel-booking/HotelBooking";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/hotelList" element={<HotelListPage />} />
        <Route path="/login_logout" element={<Login_Logout />} />
        <Route path="/hotelBooking" element={<HotelBooking />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
