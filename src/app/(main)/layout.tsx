"use client";
import React from "react";
import { Layout } from "antd";
import Header from "@/components/Header/Header";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Layout.Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Header />
      </Layout.Header>
      <Layout.Content
        className="flex p-6 justify-center"
        style={{ flex: 1, overflow: "auto" }}
      >
        {children}
      </Layout.Content>
    </>
  );
};

export default MainLayout;
