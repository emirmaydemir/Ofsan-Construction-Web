// scripts/export-projects.ts
import { fetchProjects } from "@/data/strapi"; // senin dosya yapına göre yolu ayarla
import fs from "fs";
import { execSync } from "child_process";

const exportProjects = async () => {
  const projects = await fetchProjects();

  // JSON dosyasına yaz
  const filePath = "data/projects.json";
  fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
  console.log(`✅ Projeler ${filePath} dosyasına yazıldı.`);

  // Git işlemleri
  try {
    execSync("git add data/projects.json");
    execSync('git commit -m "Strapi verileri güncellendi"');
    execSync("git push");
    console.log("✅ GitHub’a gönderildi.");
  } catch (err) {
    console.error("❌ Git işlemi başarısız:", err);
  }
};

exportProjects();
