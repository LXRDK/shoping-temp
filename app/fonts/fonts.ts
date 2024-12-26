import { Alex_Brush, Roboto } from "next/font/google";

export const alexFont = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  preload: true,
});

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto",
});
