import React, { useContext } from "react";
import { CartContext } from "./Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <div className="products">
        <img src={prod.image} alt="" />
        <div className="desc">
          <span>{prod.name}</span>
          <span> ${prod.price.substring(0, 5)}</span>
        </div>
        {cart.includes(prod) ? (
          <button
            className="add remove"
            onClick={() => {
              setCart(cart.filter((item) => item.id !== prod.id));
            }}
          >
            Remove
          </button>
        ) : (
          <button
            className="add"
            onClick={() => {
              setCart([...cart, prod]);
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
