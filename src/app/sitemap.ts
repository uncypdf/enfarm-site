import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://enfarm.co.kr";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/analysis`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/1`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/2`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/branches`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}