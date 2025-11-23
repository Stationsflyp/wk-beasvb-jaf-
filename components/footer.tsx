import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm py-12 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="https://i.ibb.co/1GKZ2qKC/Gemini-Generated-Image-r21jvcr21jvcr21j-removebg-preview-1.png"
                  alt="Ancientcraft Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#7CB342] to-[#4fc3f7] bg-clip-text text-transparent">
                Ancientcraft
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              El mejor launcher para Minecraft. Hecho con amor por la comunidad.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Producto</h4>
            <ul className="space-y-2">
              <li>
                <a href="#caracteristicas" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Descargar
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">Comunidad</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/FxVWHgTxvR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500 text-center">© 2025 Ancientcraft. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
