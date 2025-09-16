"use client";

import React, { useState } from "react";
import { Button, Form, FormProps, Input, Typography } from "antd";
import { CYRILLIC_VALIDATION_MESSAGE, PASSWORD_VALIDATION } from "@/constants";
import { useNotificationContext } from "@/providers/notification/notificationContext";
import { useRouter } from "next/navigation";
import { LoadingOutlined } from "@ant-design/icons";

type FieldType = {
  email: string;
  lastName: string;
  firsName: string;
  password: string;
  repeatPassword: string;
};

type Props = {
  setShowSuccessCard: (isRegistrationSuccess: boolean) => void;
};

const RegistrationForm = ({ setShowSuccessCard }: Props) => {
  const [loading] = useState(false);

  const { notificationApi } = useNotificationContext();
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    setShowSuccessCard(true);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
    notificationApi?.error({
      message: "Ошибка отправки данных:",
      description: errorInfo.errorFields[0].errors[0],
    });
  };

  return (
    <div>
      <Typography.Title level={2}>Регистрация</Typography.Title>
      <Form
        name="basic"
        initialValues={{ remember: true }} // Начальное значение поля "remember": true
        onFinish={onFinish} // Функция, вызываемая при успешной отправке формы
        onFinishFailed={onFinishFailed} // Функция, вызываемая при ошибке отправки формы
        autoComplete="on" // Отключение автозаполнения браузера для полей формы
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Введите свою почту" }]}
        >
          <Input
            placeholder="Введите Email"
            type="email"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Фамилия"
          name="lastName"
          rules={[
            { required: true, message: "Допускается кириллица, пробел, тире", pattern: CYRILLIC_VALIDATION_MESSAGE },
          ]}
        >
          <Input
            placeholder="Введите фамилию"
            type="text"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Имя"
          name="firsName"
          rules={[
            { required: true, message: "Допускается кириллица, пробел, тире", pattern: CYRILLIC_VALIDATION_MESSAGE },
          ]}
        >
          <Input
            placeholder="Введите имя"
            type="text"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: "Не менее 6 символов",
              pattern: PASSWORD_VALIDATION,
            },
          ]}
        >
          <Input.Password placeholder={"Введите пароль"} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Повторите пароль"
          name="repeatPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Не менее 6 символов",
              pattern: PASSWORD_VALIDATION,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || value === getFieldValue("password")) {
                  return Promise.resolve();
                }
                return Promise.reject("Пароли не совпадают");
              },
            }),
          ]}
        >
          <Input.Password placeholder={"Подтверждение пароля"} />
        </Form.Item>

        <Form.Item label={null}>
          <div className={"flex gap-4"}>
            <Button
              type="primary"
              htmlType="submit"
              icon={loading && <LoadingOutlined spin />}
              disabled={loading}
            >
              Зарегистрироваться
            </Button>
            <Button
              type="default"
              onClick={() => router.push("/auth/login")}
            >
              Отмена
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
