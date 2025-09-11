import "@ant-design/v5-patch-for-react-19";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import { CustomThemeProvider } from "@/providers/themeContext/CustomThemeProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";

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
      <body>
        <AntdRegistry>
          <CustomThemeProvider>
            <Layout>{children}</Layout>
          </CustomThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
