"use client";

import { FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { ModeTheme, ThemeContext, ThemePreference } from "@/providers/themeContext/themeContext";
import { ThemeProvider } from "@mui/material/styles";
import { generateAppTheme } from "@/styles/theme";
import { getSystemTheme } from "@/lib/getSystemTheme";

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [didMount, setDidMount] = useState(false);
  const [mode, setMode] = useState<ModeTheme>(getSystemTheme());

  useEffect(() => {
    setDidMount(true);
  }, []);

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
      <ThemeProvider theme={theme}>{didMount && children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
