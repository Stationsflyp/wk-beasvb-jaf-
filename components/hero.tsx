"use client"

import { useEffect, useState } from "react"
import { Download, ChevronRight, Sparkles } from "lucide-react"

export function Hero() {
  const [os, setOS] = useState<"Windows" | "macOS" | "Linux">("Windows")

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.includes("mac")) setOS("macOS")
    else if (userAgent.includes("linux")) setOS("Linux")
  }, [])

  const scrollToDownload = () => {
    const downloadSection = document.getElementById("descargar")
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="inicio" className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7CB342]/5 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#7CB342]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#4fc3f7]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Sparkles size={16} className="text-[#FFD700]" />
              <span className="text-sm text-gray-300">Versión 2.1 - Nuevo y mejorado</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              El launcher definitivo para{" "}
              <span className="bg-gradient-to-r from-[#a855f7] via-[#FFD700] to-[#8b5cf6] bg-clip-text text-transparent">
                Minecraft
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl text-pretty">
              Rápido, estable y lleno de funciones. Desarrollado con pasión para ofrecerte la mejor experiencia jugando
              Minecraft con mods, texturas y todas las versiones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToDownload}
                className="group px-8 py-4 bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold rounded-xl mc-button flex items-center justify-center gap-2 text-lg transition-all duration-300"
              >
                <Download size={20} />
                Descargar para {os}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://discord.gg/FxVWHgTxvR"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 flex items-center justify-center gap-2 text-lg transition-colors"
              >
                Únete a Discord
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <div className="space-y-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#FFD700]/50 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#ffa000] bg-clip-text text-transparent">
                  1K+
                </div>
                <div className="text-xs text-gray-500">Descargas</div>
              </div>
              <div className="space-y-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#4fc3f7]/50 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#4fc3f7] to-[#0288d1] bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-xs text-gray-500">Uptime</div>
              </div>
              <div className="space-y-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#7CB342]/50 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#7CB342] to-[#5a9130] bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-xs text-gray-500">Soporte</div>
              </div>
              <div className="space-y-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#a855f7]/50 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-xs text-gray-500">Mods</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#7c3aed] rounded-full blur-[120px] opacity-50 animate-pulse" />
              <div className="absolute inset-0 bg-[#a855f7] rounded-full blur-[100px] opacity-40" />

              <img
                src="https://i.ibb.co/HQjtdhj/Gemini-Generated-Image-6vzx176vzx176vzx-Photoroom.png"
                alt="Ancientcraft Launcher"
                className="w-full h-full object-contain scale-[2] relative z-10"
              />
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#ffa000] rounded-xl rotate-12 animate-float opacity-80" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#4fc3f7] to-[#0288d1] rounded-xl -rotate-12 animate-float opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
