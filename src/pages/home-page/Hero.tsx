import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/sass/home-page-scss/_searchBar.scss";
import CitiesServices from "../../sever-interaction/CitiesServices";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DistrictsServices from "../../sever-interaction/DistrictsServices";

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
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const citiesData = await CitiesServices.getCities();
        setCities(citiesData);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  const handleCityChange = (event: SelectChangeEvent) => {
    const cityId: any = parseInt(event.target.value);
    setSelectedCity(cityId);
    setDistricts([]);
    const fetchDistrict = async () => {
      try {
        const districtData = await DistrictsServices.getDistricts(cityId);
        setDistricts(districtData);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    fetchDistrict();
  };

  const handleDistrictChange = (event: SelectChangeEvent) => {
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
      <img src="/images/hero.jpg" alt="hero" className="w-100" />

      <div
        className={`search_bar d-flex justify-content-between bg-white shadow py-3 px-3 rounded flex-column flex-lg-row`}
      >
        <div className="d-flex mb-3 mb-lg-0 mr-lg-3">
          <div
            className="d-flex align-items-center px-3 py-2 py-lg-3 text-white rounded-left"
            style={{ backgroundColor: "#003c43", textWrap: "nowrap" }}
          >
            <i
              className="fa-solid fa-location-dot mr-3"
              style={{ color: "#F4C622" }}
            ></i>
            Bạn muốn đi đâu?
          </div>
          <FormControl variant="filled" sx={{ m: 0, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Thành Phố
            </InputLabel>
            <Select
              id="city"
              value={selectedCity !== null ? selectedCity : ""}
              onChange={handleCityChange}
              className="pl-2"
              style={{ width: "150px", borderRadius: "5px" }}
            >
              {cities.map((city) => (
                <MenuItem key={city.id} value={city.id}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="d-flex mb-3 mb-lg-0 mr-lg-3">
          <div
            className="d-flex align-items-center py-2 px-5 text-white rounded-left"
            style={{ backgroundColor: "#003c43", textWrap: "nowrap" }}
          >
            <i
              className="fa-solid fa-location-crosshairs mr-3"
              style={{ color: "#F4C622" }}
            ></i>
            Khu vực:
          </div>
          <FormControl variant="filled" sx={{ m: 0, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Quận/huyện
            </InputLabel>
            <Select
              id="district"
              value={selectedDistrict !== null ? selectedDistrict : ""}
              onChange={handleDistrictChange}
              disabled={!selectedCity}
              className="pl-2"
              style={{ width: "150px", borderRadius: "5px" }}
            >
              {districts.map((district) => (
                <MenuItem
                  key={district.districtId}
                  value={district.districtName}
                >
                  {district.districtName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
