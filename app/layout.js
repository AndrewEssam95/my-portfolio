import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Andrew Essam",
  description: "Andrew Essam personal portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl`}>
        <Header />
        <div className="min-h-[calc(100vh-117px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
