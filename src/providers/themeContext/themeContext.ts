"use client";

import { createContext, useContext } from "react";

export type ModeTheme = "dark" | "light";
export type ThemePreference = ModeTheme | "system";

export type ContextTheme = {
  mode: ModeTheme;
  changeMode: (newMode: ThemePreference) => void;
};

export const ThemeContext = createContext<ContextTheme>({
  mode: "light",
  changeMode: () => null,
});

export const useContextTheme = () => useContext(ThemeContext);
