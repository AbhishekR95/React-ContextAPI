// import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useContext } from "react";
import SingleProducts from "../components/SingleProducts";
import { CartContext } from "../Context/Context";

const Home = () => {
  // UseContext
  const { products } = useContext(CartContext);
  return (
    <>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProducts key={prod.id} prod={prod} />
        ))}
      </div>
    </>
  );
};

export default Home;
