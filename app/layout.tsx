import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Imagine AI | Generate AI-powered images",
  description: "Generate AI-powered images with Imagine AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
