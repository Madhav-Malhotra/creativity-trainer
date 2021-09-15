import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    light: {
      bg: "#E0E0E0",
      container: "#F5F5F5",
      tile: "#757575",
      primaryText: "#121212",
      secondaryText: "#424242"
    },
    dark: {
      bg: "#121212",
      container: "#424242",
      tile: "#757575",
      primaryText: "#F5F5F5",
      secondaryText: "#E0E0E0"
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

//https://uxdesign.cc/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129
