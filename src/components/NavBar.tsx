import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <header className="fixed-top bg-white">
        <Link to="home" className="mr-2">
          Home Page
        </Link>
        <Link to="hotelList" className="mr-2">
          Son Tung MTP
        </Link>
        <Link to="login_logout" className="mr-2">
          Viet Duc
        </Link>
        <Link to="hotelBooking">Duc dai ca</Link>
      </header>
    </Fragment>
  );
};

export default NavBar;
