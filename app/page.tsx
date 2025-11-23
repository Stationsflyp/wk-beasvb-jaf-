"use client"

import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { DownloadSection } from "@/components/download-section"
import { News } from "@/components/news"
import { FAQ } from "@/components/faq"
import { Credits } from "@/components/credits"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { VisualBanner } from "@/components/visual-banner"
import { CrackedDownload } from "@/components/cracked-download"

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[#1a1a1a] relative overflow-hidden"
      onContextMenu={(e) => e.preventDefault()}
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
               linear-gradient(0deg, transparent 24%, rgba(124, 179, 66, .3) 25%, rgba(124, 179, 66, .3) 26%, transparent 27%, transparent 74%, rgba(124, 179, 66, .3) 75%, rgba(124, 179, 66, .3) 76%, transparent 77%, transparent),
               linear-gradient(90deg, transparent 24%, rgba(124, 179, 66, .3) 25%, rgba(124, 179, 66, .3) 26%, transparent 27%, transparent 74%, rgba(124, 179, 66, .3) 75%, rgba(124, 179, 66, .3) 76%, transparent 77%, transparent)
             `,
          backgroundSize: "32px 32px",
        }}
      />

      <Header />
      <Hero />
      <Features />
      <VisualBanner />
      <DownloadSection />
      <CrackedDownload />
      <News />
      <FAQ />
      <Credits />
      <Footer />
    </div>
  )
}
