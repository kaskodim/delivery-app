"use server";

import React from "react";
import { Typography } from "@mui/material";
import ThemeSelector from "@/components/ThemeSelector";

const ProfilePage = () => {
  return (
    <div className={"flex justify-between w-full"}>
      <Typography>Страница профиля</Typography>
      <ThemeSelector />
    </div>
  );
};

export default ProfilePage;
