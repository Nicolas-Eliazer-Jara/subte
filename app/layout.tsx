import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Subte CABA",
  description: "Subtes de la ciudad de Buenos Aires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        {children}
      </body>
    </html>
  );
}
