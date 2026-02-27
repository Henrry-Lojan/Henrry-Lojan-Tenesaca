"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, ChevronDown, Github, Linkedin, Download } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/henrrylojan", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/henrrylojan", label: "GitHub" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Social Links - GeoCositas style */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-card border border-border hover:border-primary/50 flex items-center justify-center hover:glow-green-sm transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-sm font-medium border-primary/30 text-primary bg-primary/5"
              >
                Disponible para nuevos proyectos
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Henrry Lojan
              </h1>

              <p className="text-xl md:text-2xl text-primary font-semibold text-glow">
                Ingeniero Civil | Especialista en BIM & SIG
              </p>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed text-pretty">
                6+ anos gestionando el ciclo completo de proyectos. 15+ edificios 
                entregados (14,819 m2). Expertise en estructuras especiales, puentes 
                y sistemas de agua potable. Certificado Autodesk BIM y ESRI GIS.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow-green hover:scale-105 transition-all" asChild>
                <a href="#projects">
                  Ver Mis Proyectos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 bg-transparent" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Contactar
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: "6+", label: "Anos Exp." },
                { value: "15+", label: "Edificios" },
                { value: "$4.8M", label: "En Proyectos" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary text-glow">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl" />

              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-primary/20 glow-green">
                <Image
                  src="/images/henrry-lojan.jpg"
                  alt="Henrry Lojan - Ingeniero Civil"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 z-20 bg-card border border-primary/30 rounded-xl p-3 shadow-lg animate-float glow-green-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">BIM</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">Autodesk Pro</span>
                </div>
              </div>

              <div className="absolute -right-4 top-1/2 z-20 bg-card border border-primary/30 rounded-xl p-3 shadow-lg animate-float delay-200 glow-green-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-sm font-bold">GIS</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">ESRI Specialist</span>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 z-20 bg-card border border-primary/30 rounded-xl p-3 shadow-lg animate-float delay-400 glow-green-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">M.Sc</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">Geomatica</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
