import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(99);
const productsArray = [...Array(20)].map(() => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.url(),
}));

const Home = () => {
  const [products] = useState(productsArray);
  return (
    <>
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct key={prod.id} prod={prod} />;
        })}
      </div>
    </>
  );
};

export default Home;
