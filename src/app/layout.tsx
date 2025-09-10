import type { Metadata } from "next";
import "@/styles/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { CustomThemeProvider } from "@/providers/themeContext/CustomThemeProvider";

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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
