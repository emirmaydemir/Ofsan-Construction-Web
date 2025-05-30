"use client";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import React, { useEffect } from "react";
import { Links } from "./Links";
import LanguageChanger from "@/components/LanguageChanger";

export const NavigationLargeScreens = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`hidden md:block fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white text-black" : "bg-transparent text-white"}`}>
      <Container>
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="flex items-center gap-6">
            <Links />
            <div className="ml-auto">
              <LanguageChanger />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
