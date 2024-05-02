import React from "react";

const TestComponent = () => {
  const quickFacility1 = "12";
  const quickFacility2 = "24";
  const quickFacility3 = "48";

  const quickFacilities = ["12", "8"]; // Thêm tùy ý số lượng quickFacility ở đây

  const hotelListTest = [
    {
      id: 1,
      name: "ks1",
      facility: [
        {
          id: 10,
          name: "wifi",
        },
        {
          id: 12,
          name: "bath hub",
        },
        {
          id: 15,
          name: "smart home",
        },
        {
          id: 24,
          name: "oral water",
        },
        {
          id: 10,
          name: "wash machine",
        },
      ],
    },
    {
      id: 2,
      name: "ks2",
      facility: [
        {
          id: 11,
          name: "wifi",
        },
        {
          id: 16,
          name: "demo2",
        },
        {
          id: 9,
          name: "demo3",
        },
        {
          id: 18,
          name: "demo4",
        },
        {
          id: 19,
          name: "demo5",
        },
      ],
    },
    {
      id: 3,
      name: "ks3",
      facility: [
        {
          id: 8,
          name: "wifi",
        },
        {
          id: 12,
          name: "bath hub",
        },
        {
          id: 15,
          name: "smart home",
        },
        {
          id: 24,
          name: "oral water",
        },
        {
          id: 11,
          name: "wash machine",
        },
      ],
    },
  ];

  const filteredHotel = hotelListTest.filter((hotel) =>
    quickFacilities.every((quickFacility) =>
      hotel.facility.some((facility) => facility.id === parseInt(quickFacility))
    )
  );

  console.log("filteredHotel tét component: ", filteredHotel);

  return (
    <div>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
      <h2>test</h2>
    </div>
  );
};

export default TestComponent;
