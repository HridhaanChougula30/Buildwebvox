import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buildwebvox — AI Voice Agents & Premium Websites',
  description: 'Buildwebvox builds AI voice agents, business automation and premium websites for companies, offices, clinics, hospitals, restaurants, shops, hotels, schools, real estate businesses and more.',
  keywords: [
    'AI Voice Agents',
    'Voice AI Automation',
    'Premium Website Development',
    'Business Automation',
    'AI Receptionist',
    'Custom AI Workflow',
    'Buildwebvox'
  ],
  authors: [{ name: 'Buildwebvox', url: 'https://buildwebvox.com' }],
  openGraph: {
    title: 'Buildwebvox — AI Voice Agents & Premium Websites',
    description: 'Voices You Build, Websites You Trust. Custom AI voice agents and premium websites engineered for modern businesses.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-obsidian text-foreground antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
