import { Fragment } from "react";

import Footer from "../../components/Footer";
import Hero from "./Hero";
import Carousel from "./Carousel";
import Explore from "./Explore";
import Blogs from "./Blogs";
import Locations from "./Locations";
import HotelCollection from "./HotelCollection";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <main className="col-11 px-5" style={{ margin: "150px auto 60px" }}>
        <Carousel />
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
