import React, { useContext } from "react";
import { CartContext } from "../Context/Context";
const SingleProducts = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <div className="products">
        <img src={prod.image} alt="" />

        <div className="desc">
          <span>{prod.title}</span>
          <span>{prod.price}</span>
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
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};

export default SingleProducts;
