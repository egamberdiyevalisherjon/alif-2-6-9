import React, { useEffect } from "react";
import { ThemeContext } from "../../Context";

const Test = (props) => {
//   console.log(props);

  const handleClick = () => {
    props.ctx.setTheme(props.ctx.theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <h1>{props.ctx.theme}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

const Showcase = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
  };

  return (
    <>
      <ThemeContext.Consumer>
        {(ctx) => <Test ctx={ctx} />}
      </ThemeContext.Consumer>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Ism
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="age">
          Ism
          <input type="number" name="age" id="age" />
        </label>
        <button type="submit">Qabul qilish</button>
      </form>
    </>
  );
};

export default Showcase;
