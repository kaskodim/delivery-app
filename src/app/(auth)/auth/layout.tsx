import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={"flex justify-center mt-9"}>{children}</div>;
};

export default AuthLayout;
