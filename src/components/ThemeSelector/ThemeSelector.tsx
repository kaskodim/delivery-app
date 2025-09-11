"use client";

import React from "react";
import { ThemePreference, useContextTheme } from "@/providers/themeContext/themeContext";
import { Segmented, Typography } from "antd";

const ThemeSelector = () => {
  const { changeMode, mode } = useContextTheme();

  const themeLabels: { label: string; value: ThemePreference }[] = [
    {
      label: "Светлая",
      value: "light",
    },
    {
      label: "Системная",
      value: "system",
    },
    {
      label: "Темная",
      value: "dark",
    },
  ];

  return (
    <div>
      <Typography.Text>Смена темы:</Typography.Text>

      <Segmented<ThemePreference>
        options={themeLabels.map((el) => ({
          label: el.label,
          value: el.value,
        }))}
        defaultValue={mode}
        onChange={(value) => {
          changeMode(value);
        }}
      />
    </div>
  );
};

export default ThemeSelector;
