"use client";
import { createTheme } from "@mui/material/styles";

// TODO: 1. Создать 2 конфигурации темы

export const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});
