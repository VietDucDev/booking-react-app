import React, { Fragment, useEffect, useState } from "react";
import { Hotel } from "../../components/NavBar";

interface DropdownHotelProps {
  showAllHotels: (title: string) => void;
  hotelList: Hotel[];
}

const DropdownHotelCollection: React.FC<DropdownHotelProps> = ({
  showAllHotels,
  hotelList,
}) => {
  const [openDropdown, setOpendropdown] = useState(false);

  const handleToggleDropdown = () => {
    setOpendropdown((prev) => !prev);
  };

  const handleClickOutside = (event: Event) => {
    if (
      openDropdown &&
      !(event.target as HTMLElement).closest(".dropdown") // Check if clicked outside the dropdown
    ) {
      setOpendropdown(false);
    }
  };

  // Attach and detach click event listener on dropdown toggle and window
  useEffect(() => {
    const listener = handleClickOutside; // Reference the function

    if (openDropdown) {
      // Attach listener when dropdown is open
      window.addEventListener("click", listener);
    } else {
      // Detach listener when dropdown is closed
      window.removeEventListener("click", listener);
    }

    // Cleanup function to remove listener on unmount
    return () => window.removeEventListener("click", listener);
  }, [openDropdown]); // Dependency on openDropdown state

  return (
    <Fragment>
      {/* drop down */}
      <div
        className="dropdown position-relative"
        onClick={(e) => {
          e.stopPropagation(); // Stop event propagation to prevent toggling twice
          handleToggleDropdown();
        }}
      >
        <button
          className="btn dropdown"
          type="button"
          data-toggle="dropdown"
          aria-expanded="false"
          style={{
            fontSize: "14px",
            letterSpacing: "0",
            color: "#003c43",
            fontWeight: "600",
          }}
        >
          <span>Danh mục khách sạn</span>{" "}
          <i
            className={`fa-solid fa-chevron-down ${
              openDropdown ? "rotate-down" : "rotate-up"
            }`}
          ></i>
        </button>
        <div
          className={`dropdown-menua shadow px-2  ${
            openDropdown ? "fade-in-drop" : "hide-out-drop"
          }`}
        >
          {hotelList.map((hotel: Hotel) => (
            <div
              className={`dropdown-item py-2 rounded mb-1 ${
                openDropdown ? "fade-in-drop-item" : "hide-out-drop-item"
              }`}
              key={hotel.sn}
              style={{ fontSize: "14px", cursor: "pointer" }}
              onClick={() => showAllHotels(hotel.title)}
            >
              {hotel.title}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default DropdownHotelCollection;
