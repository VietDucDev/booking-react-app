import "./App.css";
import HotelListPage from "./pages/hotel-list-page/HotelListPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login_Logout from "./pages/Login_Logout";
import HotelBooking from "./pages/HotelBooking";
import NavBar from "./components/NavBar";

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
