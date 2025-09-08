"use client";
import { createTheme, PaletteMode } from "@mui/material/styles";

export const generateAppTheme = (mode: PaletteMode) => {
  return createTheme({
    cssVariables: true,
    typography: {
      fontFamily: "var(--font-roboto)",
    },
    palette: {
      mode,
    },
  });
};
