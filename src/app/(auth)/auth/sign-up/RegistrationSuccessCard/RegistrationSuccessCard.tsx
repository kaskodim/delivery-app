import React from "react";
import { Card, Typography } from "antd";

const RegistrationSuccessCard = () => {
  return (
    <Card title="Спасибо за регистрацию">
      <Typography>
        Вы успешно зарегистрировались. Перед входом проверьте свою электронную почту, чтобы подтвердить свою учетную
        запись.
      </Typography>
    </Card>
  );
};

export default RegistrationSuccessCard;
