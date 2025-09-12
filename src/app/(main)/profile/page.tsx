"use server";

import React from "react";
import ThemeSelector from "@/components/ThemeSelector/ThemeSelector";
import Text from "antd/es/typography/Text";

const ProfilePage = () => {
  return (
    <div className={"flex justify-between w-full"}>
      <Text>Страница профиля</Text>
      <ThemeSelector />
    </div>
  );
};

export default ProfilePage;
