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

  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${hours.toString().padStart(2, "0")}h${minutes
    .toString()
    .padStart(2, "0")} - ${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  console.log(formattedDate);

  return (
    <div className="position-relative" style={{ marginTop: "65px" }}>
      <img src="./public/images/hero.jpg" alt="hero" className="w-100" />

      <div
        className="d-lg-flex d-md-flex justify-content-between bg-white shadow position-absolute py-3 px-3 rounded flex-lg-row flex-md-column d-sm-none"
        style={{
          left: "50%",
          transform: "translate(-50%, 50%)",
          bottom: "0px",
        }}
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
            <option value="" value="">
              Quận/Huyện
            </option>
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
