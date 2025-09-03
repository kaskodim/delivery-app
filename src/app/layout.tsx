import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Delivery app',
    description: 'Web-приложение для управления заказами',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className='flex justify-center p-4'>
        {children}
        </body>
        </html>
    );
}
