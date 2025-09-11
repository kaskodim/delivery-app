"use server";

import React from "react";
import ThemeSelector from "@/components/ThemeSelector/ThemeSelector";

const ProfilePage = () => {
  return (
    <div className={"flex justify-between w-full"}>
      <div>Страница профиля</div>
      <ThemeSelector />
    </div>
  );
};

export default ProfilePage;
