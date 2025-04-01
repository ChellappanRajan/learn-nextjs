"use client";
import type { FC, PropsWithChildren } from "react";
import { createContext, useContext } from "react";

export type Theme = "dark" | "light";

export const ThemeContext = createContext<Theme>("light");

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: FC<PropsWithChildren<{ value: Theme }>> = ({
  children,
  value,
}) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
