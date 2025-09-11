"use client";

import React, { useState } from "react";
import { login } from "@/app/(auth)/auth/login/actions";
import { Button, Input, Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Link from "next/link";

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
      <Typography.Title level={4}>Авторизоваться</Typography.Title>
      <Typography.Title level={5}>
        Введите адрес электронной почты ниже, чтобы войти в свою учетную запись
      </Typography.Title>

      <Input
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <Typography.Text type={"danger"}>Неверные учетные данные для входа</Typography.Text>}

      {loading ? (
        <Spin
          indicator={<LoadingOutlined spin />}
          size="default"
        />
      ) : (
        <Button onClick={() => buttonAuthHandler({ email, password })}>
          <Typography.Text>Авторизоваться</Typography.Text>
        </Button>
      )}

      <Typography.Title level={5}>
        Нет аккаунта? <Link href="/auth/sign-up">Зарегистрируйтесь</Link>
      </Typography.Title>
    </div>
  );
};

export default LoginPage;
