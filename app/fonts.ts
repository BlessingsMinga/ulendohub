import { Inter, Noto_Sans } from "next/font/google";

export const InterSans = Inter({
  variable: "--font-Inter-sans",
  subsets: ["latin"],
});

export const NotoSans = Noto_Sans ({
  variable: "--font-Noto-Sans-mono",
  subsets: ["latin"],
});

export const fontClass = `${InterSans.variable} ${NotoSans.variable}`;

const interInstance = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const interClass = interInstance.className;
