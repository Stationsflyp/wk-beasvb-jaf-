"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "¿ES ANCIENTCRAFT LAUNCHER GRATIS?",
    answer: "Sí, Ancientcraft Launcher es completamente gratis. Sin tarifas ocultas ni suscripciones.",
  },
  {
    question: "¿QUÉ VERSIONES DE MINECRAFT SOPORTA?",
    answer:
      "Soportamos todas las versiones de Minecraft desde la 1.0 hasta la última versión disponible, incluyendo snapshots.",
  },
  {
    question: "¿PUEDO USAR MODS CON ANCIENTCRAFT?",
    answer:
      "Por supuesto. Ancientcraft tiene soporte completo para Forge, Fabric, y otros cargadores de mods populares.",
  },
  {
    question: "¿ES SEGURO USAR ESTE LAUNCHER?",
    answer: "Sí, totalmente seguro. Protegemos tu privacidad y nunca accedemos a tus datos personales.",
  },
  {
    question: "¿CÓMO ACTUALIZO EL LAUNCHER?",
    answer:
      "El launcher se actualiza automáticamente. Cuando hay una nueva versión disponible, recibirás una notificación.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4 bg-[#0f0f0f]">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#2a2a2a] mc-border mb-6">
            <span className="text-[10px] text-[#a855f7]">★ PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">¿DUDAS?</span> <span className="text-[#a855f7]">RESUELTAS</span>
          </h2>
          <p className="text-xs text-gray-400">
            Encuentra respuestas a las preguntas más comunes sobre Ancientcraft Launcher.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#2a2a2a] mc-border overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#333333] transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xs font-bold text-white pr-4">{faq.question}</span>
                <div
                  className="transition-transform duration-500 ease-in-out"
                  style={{
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {openIndex === index ? (
                    <Minus size={16} className="text-[#a855f7] flex-shrink-0" />
                  ) : (
                    <Plus size={16} className="text-[#a855f7] flex-shrink-0" />
                  )}
                </div>
              </button>
              <div
                className="smooth-expand overflow-hidden"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                  paddingTop: openIndex === index ? "0.5rem" : "0px",
                  paddingBottom: openIndex === index ? "1rem" : "0px",
                }}
              >
                <div className="px-6 bg-[#1a1a1a] border-t border-[#333333]">
                  <p className="text-xs text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-[#2a2a2a] mc-border">
          <h3 className="text-sm font-bold mb-2 text-white">¿AÚN TIENES PREGUNTAS?</h3>
          <p className="text-xs text-gray-400 mb-4">Nuestro equipo está aquí para ayudarte 24/7</p>
          <a
            href="https://discord.gg/FxVWHgTxvR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#a855f7] hover:bg-[#9333ea] text-white text-xs font-bold mc-border mc-button transition-colors duration-200"
          >
            CONTACTAR SOPORTE
          </a>
        </div>
      </div>
    </section>
  )
}
