import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual production URL later if needed,
  // but for Vercel, having the base domain is standard.
  const baseUrl = 'https://buildwebvox.com'; // You can update this to your domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
