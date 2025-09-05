"use client";

import { FC, PropsWithChildren, useMemo, useState } from "react";
import { PaletteMode, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "@/styles/theme";
import { ThemeContext } from "@/providers/ThemeProvider/ThemeContext";

// TODO: 3. Реализовываем провайдер на основе контекста из 2 шага.
//  Так как мы создаем провайдер для темы, то можем сюда (т.е. в этот компонент) вынести проввайдер темы от MUI.
//  В импортах его переименуем, чтобы наш ThemeProvider назывался отлично от ThemeProvider из MUI
export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
