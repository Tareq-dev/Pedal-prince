import React from "react";
import Feature from "../Feature/Feature";
import Header from "../Header/Header";
import Products from "../Products/Products";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Header />
      <Products />
      <Feature />
      <Team />
    </div>
  );
};

export default Home;
