import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/sass/home-page-scss/_searchBar.scss";

interface City {
  id: number;
  name: string;
}

interface District {
  cityId: number;
  districtId: number;
  districtName: string;
}

const Hero = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [cities, setCities] = useState<City[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [selectedCity, setSelectedCity] = useState<number | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cities")
      .then((response) => {
        const citiesData: City[] = response.data;
        setCities(citiesData);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = parseInt(event.target.value);
    setSelectedCity(cityId);
    setDistricts([]);
    axios
      .get(`http://localhost:3000/districts?cityId=${cityId}`)
      .then((response) => {
        const districtsData: District[] = response.data;
        setDistricts(districtsData);
      })
      .catch((error) => {
        console.error("Error fetching districts:", error);
      });
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const districtName = event.target.value;
    setSelectedDistrict(districtName);
    setLocation(districtName);
  };

  const handleShow = (location: string) => {
    navigate(`/hotel-list?district_name=${location}`);
  };

  const handleScroll = () => {
    const searchBar = document.querySelector(".search_bar");
    if (searchBar) {
      let scrollPosition;
      if (window.innerWidth >= 992) {
        // Màn hình lớn (large), sử dụng điều kiện scrollPosition > 300
        scrollPosition = document.documentElement.scrollTop;
        if (scrollPosition > 300) {
          searchBar.classList.add("fade-out");
          searchBar.classList.remove("fade-in");
        } else {
          searchBar.classList.remove("fade-out");
          searchBar.classList.add("fade-in");
        }
      } else {
        // Màn hình nhỏ (small), sử dụng điều kiện scrollPosition > 200
        scrollPosition =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollPosition > 100) {
          searchBar.classList.add("fade-out");
          searchBar.classList.remove("fade-in");
        } else {
          searchBar.classList.remove("fade-out");
          searchBar.classList.add("fade-in");
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="position-relative" style={{ marginTop: "65px" }}>
      <img src="./public/images/hero.jpg" alt="hero" className="w-100" />

      <div
        className={`search_bar d-lg-flex d-md-flex justify-content-between bg-white shadow  py-3 px-3 rounded flex-lg-row flex-md-column d-sm-none d-none`}
        // style={{
        //   left: "50%",
        //   transform: "translate(-50%, 50%)",
        //   bottom: "0px",
        // }}
      >
        <div className="d-flex p-lg-0 mb-lg-0 mb-md-3 mb-sm-3 mr-lg-3">
          <div
            className="d-flex align-items-center px-3 py-lg-3 py-md-2 justify-content-center text-white rounded-left"
            style={{ backgroundColor: "#003c43", textWrap: "nowrap" }}
          >
            <i
              className="fa-solid fa-location-dot mr-3"
              style={{ color: "#F4C622" }}
            ></i>
            Bạn muốn đi đâu?
          </div>
          <select
            id="city"
            value={selectedCity !== null ? selectedCity : ""}
            onChange={handleCityChange}
            className="pl-2"
          >
            <option value="">Tỉnh/Thành phố</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex mb-lg-0 mb-md-3 mb-sm-3 mr-lg-3">
          <div
            className="d-flex align-items-center py-lg-3 py-sm-2 px-lg-3 px-md-5 text-white rounded-left"
            style={{ backgroundColor: "#003c43", textWrap: "nowrap" }}
          >
            <i
              className="fa-solid fa-location-crosshairs mr-3"
              style={{ color: "#F4C622" }}
            ></i>
            Khu vực:
          </div>
          <select
            id="district"
            value={selectedDistrict !== null ? selectedDistrict : ""}
            onChange={handleDistrictChange}
            disabled={!selectedCity}
            className="pl-2"
            style={{ width: "154px" }}
          >
            <option value="">Quận/Huyện</option>
            {districts.map((district) => (
              <option key={district.districtId} value={district.districtName}>
                {district.districtName}
              </option>
            ))}
          </select>
        </div>

        <button
          disabled={!location || !selectedCity}
          className="text-white px-4 rounded btn"
          style={{
            backgroundColor: "#003c43",
            textWrap: "nowrap",
            fontSize: "16px",
          }}
          onClick={() => handleShow(location)}
        >
          <i className="fa-solid fa-magnifying-glass mr-2"></i>Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default Hero;
