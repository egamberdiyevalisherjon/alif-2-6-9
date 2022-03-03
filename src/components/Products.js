import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (product) => {
      dispatch(addToCart(product));
    },
    [dispatch]
  );

  useEffect(() => {
    let unmounted = false;
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (!unmounted) setProducts(data);
      });
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() =>
                      handleClick({
                        _id: Math.floor(Math.random() * 1000000000),
                        title: item.title,
                        price: item.price,
                      })
                    }
                  >
                    Add To Cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
