"use client";

import { createContext, ReactNode, useContext } from "react";

type UserType = {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
};

const user: UserType = {
  lastName: "Иванов",
  firstName: "Петр",
  middleName: "Семенович",
  email: "email@email.com",
};

const UserContext = createContext<UserType>(user);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
