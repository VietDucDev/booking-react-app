import { Fragment, useState } from "react";
import "./App.css";
import HotelListPage from "./components/HotelListPage";

function App() {
  const [count, setCount] = useState(0);
  console.log("aaa");
  console.log("bbb");
  console.log("test push from TUNG");
  console.log("vai ca lz");

  return (
    <Fragment>
      <HotelListPage />
    </Fragment>
  );
}

export default App;
