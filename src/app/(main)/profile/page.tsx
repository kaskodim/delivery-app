"use server";

import React from "react";
import ThemeSelector from "@/components/ThemeSelector/ThemeSelector";
import Text from "antd/es/typography/Text";

const ProfilePage = () => {
  return (
    <div className={"flex w-full justify-between"}>
      <Text>Страница профиля</Text>
      <ThemeSelector />
    </div>
  );
};

export default ProfilePage;
