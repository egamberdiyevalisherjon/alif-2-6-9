import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = JSON.parse(localStorage.getItem("cart") || "[]");

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newState = [...state, action.payload];
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    case REMOVE_FROM_CART: {
      const newState = state.filter((item) => item._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
