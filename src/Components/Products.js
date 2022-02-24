import React, { useEffect, useState } from "react";

let products = [
  {
    price: 15000,
  },
  {
    price: 32000,
  },
  {
    price: 7000,
  },
];

const Products = () => {
  const [count, setCount] = useState(1000);

  useEffect(() => {
    products.forEach((p) => {
      setCount((prevState) => prevState + p.price);
    });
  }, []);

  return (
    <div>
      Products
      <p>{count}</p>
    </div>
  );
};

export default Products;
