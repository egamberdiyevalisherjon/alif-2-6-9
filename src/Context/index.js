import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({
    name: "Kimdir",
    password: "lorem",
  });

  function changeUserName(name) {
    setUser({ ...user, name });
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        changeUserName,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
