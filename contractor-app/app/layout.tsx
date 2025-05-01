import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastNotifications from "@/components/ToastNotifications";
import { Footer } from "@/modules/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contractor App",
  description: "Let's GOOOOOOOOOOOOO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Footer />
        <ToastNotifications />
      </body>
    </html>
  );
}
