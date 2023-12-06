import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proyecto de Salud Electronica",
  description: "Proyecto de Salud Electronica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className + " "}>{children}</body>
    </html>
  );
}
