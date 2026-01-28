export const dynamic = "force-static";
import type { MetadataRoute } from "next";

const baseUrl = "https://alexrochlitz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/how-to-be-happy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog/axis-of-burnout`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}
