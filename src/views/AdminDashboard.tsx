"use client";

import React from "react";
import { useUser } from "@/context/UserProvider/UserProvider";

const AdminDashboard = () => {
  const { firstName, lastName, middleName, email } = useUser();

  return (
    <div className="flex flex-col pt-4 items-between">
      <span> имя: {firstName}</span>
      <span> отчество: {middleName}</span>
      <span> фамилия: {lastName}</span>
      <span> email: {email}</span>
    </div>
  );
};

export default AdminDashboard;
