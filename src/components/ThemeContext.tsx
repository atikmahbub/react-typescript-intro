import { createContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme);

type contextType = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: contextType) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
