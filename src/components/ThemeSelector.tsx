"use client";

import React from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useContextTheme } from "@/providers/themeContext/themeContext";

const ThemeSelector = () => {
  const { changeMode } = useContextTheme();

  return (
    <div className="flex items-center justify-between">
      <Typography>Смена темы: </Typography>

      <ButtonGroup variant="contained">
        <Button onClick={() => changeMode("light")}>Светлая</Button>
        <Button onClick={() => changeMode("system")}>Системная</Button>
        <Button onClick={() => changeMode("dark")}>Темная</Button>
      </ButtonGroup>
    </div>
  );
};

export default ThemeSelector;
