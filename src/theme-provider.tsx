"use client";

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export const useThemeContext = () => useContext(ThemeContext);
