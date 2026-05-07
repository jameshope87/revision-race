import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "./themes";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") return lightTheme;
    if (saved === "dark") return darkTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? lightTheme
      : darkTheme;
  });

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev.id === "dark" ? lightTheme : darkTheme;
      localStorage.setItem("theme", next.id);
      return next;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
