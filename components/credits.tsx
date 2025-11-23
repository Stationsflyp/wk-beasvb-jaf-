"use client"

import Image from "next/image"

const teamMembers = [
  {
    name: "DominicanOHIO",
    role: "Owner & Founder",
    image: "https://i.ibb.co/vx5BNPsw/e3ffb4ba6bc0060419a5dc91e117b0ca.png",
    description: "Creador y fundador del proyecto",
  },
  {
    name: "SirSmith",
    role: "Web Developer",
    image: "https://i.ibb.co/G3RPmt0R/e7cd9ad616e8cc8028ba3a790f3477f3.png",
    description: "Desarrollo y diseño web",
  },
  {
    name: "alproYT",
    role: "Developer",
    image: "https://i.ibb.co/67QnXZPh/9ee6da431141a2389d9c3f91b0276105.png",
    description: "Desarrollo del launcher",
  },
  {
    name: "Ray",
    role: "Developer",
    image: "https://i.ibb.co/6zm57dP/c644de462d3c45c54cee9deaaaacc93f.png",
    description: "Desarrollo del launcher",
  },
]

export function Credits() {
  return (
    <section id="creditos" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0a2e] to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9C27B0] rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7CB342] rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#9C27B0] via-[#BA68C8] to-[#7CB342] bg-clip-text text-transparent">
            Nuestro Equipo
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Las personas que hacen posible Ancientcraft Launcher
          </p>
        </div>

        <div className="max-w-md mx-auto mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#9C27B0] to-[#BA68C8] rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#9C27B0] rounded-2xl p-8 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9C27B0] text-white px-6 py-2 rounded-full text-sm font-bold border-4 border-black">
                OWNER
              </div>
              <div className="relative w-40 h-40 mx-auto mb-6 mt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9C27B0] to-[#BA68C8] rounded-full animate-pulse" />
                <div className="absolute inset-1 bg-black rounded-full overflow-hidden">
                  <Image
                    src={teamMembers[0].image || "/placeholder.svg"}
                    alt={teamMembers[0].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{teamMembers[0].name}</h3>
              <p className="text-[#FFD700] font-semibold text-lg mb-2">{teamMembers[0].role}</p>
              <p className="text-gray-400">{teamMembers[0].description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.slice(1).map((member) => (
            <div
              key={member.name}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#7CB342]/30 rounded-xl p-6 text-center hover:border-[#9C27B0] hover:shadow-[0_0_40px_rgba(156,39,176,0.5)] transition-all duration-500 hover:scale-105"
            >
              <div className="relative w-32 h-32 mx-auto mb-5">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7CB342] to-[#9C27B0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#7CB342] group-hover:border-[#9C27B0] transition-colors duration-500">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#BA68C8] to-white bg-clip-text text-transparent mb-2 group-hover:from-[#9C27B0] group-hover:to-[#BA68C8] transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-[#a855f7] group-hover:text-[#7CB342] font-semibold mb-2 transition-colors duration-300">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
