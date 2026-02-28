"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, ChevronDown, Github, Linkedin, Download, MapPin } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/henrry-lojan-tenesaca-83b7a3227/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Henrry-Lojan", label: "GitHub" },
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 items-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-card border border-border hover:border-primary/50 flex items-center justify-center hover:glow-teal-sm transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Loja, Ecuador</span>
              </div>
            </div>

            <div className="space-y-4">
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-sm font-medium border-primary/30 text-primary bg-primary/5 animate-pulse-glow"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Disponible para nuevos proyectos
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Henrry{" "}
                <span className="text-primary text-glow">Lojan</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl">Tenesaca</span>
              </h1>

              <p className="text-xl md:text-2xl text-primary font-semibold">
                Ingeniero Civil | BIM &amp; GIS Specialist
              </p>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed text-pretty">
                6+ años gestionando el ciclo completo de proyectos. 15+ edificios
                entregados (14,819 m²). Expertise en estructuras especiales, puentes
                y sistemas de agua potable. Certificado Autodesk BIM y ESRI GIS.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="glow-teal hover:scale-105 transition-all flex-1 sm:flex-none" asChild>
                <a href="#projects">
                  Ver Proyectos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 hover:border-primary/60 bg-transparent gap-2 flex-1 sm:flex-none" asChild>
                <a href="/henrry-lojan-cv.pdf" download="CV_Henrry_Lojan.pdf">
                  <Download className="w-4 h-4" />
                  Descargar CV
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/5 gap-2 w-full sm:w-auto" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Contactar
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 pt-4 border-t border-border/50">
              {[
                { value: "6+", label: "Años Exp." },
                { value: "15+", label: "Edificios" },
                { value: "14,819", label: "m² Constr." },
                { value: "$4.8M+", label: "En Proyectos" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary text-glow">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
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
              <div className="relative z-10 rounded-2xl overflow-hidden border border-primary/30 glow-teal">
                <Image
                  src="/images/henrry-lojan.jpg"
                  alt="Henrry Lojan Tenesaca - Ingeniero Civil"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover object-top"
                  priority
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/50 to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-sm font-mono text-primary/80">@henrry.lojan</div>
                </div>
              </div>

              {/* Floating badges - hidden on mobile to avoid overflow */}
              <div className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/4 z-20 bg-card border border-primary/30 rounded-xl p-2.5 shadow-lg animate-float glow-teal-sm">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">BIM</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Autodesk</div>
                    <div className="text-xs font-medium text-foreground">Certified Pro</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/3 z-20 bg-card border border-primary/30 rounded-xl p-2.5 shadow-lg animate-float delay-200 glow-teal-sm">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">GIS</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">ESRI</div>
                    <div className="text-xs font-medium text-foreground">Specialist</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -left-2 bottom-1/4 z-20 bg-card border border-purple-500/30 rounded-xl p-2.5 shadow-lg animate-float delay-300 glow-teal-sm">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 text-xs font-bold">M.Sc</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">ESPOL</div>
                    <div className="text-xs font-medium text-foreground">Geomática</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -right-2 bottom-1/4 z-20 bg-card border border-primary/30 rounded-xl p-2.5 shadow-lg animate-float delay-400 glow-teal-sm">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">ACI</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Certificado</div>
                    <div className="text-xs font-medium text-foreground">Obras Civiles</div>
                  </div>
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
