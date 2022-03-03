import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { REMOVE_FROM_CART } from "../store/actions/types";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleDelete = useCallback(
    (_id) => {
      dispatch({ type: REMOVE_FROM_CART, payload: _id });
    },
    [dispatch]
  );

  return (
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
        {cart.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Remove</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Cart;
