import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ToastNotifications from "@/components/ToastNotifications";
import { Footer } from "@/modules/Footer";
import { NavigationLargeScreens } from "@/modules/Nav/NavigationLargeScreens";
import { Navigation } from "@/modules/Nav/Navigation";
import { LanguageProvider } from "@/components/LanguageProvider";

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
      <LanguageProvider>
        <body className={inter.className}>
          <Navigation />
          <NavigationLargeScreens />
          <main>{children}</main>
          <Footer />
          <ToastNotifications />
        </body>
      </LanguageProvider>
    </html>
  );
}
