import { Fragment } from "react";

import Footer from "../../Components/Footer";
import Hero from "./Hero";
import Explore from "./Explore";
import Blogs from "./Blogs";
import Locations from "./Locations";
import HotelCollection from "./HotelCollection";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <main
        className="container col-sm-12 col-md-11 col-lg-11 px-5 mb-5"
        style={{ marginTop: "120px" }}
      >
        <Banner />
        <HotelCollection />
        <Explore />
        <Blogs />
        <Locations />
      </main>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
