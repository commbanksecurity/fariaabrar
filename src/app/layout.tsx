import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FARIA ABRAR | Unity 3D & Three.js Game Developer | Interactive Marketing",
  description:
    "Official portfolio of FARIA ABRAR — Senior Game Developer & 3D Interactive Technologist specializing in Unity 3D, Three.js, and high-conversion WebGL experiences for international studios and global brands.",
  keywords: [
    "FARIA ABRAR",
    "Game Developer",
    "Unity 3D",
    "Three.js",
    "WebGL",
    "Game Marketing",
    "Interactive 3D",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#07070c] text-white font-sans selection:bg-[#f43f5e] selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

