import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();
const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  // FetchProducts
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios("https://fakestoreapi.com/products").then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart, products, setProducts }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default Context;
