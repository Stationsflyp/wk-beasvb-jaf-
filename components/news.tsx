import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

const news = [
  {
    date: "15 ENE 2025",
    title: "ACTUALIZACIÓN v2.1",
    description: "Nueva interfaz, mejor rendimiento, y soporte para Minecraft 1.21.",
    tag: "ACTUALIZACIÓN",
    color: "#a855f7",
    image: "https://i.ibb.co/3m0GjHn0/MC-Three-Stripes-City-Net-Blog-Editorial-1280x720.webp",
  },
  {
    date: "10 ENE 2025",
    title: "NUEVO SISTEMA DE MODS",
    description: "Instala y gestiona mods más fácilmente que nunca.",
    tag: "FEATURE",
    color: "#FFD700",
    image: "https://i.ibb.co/r2hFZGGp/MCM-VV-Net-Blog-Editorial-1280x720.jpg",
  },
  {
    date: "05 ENE 2025",
    title: "NUEVO SHADER",
    description: "Experimenta gráficos mejorados con nuestro nuevo sistema de shaders.",
    tag: "FEATURE",
    color: "#7CB342",
    image: "https://i.ibb.co/PZ1fmNB1/image.png",
  },
]

export function News() {
  return (
    <section id="noticias" className="py-20 px-4 bg-[#1a1a1a]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#2a2a2a] pixel-border mb-6">
            <span className="text-[10px] text-[#a855f7]">★ NOTICIAS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">ÚLTIMAS</span> <span className="text-[#a855f7]">NOVEDADES</span>
          </h2>
          <p className="text-xs text-gray-400 max-w-2xl mx-auto">
            Mantente al día con las últimas actualizaciones, características y eventos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-[#2a2a2a] pixel-border overflow-hidden group smooth-scale hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#a855f7]/30 transition-all duration-300"
            >
              <div className="aspect-video bg-[#1a1a1a] pixel-border-inset relative overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="text-[10px] font-bold px-3 py-1 pixel-border"
                    style={{
                      backgroundColor: item.color,
                      color: "#1a1a1a",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={12} className="text-[#7CB342]" />
                  <span className="text-[10px] text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-sm font-bold mb-2 text-white group-hover:text-[#a855f7] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{item.description}</p>
                <button className="flex items-center gap-2 text-[10px] text-[#a855f7] font-bold transition-all duration-300 group-hover:gap-3 group-hover:translate-x-1">
                  LEER MÁS
                  <ArrowRight size={12} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#2a2a2a] hover:bg-[#333333] text-white text-xs font-bold pixel-border block-hover transition-all duration-200">
            VER TODAS LAS NOTICIAS
          </button>
        </div>
      </div>
    </section>
  )
}
