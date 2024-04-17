import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <header className="fixed-top bg-white shadow">
        <div className="py-3 d-flex justify-content-center">
          <Link to="home" className="mx-2 text-decoration-none">
            Home Page
          </Link>
          <Link to="hotelList" className="mx-2 text-decoration-none">
            Son Tung MTP
          </Link>
          <Link to="roomPage" className="mx-2 text-decoration-none">
            Viet Duc
          </Link>
          <Link to="hotelBooking" className="mx-2 text-decoration-none">
            Duc dai ca
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

export default NavBar;
