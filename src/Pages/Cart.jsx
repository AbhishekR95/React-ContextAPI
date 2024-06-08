import React, { useContext, useEffect, useState } from "react";
import SingleProducts from "../components/SingleProducts";
import { CartContext } from "../Context/Context";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Total: ${total}</h3>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProducts key={prod.id} prod={prod} />
        ))}
      </div>
    </>
  );
};

export default Cart;
