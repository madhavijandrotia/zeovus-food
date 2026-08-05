import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import PageTransition from "@/components/layout/PageTransition";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Zeovus Food",
  description: "Bringing the World's Finest Into Every Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${oswald.className}`}>
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
