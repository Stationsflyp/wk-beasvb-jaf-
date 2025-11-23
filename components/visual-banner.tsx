"use client"

import { Sparkles, Star } from "lucide-react"
import { useEffect, useState } from "react"

export function VisualBanner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const avatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
  ]

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/20 via-[#1a1a1a] to-[#7CB342]/20" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#FFD700] rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <div
        className="absolute w-96 h-96 bg-[#a855f7]/30 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-[#FFD700]/30">
            <Star size={20} className="text-[#FFD700] animate-pulse" />
            <span className="text-lg font-semibold bg-gradient-to-r from-[#FFD700] to-[#ffa000] bg-clip-text text-transparent">
              La Revolución del Gaming
            </span>
            <Star size={20} className="text-[#FFD700] animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-[#a855f7] to-[#FFD700] bg-clip-text text-transparent">
              Experimenta Minecraft
            </span>
            <br />
            <span className="text-white">Como Nunca Antes</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-pretty">
            Más de 1,000 jugadores ya confían en Ancientcraft Launcher para disfrutar de la mejor experiencia de juego.
            Únete a la comunidad y descubre un nuevo mundo de posibilidades.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="#descargar"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("descargar")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="group px-10 py-5 bg-gradient-to-r from-[#a855f7] to-[#7c3aed] hover:from-[#9333ea] hover:to-[#6d28d9] text-white font-bold rounded-xl shadow-lg shadow-[#a855f7]/50 flex items-center gap-3 text-lg transition-all duration-300 hover:scale-105"
            >
              <Sparkles size={24} />
              Descargar Ahora
              <Sparkles size={24} />
            </a>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar || "/placeholder.svg"}
                    alt={`Usuario ${i + 1}`}
                    className="w-12 h-12 rounded-full border-4 border-[#1a1a1a] object-cover hover:scale-110 transition-transform"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFD700" className="text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-1">1,000+ usuarios felices</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-12">
            {["100% Gratis", "Sin Anuncios", "Multi-Plataforma"].map((badge, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm font-semibold text-gray-300 hover:border-[#a855f7]/50 transition-colors"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
