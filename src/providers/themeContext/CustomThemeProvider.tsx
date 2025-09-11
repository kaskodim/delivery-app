"use client";

import { FC, PropsWithChildren, useCallback, useMemo, useState } from "react";
import { ModeTheme, ThemeContext, ThemePreference } from "@/providers/themeContext/themeContext";

import { generateAppTheme } from "@/styles/theme";
import { getSystemTheme } from "@/lib/getSystemTheme";
import { ConfigProvider, theme } from "antd";

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<ModeTheme>(getSystemTheme());

  const changeMode = useCallback(
    (newMode: ThemePreference) => {
      if (newMode === "system") {
        setMode(getSystemTheme());
      } else {
        setMode(newMode);
      }
    },
    [setMode],
  );

  const theme = useMemo(() => generateAppTheme(mode), [mode]);
  const contextValue = useMemo(() => {
    return { mode, changeMode };
  }, [changeMode, mode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
