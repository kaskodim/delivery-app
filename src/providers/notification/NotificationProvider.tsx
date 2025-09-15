"use client";

import { FC, PropsWithChildren } from "react";
import { NotificationContext } from "@/providers/notification/notificationContext";
import { notification } from "antd";

const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notificationApi, notificationContextHolder] = notification.useNotification({ placement: "bottomLeft" });

  return (
    <NotificationContext.Provider value={{ notificationApi }}>
      {notificationContextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
