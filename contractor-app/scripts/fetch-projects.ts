import fs from "fs";
import path from "path";
import { ProjectInterface } from "@/types/strapi";

const fetchProjects = async () => {
  try {
    const response = await fetch(`http://localhost:1337/api/projects?populate=*`, {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer 9d2520c27313bc79a3187925f981e19ebaa7cc9e975898abff29c4e18283f8453aea8691f80984573880c7231252f11d82633ab9e9d1982044e0708fe9f609c3bcdde7bdb72187f15f9a73d9592fba35ccfa8aeef43bdb56ed467707c2d212ababba6103ef990427bd35a0948639af0bf25ccfe6b6ba3d27786cb467b7a2eeeb`,
      },
    });

    const { data }: { data: ProjectInterface[] } = await response.json();

    // `year` string → number dönüştürülüyor
    const normalized = data.map((p) => ({
      ...p,
      year: Number(p.year),
    }));

    const filePath = path.join(process.cwd(), "locales", "tr", "projects.json");
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(normalized, null, 2));
    console.log("✅ Türkçe Proje Verileri projects.json dosyasına yazıldı.");
  } catch (err) {
    console.error("❌ Hata:", err);
  }
};

const fetchEnProjects = async () => {
  try {
    const response = await fetch(`http://localhost:1337/api/project-ens?populate=*`, {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer 9d2520c27313bc79a3187925f981e19ebaa7cc9e975898abff29c4e18283f8453aea8691f80984573880c7231252f11d82633ab9e9d1982044e0708fe9f609c3bcdde7bdb72187f15f9a73d9592fba35ccfa8aeef43bdb56ed467707c2d212ababba6103ef990427bd35a0948639af0bf25ccfe6b6ba3d27786cb467b7a2eeeb`,
      },
    });

    const { data }: { data: ProjectInterface[] } = await response.json();

    // `year` string → number dönüştürülüyor
    const normalized = data.map((p) => ({
      ...p,
      year: Number(p.year),
    }));

    const filePath = path.join(process.cwd(), "locales", "en", "projects.json");
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(normalized, null, 2));
    console.log("✅ Ingilizce Proje Verileri projects.json dosyasına yazıldı.");
  } catch (err) {
    console.error("❌ Hata:", err);
  }
};

// Bu fonksiyonu hemen çalıştırıyoruz
fetchProjects();
fetchEnProjects();
