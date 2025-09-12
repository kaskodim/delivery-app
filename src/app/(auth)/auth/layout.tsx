import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={"mt-9 flex h-screen justify-center"}>{children}</div>;
};

export default AuthLayout;
