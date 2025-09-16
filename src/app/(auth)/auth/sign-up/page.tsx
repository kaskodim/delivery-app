"use client";

import React, { useState } from "react";
import RegistrationSuccessCard from "@/app/(auth)/auth/sign-up/RegistrationSuccessCard/RegistrationSuccessCard";
import RegistrationForm from "@/app/(auth)/auth/sign-up/RegistrationForm/RegistrationForm";

const SignUpPage = () => {
  const [isShowSuccessCard, setShowSuccessCard] = useState<boolean>(false);

  return (
    <div className={"w-1/3"}>
      {isShowSuccessCard ? <RegistrationSuccessCard /> : <RegistrationForm setShowSuccessCard={setShowSuccessCard} />}
    </div>
  );
};

export default SignUpPage;
