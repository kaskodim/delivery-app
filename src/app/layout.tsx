import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@/context/UserProvider/UserProvider";

export const metadata: Metadata = {
  title: "Delivery app",
  description: "Web-приложение для управления заказами",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="flex justify-center p-4">
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
