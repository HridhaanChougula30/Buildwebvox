import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Replace with your actual domain when you get one
    sitemap: 'https://buildwebvox.com/sitemap.xml',
  };
}
