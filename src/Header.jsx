import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="header">
        <h1>React-Add to cart</h1>
      </div>
      <ul className="list">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/cart"}>
          <li>Cart ({cart.length})</li>
        </Link>
      </ul>
    </>
  );
};

export default Header;
