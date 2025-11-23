import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ancientcraft Launcher - El Mejor Launcher para Minecraft",
  description:
    "Launcher moderno y profesional para Minecraft con actualizaciones automáticas, soporte para mods, velocidad optimizada y estabilidad garantizada.",
  icons: {
    icon: "https://i.ibb.co/1GKZ2qKC/Gemini-Generated-Image-r21jvcr21jvcr21j-removebg-preview-1.png",
    apple: "https://i.ibb.co/1GKZ2qKC/Gemini-Generated-Image-r21jvcr21jvcr21j-removebg-preview-1.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
