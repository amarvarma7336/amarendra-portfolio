import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Amarendra Varma | Full Stack Developer",
  description:
    "Amarendra Varma is a Full Stack Developer skilled in React, React Native, and Node.js. He builds dynamic web and mobile applications, utilizing MongoDB for backend integration. His strong foundation in design principles ensures intuitive and user-friendly solutions.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      new URL("/favicon.ico", "https://amarendradeveloper.in"),
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  metadataBase: new URL("https://amarendradeveloper.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amarendra Varma | Full Stack Developer",
    description:
      "Amarendra Varma is a Full Stack Developer skilled in React, React Native, and Node.js. He builds dynamic web and mobile applications, utilizing MongoDB for backend integration. His strong foundation in design principles ensures intuitive and user-friendly solutions.",
    url: "https://amarendradeveloper.in",
    siteName: "Mahesh Muttinti - Full Stack Web & Mobile App Developer",
    locale: "en",
    type: "website",
    images: ["https://amarendradeveloper.in/brand-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarendra Varma | Full Stack Developer",
    description:
      "Amarendra Varma is a Full Stack Developer skilled in React, React Native, and Node.js. He builds dynamic web and mobile applications, utilizing MongoDB for backend integration. His strong foundation in design principles ensures intuitive and user-friendly solutions.",
    creator: "@AmarVarma",
    images: ["https://amarendradeveloper.in/brand-banner.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
