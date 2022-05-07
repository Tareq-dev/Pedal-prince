import React from "react";
import BestProducts from "../BestProducts/BestProduct";
import Factory from "../Factory/Factory";
import Header from "../Header/Header";
import Products from "../Products/Products";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Header />
      <Products />
      <BestProducts />
      <Factory />
      <Team />
    </div>
  );
};

export default Home;
