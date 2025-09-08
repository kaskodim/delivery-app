"use client";
import { createTheme } from "@mui/material/styles";
import { ModeTheme } from "@/providers/themeContext/themeContext";

export const generateAppTheme = (mode: Extract<ModeTheme, "dark" | "light">) => {
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
