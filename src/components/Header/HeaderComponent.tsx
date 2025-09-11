"use client";

import React from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Avatar, Dropdown, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";

function HeaderComponent() {
  const router = useRouter();
  const supabase = createClient();

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: (
        <Link
          rel="noopener noreferrer"
          href="/profile"
        >
          Профиль
        </Link>
      ),
    },
    {
      key: "2",
      icon: <LogoutOutlined />,
      label: "Выйти",
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = async ({ key }) => {
    if (key === "2") {
      try {
        await supabase.auth.signOut();
        router.push("/auth/login");
      } catch (error) {
        console.error("Ошибка при выходе: ", error);
      }
    }
  };

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Image
        src="/logo.svg"
        alt="logo"
        width={201}
        height={44}
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
      />

      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        placement="bottomRight"
      >
        <Avatar
          shape={"square"}
          style={{ cursor: "default" }}
          size={"large"}
        >
          KG
        </Avatar>
      </Dropdown>
    </Header>
  );
}

export default HeaderComponent;
