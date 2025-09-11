"use client";
import { theme, ThemeConfig } from "antd";

export const generateAppTheme = (mode: "light" | "dark"): ThemeConfig => {
  return {
    algorithm: mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
  };
};
