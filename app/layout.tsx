import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Header from "@/components/Header";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "بلک دایس",
  description: "فروشگاه آنلاین بردگیم و بازی های فکری ایرانی و خارجی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="<generated>"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/png>"
          sizes="<generated>"
        />
      </head>

      <body className={vazirmatn.className + " bg-base-100"}>
        <Header className="mb-5" />

        {children}

        <Footer className="mt-5" />
      </body>
    </html>
  );
}
