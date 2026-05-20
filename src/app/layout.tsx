import type { Metadata } from "next";
import { Poppins, Playfair, Source_Sans_3 } from "next/font/google";
import "../styles/globals.scss";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const playfair = Playfair({
  variable: "--font-playfair",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Block Demo",
  description: "A simple Next.js app demonstrating the use of two custom blocks: TabbedSlider and NumberedSteps. The blocks are rendered using a BlockRenderer component that takes in block data from a JSON file and renders the appropriate block based on its type.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${sourceSans3.variable}`}>
      <body>{children}</body>
    </html>
  );
}
