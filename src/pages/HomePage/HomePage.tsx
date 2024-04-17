import { Fragment, useEffect } from "react";

import Footer from "../../components/Footer";
import Hero from "./Hero";
import Carousel from "./Carousel";
import HotelList from "./HotelList";
import Explore from "./Explore";
import Blogs from "./Blogs";
import Locations from "./Locations";

const HomePage = () => {
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <Fragment>
      <Hero />
      <main className="col-11 px-5" style={{ margin: "200px auto 60px" }}>
        <Carousel />
        <HotelList />
        <Explore />
        <Blogs />
        <Locations />
      </main>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
