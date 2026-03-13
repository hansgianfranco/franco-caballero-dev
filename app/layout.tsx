import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

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
  metadataBase: new URL("https://francocaballero.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        {children}

        {process.env.NODE_ENV === "production" && (
          <>
            <SpeedInsights />
            <GoogleAnalytics gaId={process.env.GA_ID!} />
          </>
        )}
      </body>
    </html>
  );
}