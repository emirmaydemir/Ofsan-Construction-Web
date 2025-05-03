"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function LanguageChanger() {
  const { language, changeLanguage } = useLanguage();
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: any) => {
    changeLanguage(newLocale);

    // Yönlendirme işlemi
    if (newLocale === "tr") {
      if (currentPathname.startsWith("/en")) {
        // Eğer dil Türkçe'ye dönecekse ve /en varsa, /en'yi kaldır
        const newPathname = currentPathname.replace(/^\/en/, "");

        // Eğer ana sayfa (/) ise, yönlendirirken boş bırak, diğer sayfalarda /en kaldır
        if (newPathname === "/en" || newPathname === "") {
          router.push("/"); // Ana sayfaya yönlendir
        } else {
          router.push(newPathname); // Diğer sayfada /en'yi kaldırıp doğru yönlendir
        }
      } else {
        router.push(currentPathname); // Eğer /en yoksa, mevcut path'e yönlendir
      }
    } else {
      if (!currentPathname.startsWith("/en")) {
        // Eğer dil İngilizce olacaksa ve /en yoksa, /en ekle
        router.push("/en" + currentPathname);
      } else {
        router.push(currentPathname); // Eğer zaten /en varsa, mevcut path'i koru
      }
    }

    // Sayfa yenilenir (Zorla yenileme)
    //router.refresh();
  };

  const displayLang = language === "en" || currentPathname.startsWith("/en") ? "EN" : "TR";

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border border-yellow-400 rounded-md bg-yellow-300/20 text-black">{displayLang}</MenuButton>

        <MenuItems className="absolute top-full right-0 mt-2 w-24 origin-top-right bg-yellow-300/20 border border-yellow-400 rounded-md shadow-md focus:outline-none z-50">
          <div className="py-1">
            <MenuItem as="button" onClick={() => handleChange("tr")} className={({ active }) => `w-full text-left px-4 py-2 text-sm text-black ${active ? "bg-yellow-400/40" : ""}`}>
              TR
            </MenuItem>
            <MenuItem as="button" onClick={() => handleChange("en")} className={({ active }) => `w-full text-left px-4 py-2 text-sm text-black ${active ? "bg-yellow-400/40" : ""}`}>
              EN
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}
