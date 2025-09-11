"use client";
import React from "react";
import { Layout } from "antd";
import HeaderComponent from "@/components/Header/HeaderComponent";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Layout.Header>
        <HeaderComponent />
      </Layout.Header>
      <Layout.Content
        className="flex p-6 justify-center"
        style={{ flex: 1, overflow: "auto" }}
      >
        {children}
      </Layout.Content>
    </div>
  );
};

export default MainLayout;
