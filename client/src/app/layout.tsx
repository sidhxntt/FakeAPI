import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rapid API",
  description: " Quickly test your frontend with our sample data—no need to set up API routes, we've already taken care of that.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/logo.png" />
        </head>
      <body className={`antialiased`}>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
