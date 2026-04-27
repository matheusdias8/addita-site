import type { MetadataRoute } from "next";

const BASE = "https://addita.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/pericia-judicial`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/assistencia-judicial`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/consultoria-contratos`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/vistorias-cautelares`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/avaliacao-imoveis`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
