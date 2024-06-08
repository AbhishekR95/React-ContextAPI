import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="header">
        <h1>React Shopping cart</h1>
        <ul className="list">
          <Link to={"/React-ContextAPI"}>
            <li>Home</li>
          </Link>
          <Link to={"/React-ContextAPI"}>
            <li>By Category</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart({cart.length})</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
