import React, { useContext } from "react";
import { ThemeContext } from "../../Context";

const Nested = () => {
  const { theme } = useContext(ThemeContext);
  return <div className={`${theme} nested`}>Nested</div>;
};

export default Nested;
