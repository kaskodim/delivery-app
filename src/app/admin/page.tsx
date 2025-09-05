"use client";

import React from "react";
import { Button, Typography } from "@mui/material";
import { useThemeContext } from "@/providers/ThemeProvider/useThemeContext";

// TODO: 6. Проверить, что хук работает

const AdminPage = () => {
  const { toggleTheme, mode } = useThemeContext();
  return (
    <Typography>
      я страница сурового администратора!
      <Button
        onClick={() => {
          toggleTheme(mode === "dark" ? "light" : "dark");
        }}
      >
        сменить тему
      </Button>
    </Typography>
  );
};

export default AdminPage;
