import React, { useContext, useState } from "react";
import { CartContext } from "../Context/Context";
import SingleProducts from "../components/SingleProducts";

const Category = ({ prod }) => {
  // UseContext
  const { products } = useContext(CartContext);

  //   Filter
  const [input, setInput] = useState("");

  return (
    <>
      <form action="" style={{ textAlign: "center" }}>
        <label htmlFor="" style={{ marginRight: "5px" }}>
          Search Product
        </label>
        <input
          type="text"
          placeholder="Search title"
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        />
      </form>

      {/* Display Products */}
      <div className="productContainer">
        {products
          .filter((inputText) => {
            if (input === "") {
              return inputText;
            } else {
              return inputText.title.toLowerCase().includes(input);
            }
          })
          .map((prod) => (
            <SingleProducts key={prod.id} prod={prod} />
          ))}
      </div>
    </>
  );
};

export default Category;
