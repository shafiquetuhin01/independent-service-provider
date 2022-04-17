import React, { useState } from "react";
import Banner from "../Banner/Banner";

const Home = () => {
  const [banner, setBanner] = useState([]);
  return (
    <div className="container-fluid">
      <Banner></Banner>
    </div>
  );
};

export default Home;
