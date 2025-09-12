import React from "react";
import Header from "@/components/Header/Header";
import { Content, Header as AntdHeader } from "antd/es/layout/layout";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AntdHeader
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Header />
      </AntdHeader>
      <Content
        className="flex p-6 justify-center"
        style={{ flex: 1, overflow: "auto" }}
      >
        {children}
      </Content>
    </>
  );
};

export default MainLayout;
