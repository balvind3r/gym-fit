import { Fira_Code as FontMono, Inter as FontSans } from "@next/font/google";
import { Geostar as FontGeostar, Geostar_Fill as FontGeostarFill } from "@next/font/google";
import { Genos as FontGenos } from "@next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontGeostar = FontGeostar({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-geostar",
});

export const fontGeostarFill = FontGeostarFill({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-geostar-fill",
});
export const fontGenos = FontGenos({
  // weight: "400",
  subsets: ["latin"],
  variable: "--font-genos"
});
