import { SITE } from "@/constants/site";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base_url = SITE.url;

  return [
    {
      url: `${base_url}/es`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${base_url}/es`,
          en: `${base_url}/en`,
        },
      },
    },
  ];
}