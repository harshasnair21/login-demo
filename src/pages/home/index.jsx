import React, { useState } from "react";
import Slider from "../../components/slider";
import CountryCard from "../../components/countryCard";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./index.css";
const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");

  return (
    <div className="main-container mt-5 mx-auto px-3">
      <Navbar
        activeRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />
      <div className="welcome-divider my-4">
        <span className="line"></span>
        <h2 className="welcome-title mx-3 mb-0">WELCOME</h2>
        <span className="line"></span>
      </div>
      <Slider />
      <CountryCard selectedRegion={selectedRegion} />
      <Footer />
    </div>
  );
};

export default Home;
