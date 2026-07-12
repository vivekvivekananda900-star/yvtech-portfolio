import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Y Vivekananda | Full Stack Web Developer",

  description:
    "Official portfolio of Y Vivekananda. Full Stack Web Developer specializing in Next.js, React, TypeScript, Tailwind CSS and Firebase.",

  keywords: [
    "Y Vivekananda",
    "YVTech",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "Firebase",
    "Tailwind CSS",
    "Web Developer",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Y Vivekananda",
    },
  ],

  creator: "Y Vivekananda",

  applicationName: "YVTech Portfolio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Y Vivekananda Portfolio",

    description:
      "Modern Full Stack Web Developer Portfolio",

    url: "https://yvtech.vercel.app",

    siteName: "YVTech",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Y Vivekananda",

    description:
      "Full Stack Web Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}