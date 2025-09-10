"use server";

import React from "react";
import { AppBar, Typography } from "@mui/material";
import ThemeSelector from "@/components/ThemeSelector";

const ProfilePage = () => {
  return (
    <div className={"flex justify-between w-full"}>
      <AppBar position="static">header</AppBar>
      <Typography>Страница профиля</Typography>
      <ThemeSelector />
    </div>
  );
};

export default ProfilePage;
