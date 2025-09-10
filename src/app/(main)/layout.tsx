import React from "react";
import Header from "@/components/Header/Header";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
