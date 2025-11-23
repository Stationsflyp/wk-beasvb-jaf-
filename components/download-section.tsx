"use client"

import { useEffect, useState } from "react"
import { Download, CheckCircle2 } from "lucide-react"
import { CaptchaModal } from "./captcha-modal"

export function DownloadSection() {
  const [os, setOS] = useState<"Windows" | "macOS" | "Linux">("Windows")
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [captchaVerified, setCaptchaVerified] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.includes("mac")) setOS("macOS")
    else if (userAgent.includes("linux")) setOS("Linux")
  }, [])

  const downloadLinks = {
    Windows: "https://github.com/Stationsflyp/MAC-MD/releases/download/d12c1f2/AncientcraftLauncher_Setup.exe",
    macOS: "https://github.com/Stationsflyp/MAC-MD/releases/download/d12c1f2/AncientcraftLauncher_Setup.exe",
    Linux: "https://github.com/Stationsflyp/MAC-MD/releases/download/d12c1f2/AncientcraftLauncher_Setup.exe",
  }

  const handleDownload = (platform: "Windows" | "macOS" | "Linux") => {
    if (captchaVerified) {
      window.location.href = downloadLinks[platform]
      setCaptchaVerified(false)
    } else {
      setShowCaptcha(true)
    }
  }

  const handleCaptchaVerify = () => {
    setCaptchaVerified(true)
    setTimeout(() => {
      window.location.href = downloadLinks[os]
    }, 100)
  }

  return (
    <section id="descargar" className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="container mx-auto max-w-5xl">
        <CaptchaModal isOpen={showCaptcha} onClose={() => setShowCaptcha(false)} onVerify={handleCaptchaVerify} />

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#2a2a2a] mc-border mb-6">
            <span className="text-[10px] text-[#a855f7]">★ OBTÉN EL LAUNCHER</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">DESCARGA</span>{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#FFD700] bg-clip-text text-transparent">
              ANCIENTCRAFT
            </span>
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Última versión: <span className="text-[#FFD700] font-bold">v2.1.0</span> • Lanzada el 15 de Marzo, 2024
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Download Card */}
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] mc-border p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] rounded-xl flex items-center justify-center">
                <Download size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Descarga Automática</h3>
                <p className="text-xs text-gray-400">Detectado: {os}</p>
              </div>
            </div>

            <button
              onClick={() => handleDownload(os)}
              className="block w-full px-8 py-4 bg-[#a855f7] hover:bg-[#9333ea] text-white font-bold text-center rounded-xl mc-button flex items-center justify-center gap-2 transition-all duration-300 group"
            >
              <Download size={20} />
              Instalar para {os}
            </button>

            <div className="space-y-2">
              <p className="text-xs text-gray-500">Otras plataformas:</p>
              <div className="flex gap-2">
                {(["Windows", "macOS", "Linux"] as const).map((platform) => (
                  <button
                    key={platform}
                    onClick={() => handleDownload(platform)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-xs text-white rounded-lg border border-white/10 transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Requirements Card */}
          <div className="bg-[#2a2a2a] mc-border p-8 space-y-6">
            <h3 className="text-xl font-bold text-white">Requisitos del Sistema</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#7CB342] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Sistema Operativo</p>
                  <p className="text-gray-400 text-xs">Windows 10/11, macOS 11+, Linux (Ubuntu 20.04+)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#7CB342] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">RAM Mínima</p>
                  <p className="text-gray-400 text-xs">4GB (8GB recomendado para mods)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#7CB342] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Almacenamiento</p>
                  <p className="text-gray-400 text-xs">2GB de espacio libre</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#7CB342] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Java</p>
                  <p className="text-gray-400 text-xs">Se incluye automáticamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="bg-[#2a2a2a] mc-border p-8">
          <h3 className="text-xl font-bold text-white mb-6">Guía de Instalación</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#a855f7] rounded-lg flex items-center justify-center text-white font-bold">
                1
              </div>
              <h4 className="text-sm font-bold text-white">Descarga el Instalador</h4>
              <p className="text-xs text-gray-400">
                Haz clic en el botón de descarga y guarda el archivo en tu computadora.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#a855f7] rounded-lg flex items-center justify-center text-white font-bold">
                2
              </div>
              <h4 className="text-sm font-bold text-white">Ejecuta el Instalador</h4>
              <p className="text-xs text-gray-400">Abre el archivo descargado y sigue las instrucciones en pantalla.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-[#a855f7] rounded-lg flex items-center justify-center text-white font-bold">
                3
              </div>
              <h4 className="text-sm font-bold text-white">¡Juega!</h4>
              <p className="text-xs text-gray-400">
                Inicia sesión con tu cuenta de Minecraft y comienza a jugar inmediatamente.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[#1a1a1a] border border-[#a855f7]/30 rounded-lg">
            <p className="text-xs text-gray-300">
              <span className="text-[#FFD700] font-bold">💡 Consejo:</span> ¿Necesitas ayuda? Únete a nuestro{" "}
              <a
                href="https://discord.gg/FxVWHgTxvR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a855f7] hover:text-[#9333ea] underline"
              >
                servidor de Discord
              </a>{" "}
              para soporte en vivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
