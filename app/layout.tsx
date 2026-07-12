import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YVTech | Y Vivek Portfolio",
  description:
    "YVTech - Portfolio of Y Vivek, Computer Science student and Web Developer.",
  verification: {
    google: "-Vgd3m5IugmV1lhMpbQb3DWeCXIKNqNoej5yieYOMaY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}