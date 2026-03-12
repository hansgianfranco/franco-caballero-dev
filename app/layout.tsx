import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Franco Caballero | Senior Fullstack Developer",
  description:
    "Senior Fullstack Developer specialized in Next.js, Laravel, WordPress and cloud solutions. Building scalable web applications.",
  keywords: [
    "Franco Caballero",
    "Fullstack Developer",
    "Next.js Developer",
    "Laravel Developer",
    "WordPress Developer",
    "Web Developer Portfolio"
  ],
  authors: [{ name: "Franco Caballero" }],
  creator: "Franco Caballero",
  metadataBase: new URL("https://francocaballero.dev"),
  openGraph: {
    title: "Franco Caballero | Senior Fullstack Developer",
    description: "Web developer specialized in WordPress, Laravel and Next.js",
    url: "https://francocaballero.dev",
    siteName: "Franco Caballero Portfolio",
    images: [
      {
        url: "/web-app-manifest-192x192.png",
        width: 192,
        height: 192,
        alt: "Franco Caballero Portfolio"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary",
    images: ["/web-app-manifest-192x192.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://francocaballero.dev"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <LanguageProvider>
          {children}
          <StructuredData />
        </LanguageProvider>
        <SpeedInsights/>
        <GoogleAnalytics gaId={process.env.GA_ID!} />
      </body>
    </html>
  );
}