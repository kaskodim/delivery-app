"use client";

import React from "react";
import { ThemePreference, useContextTheme } from "@/providers/themeContext/themeContext";
import { Segmented, Typography } from "antd";
import { SegmentedOptions } from "antd/es/segmented";

const ThemeSelector = () => {
  const { changeMode, mode } = useContextTheme();

  const themeLabels: SegmentedOptions<ThemePreference> = [
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
        options={themeLabels}
        defaultValue={mode}
        onChange={(value) => {
          changeMode(value);
        }}
      />
    </div>
  );
};

export default ThemeSelector;
