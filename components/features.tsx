import { Zap, Shield, Package, Wrench, Users, Rocket, Cpu, Globe, HardDrive, Download } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "SUPER RÁPIDO",
    description: "Lanzamiento instantáneo. Optimizado para el mejor rendimiento.",
    color: "#FFD700",
  },
  {
    icon: Shield,
    title: "SEGURO",
    description: "Protección completa. Tus datos están seguros con nosotros.",
    color: "#00BCD4",
  },
  {
    icon: Package,
    title: "MODS FÁCILES",
    description: "Instala mods con un click. Compatible con Forge y Fabric.",
    color: "#7CB342",
  },
  {
    icon: Wrench,
    title: "PERSONALIZABLE",
    description: "Ajusta todo a tu gusto. Tu launcher, tus reglas.",
    color: "#a855f7",
  },
  {
    icon: Users,
    title: "COMUNIDAD",
    description: "Miles de jugadores activos. Únete a la aventura.",
    color: "#2ECC71",
  },
  {
    icon: Rocket,
    title: "ACTUALIZACIONES",
    description: "Siempre actualizado. Las últimas versiones al instante.",
    color: "#FFD700",
  },
  {
    icon: Cpu,
    title: "OPTIMIZADO",
    description: "Bajo consumo de recursos. Juega sin lag.",
    color: "#4fc3f7",
  },
  {
    icon: Globe,
    title: "MULTI-IDIOMA",
    description: "Disponible en español, inglés y más idiomas.",
    color: "#FFD700",
  },
  {
    icon: HardDrive,
    title: "ALMACENAMIENTO",
    description: "Gestión inteligente de archivos y versiones.",
    color: "#7CB342",
  },
  {
    icon: Download,
    title: "DESCARGA RÁPIDA",
    description: "Servidores de alta velocidad. Sin esperas.",
    color: "#a855f7",
  },
]

export function Features() {
  return (
    <section id="caracteristicas" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7CB342]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Sparkles size={16} className="text-[#7CB342]" />
            <span className="text-sm text-gray-300">Características Premium</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">TODO LO QUE</span>{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#FFD700] bg-clip-text text-transparent">
              NECESITAS
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed">
            No es solo un launcher. Es una experiencia completamente nueva para jugar Minecraft con todas las
            herramientas profesionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#a855f7]/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#a855f7]/20"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${feature.color}20`, border: `2px solid ${feature.color}` }}
                >
                  <Icon size={24} style={{ color: feature.color }} />
                </div>
                <h3 className="text-sm font-bold mb-2 text-white group-hover:text-[#a855f7] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Sparkles } from "lucide-react"
