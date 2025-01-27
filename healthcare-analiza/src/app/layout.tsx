import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Healthcare ANALIZA",
  description: "Health & Clinical Nutrition Center in Prishtina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-sm.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
