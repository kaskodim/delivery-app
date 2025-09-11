"use client";
import React from "react";
import Header from "@/components/Header/Header";
import { Layout } from "antd";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/*<Layout.Header></Layout.Header>*/}
      <Header />
      <Layout.Content>{children}</Layout.Content>
    </div>
  );
};

export default MainLayout;
