import React from "react";
import Header from "../../headers/header";
import Content from "./content";

import "../../styles/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Content />
    </div>
  );
};

export default Home;
