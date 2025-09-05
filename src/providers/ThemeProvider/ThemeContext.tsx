"use client";

import { createContext } from "react";
import { PaletteMode } from "@mui/material/styles";

type ThemeContextValueType = {
  mode: PaletteMode;
  toggleTheme: (mode: PaletteMode) => void;
};

// TODO: 2. Создать Контекст, с помощью которого мы вытащим из него Provider + сможем через useContext вытаскивать текущее значение.
//  В значении будем держать текущую тему и колбэк, чтобы ее сменить
export const ThemeContext = createContext<ThemeContextValueType>({
  mode: "dark",
  toggleTheme: () => null,
});
