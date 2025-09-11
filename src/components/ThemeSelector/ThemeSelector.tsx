"use client";

import React from "react";
import { useContextTheme } from "@/providers/themeContext/themeContext";
import { Button, Typography } from "antd";

const ThemeSelector = () => {
  const { changeMode } = useContextTheme();

  return (
    <div className="flex items-center justify-between">
      <Typography.Text>Смена темы: </Typography.Text>

      {/* TODO SEGMENTED*/}
      <Button onClick={() => changeMode("light")}>Светлая</Button>
      <Button onClick={() => changeMode("system")}>Системная</Button>
      <Button onClick={() => changeMode("dark")}>Темная</Button>
    </div>
  );
};

export default ThemeSelector;
