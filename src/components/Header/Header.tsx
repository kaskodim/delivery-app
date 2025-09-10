"use client";

import React, { useState } from "react";
import { AppBar, Avatar, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

function Header() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const supabase = createClient();

  const menuItems: { id: string; label: string; onClick: () => void }[] = [
    {
      id: "Profile",
      label: "Профиль",
      onClick: () => {
        router.push("/profile");
        setAnchorElUser(null);
      },
    },
    {
      id: "exit",
      label: "Выйти",
      onClick: async () => {
        await supabase.auth.signOut();
        setAnchorElUser(null);
        router.push("/auth/login");
      },
    },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={120}
          height={40}
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        />

        <Tooltip title="Открыть настройки">
          <IconButton
            onClick={(event) => setAnchorElUser(event.currentTarget)}
            sx={{ p: 0 }}
          >
            <Avatar
              alt="Иванов Иван"
              src={""}
            >
              ИИ
            </Avatar>
          </IconButton>
        </Tooltip>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={!!anchorElUser}
          onClose={() => setAnchorElUser(null)}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              onClick={item.onClick}
            >
              <Typography textAlign="center">{item.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
