import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UFC Fighters by Country",
  description:
    "An interactive world map showing how many UFC fighters come from each country, with a short note on every nation's scene.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
