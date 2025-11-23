"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface CaptchaModalProps {
  isOpen: boolean
  onClose: () => void
  onVerify: () => void
}

export function CaptchaModal({ isOpen, onClose, onVerify }: CaptchaModalProps) {
  const [captchaType, setCaptchaType] = useState<"math" | "text" | "slider">("math")

  // Math captcha
  const [num1, setNum1] = useState(Math.floor(Math.random() * 15) + 1)
  const [num2, setNum2] = useState(Math.floor(Math.random() * 15) + 1)

  // Text captcha
  const words = [
    "MINECRAFT",
    "CREEPER",
    "DIAMOND",
    "ENDERMAN",
    "VILLAGE",
    "ZOMBIE",
    "SKELETON",
    "REDSTONE",
    "PORTAL",
    "CRAFTING",
    "ENCHANT",
    "BIOME",
    "PICKAXE",
    "ANCIENT",
    "LAUNCHER",
  ]
  const [textWord, setTextWord] = useState(words[Math.floor(Math.random() * words.length)])

  // Slider captcha
  const [sliderValue, setSliderValue] = useState(0)
  const [targetSlider, setTargetSlider] = useState(Math.floor(Math.random() * 20) + 80)

  const [captchaInput, setCaptchaInput] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (isOpen) {
      const types: ("math" | "text" | "slider")[] = ["math", "text", "slider"]
      setCaptchaType(types[Math.floor(Math.random() * types.length)])
      setNum1(Math.floor(Math.random() * 15) + 1)
      setNum2(Math.floor(Math.random() * 15) + 1)
      setTextWord(words[Math.floor(Math.random() * words.length)])
      setTargetSlider(Math.floor(Math.random() * 20) + 80)
      setError("")
      setCaptchaInput("")
      setSliderValue(0)
    }
  }, [isOpen])

  const handleVerify = () => {
    let isCorrect = false

    if (captchaType === "math") {
      const answer = Number.parseInt(captchaInput)
      isCorrect = answer === num1 + num2
    } else if (captchaType === "text") {
      isCorrect = captchaInput.toUpperCase() === textWord
    } else if (captchaType === "slider") {
      isCorrect = Math.abs(sliderValue - targetSlider) <= 5
    }

    if (isCorrect) {
      setError("")
      onVerify()
      onClose()
    } else {
      setError("❌ Respuesta incorrecta. Intenta de nuevo.")
      setCaptchaInput("")
      if (captchaType === "slider") {
        setSliderValue(0)
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] mc-border rounded-xl p-8 max-w-md w-full animate-in zoom-in-95 duration-300 shadow-2xl shadow-purple-500/20">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] rounded-full mb-4 animate-pulse">
            <span className="text-3xl">🤖</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Verificación de Seguridad</h3>
          <p className="text-sm text-gray-400">
            {captchaType === "math" && "Resuelve la operación para continuar"}
            {captchaType === "text" && "Escribe la palabra que ves"}
            {captchaType === "slider" && "Desliza hasta la posición correcta"}
          </p>
        </div>

        <div className="bg-[#0f0f0f] border-2 border-[#a855f7]/30 rounded-lg p-6 mb-6">
          {captchaType === "math" && (
            <>
              <div className="text-center mb-4">
                <span className="text-4xl font-mono font-bold text-transparent bg-gradient-to-r from-[#a855f7] to-[#FFD700] bg-clip-text">
                  {num1} + {num2} = ?
                </span>
              </div>
              <input
                type="number"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleVerify()}
                placeholder="Ingresa tu respuesta"
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#a855f7]/50 rounded-lg text-white text-center text-lg focus:outline-none focus:border-[#a855f7] transition-colors"
                autoFocus
              />
            </>
          )}

          {captchaType === "text" && (
            <>
              <div className="text-center mb-4 bg-[#1a1a1a] p-4 rounded-lg">
                <span
                  className="text-3xl font-mono font-bold text-transparent bg-gradient-to-r from-[#a855f7] via-[#FFD700] to-[#a855f7] bg-clip-text tracking-widest"
                  style={{ letterSpacing: "0.3em" }}
                >
                  {textWord}
                </span>
              </div>
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleVerify()}
                placeholder="Escribe la palabra aquí"
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#a855f7]/50 rounded-lg text-white text-center text-lg focus:outline-none focus:border-[#a855f7] transition-colors uppercase"
                autoFocus
              />
            </>
          )}

          {captchaType === "slider" && (
            <>
              <div className="text-center mb-4">
                <span className="text-lg text-gray-300">
                  Desliza hasta:{" "}
                  <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#a855f7] to-[#FFD700] bg-clip-text">
                    {targetSlider}%
                  </span>
                </span>
              </div>
              <div className="relative mb-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="w-full h-3 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${sliderValue}%, #1a1a1a ${sliderValue}%, #1a1a1a 100%)`,
                  }}
                />
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold text-white">{sliderValue}%</span>
              </div>
            </>
          )}

          {error && (
            <p className="text-sm text-red-400 mt-3 text-center animate-in slide-in-from-top duration-200">{error}</p>
          )}
        </div>

        <button
          onClick={handleVerify}
          className="w-full px-6 py-4 bg-gradient-to-r from-[#a855f7] to-[#7c3aed] hover:from-[#9333ea] hover:to-[#6d28d9] text-white font-bold rounded-lg mc-button transition-all duration-300 transform hover:scale-105"
        >
          Verificar y Descargar
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Esta verificación ayuda a proteger contra descargas automatizadas
        </p>
      </div>
    </div>
  )
}
