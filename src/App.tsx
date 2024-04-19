import "./App.css";
import HotelListPage from "./pages/hotel-list-page/HotelListPage";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login_Logout from "./pages/Login_Logout";
import NavBar from "./components/NavBar";
import HotelBooking from "./pages/hotel-booking/HotelBooking";
import { Fragment } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";
import Registration from "./pages/Login";
import PromotionList from "./pages/PromotionList";
import Login from "./pages/Login";

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
        <Route
          path="/hotelList"
          element={
            <HotelListPage
              handleOpenSortBox={function (): void {
                throw new Error("Function not implemented.");
              }}
              handleCloseSortBox={function (): void {
                throw new Error("Function not implemented.");
              }}
              handleOpenFilterBox={function (): void {
                throw new Error("Function not implemented.");
              }}
              handleCloseFilterBox={function (): void {
                throw new Error("Function not implemented.");
              }}
              onCloseFilterBox={function (): void {
                throw new Error("Function not implemented.");
              }}
              onCloseSortBox={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route path="/login_logout" element={<Login_Logout />} />
        <Route path="/hotelBooking" element={<HotelBooking />} />
        <Route path="*" element={<Navigate to="register" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
