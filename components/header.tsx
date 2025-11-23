"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, Download } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMenuOpen(false)
    }
  }

  const scrollToDownload = () => {
    const downloadSection = document.getElementById("descargar")
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image
                src="https://i.ibb.co/1GKZ2qKC/Gemini-Generated-Image-r21jvcr21jvcr21j-removebg-preview-1.png"
                alt="Ancientcraft Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] bg-clip-text text-transparent">
              Ancientcraft
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "#inicio")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Inicio
            </a>
            <a
              href="#caracteristicas"
              onClick={(e) => handleNavClick(e, "#caracteristicas")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Características
            </a>
            <a
              href="#noticias"
              onClick={(e) => handleNavClick(e, "#noticias")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Noticias
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "#faq")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <button
              onClick={scrollToDownload}
              className="px-5 py-2.5 bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold rounded-lg mc-button flex items-center gap-2 transition-all duration-300"
            >
              <Download size={16} />
              Descargar
            </button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-white/10 rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "#inicio")}
              className="block text-sm text-gray-300 hover:text-white py-2 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#caracteristicas"
              onClick={(e) => handleNavClick(e, "#caracteristicas")}
              className="block text-sm text-gray-300 hover:text-white py-2 transition-colors"
            >
              Características
            </a>
            <a
              href="#noticias"
              onClick={(e) => handleNavClick(e, "#noticias")}
              className="block text-sm text-gray-300 hover:text-white py-2 transition-colors"
            >
              Noticias
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "#faq")}
              className="block text-sm text-gray-300 hover:text-white py-2 transition-colors"
            >
              FAQ
            </a>
            <button
              onClick={scrollToDownload}
              className="w-full px-5 py-2.5 bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold rounded-lg mc-button flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Download size={16} />
              Descargar
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
