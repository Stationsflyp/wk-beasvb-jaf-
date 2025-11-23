"use client"

import { Download } from "lucide-react"
import { useState } from "react"
import { CaptchaModal } from "./captcha-modal"

export function CrackedDownload() {
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [captchaVerified, setCaptchaVerified] = useState(false)

  const downloadLink = "https://ancientcraft-studio.s3.us-east-1.amazonaws.com/modpacks/modpack.zip"

  const handleDownload = () => {
    if (captchaVerified) {
      window.location.href = downloadLink
      setCaptchaVerified(false)
    } else {
      setShowCaptcha(true)
    }
  }

  const handleCaptchaVerify = () => {
    setCaptchaVerified(true)
    setTimeout(() => {
      window.location.href = downloadLink
    }, 100)
  }

  return (
    <section id="crackeado" className="py-16 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        <CaptchaModal isOpen={showCaptcha} onClose={() => setShowCaptcha(false)} onVerify={handleCaptchaVerify} />

        <div className="bg-[#1a1a1a] border-2 border-dashed border-gray-700 p-8 rounded-lg">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 bg-[#2a2a2a] border border-gray-700 mb-4 rounded">
              <span className="text-[9px] text-gray-400">VERSIÓN NO OFICIAL</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-300">Launcher para Minecraft Crackeado</h2>
            <p className="text-xs text-gray-500 max-w-xl mx-auto">
              Launcher oficial de Ancientcraft para usuarios con versiones no oficiales de Minecraft
            </p>
          </div>

          <div className="bg-[#151515] border border-gray-800 rounded p-6 mb-6">
            <div className="flex flex-col items-center gap-6">
              <div className="flex-1 text-center w-full">
                <h3 className="text-lg font-semibold text-gray-400 mb-2">Ancientcraft Launcher</h3>
                <p className="text-xs text-gray-600 mb-1">Versión: v2.0.5 (Para Minecraft No Premium)</p>
                <p className="text-xs text-gray-600">Compatible con versiones crackeadas de Minecraft</p>
              </div>

              <button
                onClick={handleDownload}
                className="w-full max-w-sm px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold text-sm rounded border border-gray-600 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Descargar Versión Crackeada
              </button>
            </div>
          </div>

          <div className="space-y-3 text-xs text-gray-600">
            <p className="flex items-start gap-2">
              <span className="text-gray-500">•</span>
              <span>Este launcher funciona con versiones crackeadas de Minecraft</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gray-500">•</span>
              <span>No incluye soporte para servidores oficiales de Minecraft</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-gray-500">•</span>
              <span>Recomendamos adquirir una cuenta oficial de Minecraft para la mejor experiencia</span>
            </p>
          </div>

          <div className="mt-6 p-3 bg-[#0f0f0f] border border-gray-800 rounded text-center">
            <p className="text-[10px] text-gray-600">
              ⚠️ Esta versión no recibe actualizaciones automáticas ni soporte prioritario
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
