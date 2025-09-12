"use client";

import React from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Avatar, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const supabase = createClient();

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
      onClick: async () => {
        try {
          await supabase.auth.signOut();
          router.push("/auth/login");
        } catch (error) {
          console.error("Ошибка при выходе: ", error);
        }
      },
    },
  ];

  return (
    <div className={"flex justify-between items-center w-full"}>
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
