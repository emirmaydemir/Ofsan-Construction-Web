import fs from "fs";
import path from "path";
import { ProjectInterface } from "@/types/strapi";
import { createWriteStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import https from "https";
import http from "http";

const streamPipeline = promisify(pipeline);

async function downloadImage(url: string, destFolder: string) {
  const fileName = path.basename(url);
  const destPath = path.join(destFolder, fileName);

  const client = url.startsWith("https") ? https : http;

  const response = await new Promise<http.IncomingMessage>((resolve, reject) => {
    client
      .get(url, (res) => {
        if (res.statusCode === 200) resolve(res);
        else reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      })
      .on("error", reject);
  });

  await streamPipeline(response, createWriteStream(destPath));
  return fileName;
}

const uploadsDir = path.join(process.cwd(), "public", "uploads");
fs.mkdirSync(uploadsDir, { recursive: true });

const fetchProjects = async () => {
  try {
    const response = await fetch(`http://localhost:1337/api/projects?populate=*`, {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer 9d2520c27313bc79a3187925f981e19ebaa7cc9e975898abff29c4e18283f8453aea8691f80984573880c7231252f11d82633ab9e9d1982044e0708fe9f609c3bcdde7bdb72187f15f9a73d9592fba35ccfa8aeef43bdb56ed467707c2d212ababba6103ef990427bd35a0948639af0bf25ccfe6b6ba3d27786cb467b7a2eeeb`,
      },
    });

    const { data }: { data: ProjectInterface[] } = await response.json();

    const normalized = await Promise.all(
      data.map(async (p) => {
        const images = await Promise.all(
          p.images.map(async (img) => {
            const imageUrl = img.url.startsWith("http") ? img.url : `http://localhost:1337${img.url}`;
            const fileName = await downloadImage(imageUrl, uploadsDir);
            return {
              id: img.id,
              name: img.name.replace(/\.[^/.]+$/, ""),
              url: img.url,
            };
          })
        );

        return {
          id: p.id,
          title: p.title,
          location: p.location,
          description: p.description,
          year: Number(p.year),
          images,
        };
      })
    );

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

    const normalized = await Promise.all(
      data.map(async (p) => {
        const images = await Promise.all(
          p.images.map(async (img) => {
            const imageUrl = img.url.startsWith("http") ? img.url : `http://localhost:1337${img.url}`;
            const fileName = await downloadImage(imageUrl, uploadsDir);
            return {
              id: img.id,
              name: img.name.replace(/\.[^/.]+$/, ""),
              url: img.url,
            };
          })
        );

        return {
          id: p.id,
          title: p.title,
          location: p.location,
          description: p.description,
          year: Number(p.year),
          images,
        };
      })
    );

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
