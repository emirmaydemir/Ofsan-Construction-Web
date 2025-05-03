import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Contractor App",
  description: "Let's GOOOOOOOOOOOOO",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout2({ children }: RootLayoutProps) {
  return <>{children}</>;
}
