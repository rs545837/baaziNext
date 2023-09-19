import {
  JetBrains_Mono as FontMono,
  Plus_Jakarta_Sans as FontSans,
  Oswald as FontOswald,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const oswald = FontOswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})