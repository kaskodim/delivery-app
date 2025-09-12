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
      <AntdHeader className={"flex items-center z-[1000] top-0 sticky"}>
        <Header />
      </AntdHeader>
      <Content className="flex flex-1 overflow-auto p-6 justify-center">{children}</Content>
    </>
  );
};

export default MainLayout;
