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
      <AntdHeader className={"sticky top-0 z-[1000] flex items-center"}>
        <Header />
      </AntdHeader>
      <Content className="flex flex-1 justify-center overflow-auto p-6">{children}</Content>
    </>
  );
};

export default MainLayout;
