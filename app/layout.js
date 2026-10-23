import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
const sans = Manrope({ subsets: ["latin"], variable: "--sans" });
const serif = Newsreader({ subsets: ["latin"], variable: "--serif", style: ["normal", "italic"] });
export const metadata = { title: "EvolveIR 2027", description: "Workshop on Evolving Information Retrieval and Recommendation Systems at ECIR 2027." };
export default function Layout({ children }) { return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>; }
