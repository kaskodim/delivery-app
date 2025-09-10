"use client";

import React, { useState } from "react";
import { Button, CircularProgress, Link, TextField, Typography } from "@mui/material";
import { login } from "@/app/(auth)/auth/login/actions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const buttonAuthHandler = (data: { email: string; password: string }) => {
    setLoading(true);
    login(data)
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={"flex flex-col w-[400] gap-4"}>
      <Typography variant="h5">Авторизоваться</Typography>
      <Typography variant="h6">Введите адрес электронной почты ниже, чтобы войти в свою учетную запись</Typography>

      <TextField
        variant="filled"
        size={"small"}
        required
        type="email"
        label="Электронная почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="filled"
        size={"small"}
        required
        type="password"
        label="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <Typography color={"error"}>Неверные учетные данные для входа</Typography>}

      {loading ? (
        <CircularProgress color={"info"} />
      ) : (
        <Button
          variant={"contained"}
          onClick={() => buttonAuthHandler({ email, password })}
        >
          <Typography>Авторизоваться</Typography>
        </Button>
      )}

      <Typography variant="h6">
        Нет аккаунта? <Link href="/auth/sign-up">Зарегистрируйтесь</Link>
      </Typography>
    </div>
  );
};

export default LoginPage;
