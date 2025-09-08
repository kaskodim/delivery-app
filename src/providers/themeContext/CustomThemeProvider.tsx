"use client";

import { FC, PropsWithChildren, useState } from "react";
import { ModeTheme, ThemeContext, ThemePreference } from "@/providers/themeContext/themeContext";
import { ThemeProvider } from "@mui/material/styles";
import { generateAppTheme } from "@/styles/theme";

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<ModeTheme>("light");

  const changeMode = (newMode: ThemePreference) => {
    if (newMode === "system") {
      const isDarkSystemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setMode(isDarkSystemTheme ? "dark" : "light");
    } else {
      setMode(newMode);
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, changeMode }}>
      <ThemeProvider theme={generateAppTheme(mode)}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
