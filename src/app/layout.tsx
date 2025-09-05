import type { Metadata } from "next";
import "@/styles/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider/ThemeProvider";

export const metadata: Metadata = {
  title: "Delivery app",
  description: "Web-приложение для управления заказами",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={roboto.variable}
    >
      <body className="flex justify-center p-4">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {/*// TODO: 4. Вставляем сюда наш провайдер.
          + мы убираем MUI провайдер,
          т.к. мы его перенесли внутрь нашего собственного*/}
          <ThemeProvider>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
