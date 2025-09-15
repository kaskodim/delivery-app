"use client";

import { createContext, useContext } from "react";
import { NotificationInstance } from "antd/es/notification/interface";

type NotificationContextType = {
  notificationApi?: NotificationInstance;
};

export const NotificationContext = createContext<NotificationContextType>({ notificationApi: undefined });

export const useNotificationContext = () => useContext(NotificationContext);
