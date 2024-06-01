import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "./Context";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <>
      <div>
        <h2>Total: {total}</h2>
      </div>{" "}
      <div className="productContainer">
        {cart.map((prod) => {
          return <SingleProduct key={prod.id} prod={prod} />;
        })}
      </div>
    </>
  );
};

export default Cart;
