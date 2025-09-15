"use client";

import React from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Avatar, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useNotificationContext } from "@/providers/notification/notificationContext";

function Header() {
  const router = useRouter();
  const supabase = createClient();
  const { notificationApi } = useNotificationContext();

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link href="/profile">Профиль</Link>,
    },
    {
      key: "2",
      icon: <LogoutOutlined />,
      label: "Выйти",
      onClick: () => {
        supabase.auth
          .signOut()
          .then(() => {
            router.push("/auth/login");
          })
          .catch((error) => {
            notificationApi?.error({
              message: "Ошибка при выходе: ",
              description: `${error}`,
            });
          });
      },
    },
  ];

  return (
    <div className={"flex w-full items-center justify-between"}>
      <Image
        src="/logo.svg"
        alt="logo"
        width={201}
        height={44}
        onClick={() => router.push("/")}
        className={"cursor-pointer"}
      />

      <Dropdown
        menu={{ items }}
        placement="bottomRight"
      >
        <Avatar
          shape={"square"}
          className={"cursor-default"}
          size={"large"}
        >
          KG
        </Avatar>
      </Dropdown>
    </div>
  );
}

export default Header;
