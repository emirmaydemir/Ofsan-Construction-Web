"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";

interface LanguageContextType {
  language: string | null;
  changeLanguage: (lang: string) => void;
}

// Dil bilgisini saklamak için bir context oluşturuyoruz
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: any) {
  const [language, setLanguage] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    setLanguage(savedLanguage);
    // Eğer kayıtlı dil "en" ise ve URL'de /en yoksa ekle
    if (savedLanguage === "en" && !pathname.startsWith("/en")) {
      changeLanguage("tr");
    }
    if ((savedLanguage === "tr" && pathname.startsWith("/en")) || pathname.startsWith("/en")) {
      changeLanguage("en");
    }
  }, []);

  const changeLanguage = (newLanguage: any) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
}

// Dil bilgisini kullanmak için bir custom hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
