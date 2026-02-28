"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Clock,
  Award,
  MapPin,
  HardHat,
  Ruler,
  Compass,
  Calculator,
  Download,
  FileText,
  ChevronRight,
} from "lucide-react"

const stats = [
  { icon: Building2, value: "15+", label: "Edificios Entregados" },
  { icon: Clock, value: "6+", label: "Años de Experiencia" },
  { icon: Award, value: "14,819", label: "m² Construidos" },
  { icon: MapPin, value: "$4.8M+", label: "En Proyectos" },
]

const skillBadges = [
  { icon: HardHat, label: "Obras Civiles" },
  { icon: Ruler, label: "Estructural" },
  { icon: Compass, label: "BIM & SIG" },
  { icon: Calculator, label: "Geomática" },
]

const keyFacts = [
  { label: "Cédula", value: "1104408613" },
  { label: "Lugar Nacimiento", value: "Catamayo, Loja" },
  { label: "SENESCYT", value: "1031-2018-2021611" },
  { label: "GAD Loja", value: "Reg. 3089" },
  { label: "GAD Catamayo", value: "Reg. 6022" },
  { label: "Disponibilidad", value: "Inmediata" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 mb-4">
            Acerca de Mí
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Construyendo el Futuro, Un Proyecto a la Vez
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-primary/20 glow-teal">
                <Image
                  src="/images/henrry-lojan.jpg"
                  alt="Henrry Lojan Tenesaca - Ingeniero Civil"
                  width={500}
                  height={625}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating skill badges - hidden on mobile */}
              {skillBadges.map((skill, index) => (
                <div
                  key={skill.label}
                  className={`hidden sm:flex absolute z-20 bg-card border border-primary/30 rounded-full px-3 py-1.5 shadow-lg animate-float glow-teal-sm ${index === 0
                    ? "-top-4 left-1/4"
                    : index === 1
                      ? "top-1/4 -right-4"
                      : index === 2
                        ? "bottom-1/3 -left-4"
                        : "-bottom-4 right-1/4"
                    }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-1.5">
                    <skill.icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground">
                      {skill.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -z-10" />
            </div>

            {/* Key Facts card below image */}
            <div className="mt-8 mx-auto max-w-md lg:max-w-none">
              <Card className="bg-card/50 backdrop-blur border-border">
                <CardContent className="p-5">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5" />
                    Datos Profesionales
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {keyFacts.map((fact) => (
                      <div key={fact.label} className="flex flex-col">
                        <span className="text-xs text-muted-foreground">{fact.label}</span>
                        <span className="text-sm font-medium text-foreground">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Henrry Guillermo Lojan Tenesaca
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                  Ing. Civil - UTPL (2018)
                </Badge>
                <Badge className="bg-accent/10 text-accent border-accent/30 hover:bg-accent/20">
                  M.Sc. Geomática - ESPOL (2024-2026)
                </Badge>
                <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30 hover:bg-purple-500/20">
                  Diplomado BIM Manager - UTPL (2023)
                </Badge>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="border-l-2 border-primary pl-4 italic text-foreground">
                &ldquo;Transformando desafíos de ingeniería complejos en soluciones elegantes, sostenibles y respaldadas por datos geoespaciales.&rdquo;
              </p>
              <p>
                Ingeniero Civil con{" "}
                <span className="text-foreground font-medium">6+ años de experiencia</span>{" "}
                gestionando el ciclo completo de proyectos. He entregado 15+ edificios
                multifamiliares (14,819 m² construcción) con reducción de desviaciones
                presupuestarias al 15%.
              </p>
              <p>
                Experiencia en{" "}
                <span className="text-primary font-medium">estructuras especiales</span>{" "}
                (pilotes 13m, muros anclados 12m, caisson 8m–18m), puentes y sistemas
                de agua potable y alcantarillado. Actualmente expandiendo capacidades
                hacia{" "}
                <span className="text-primary font-medium">geomática avanzada</span>{" "}
                y ciencia de datos aplicada a ingeniería civil.
              </p>
              <p>
                Manejo herramientas como{" "}
                <span className="text-primary font-medium">SAP2000</span>,{" "}
                <span className="text-primary font-medium">ETABS</span>,{" "}
                <span className="text-primary font-medium">Revit</span>,{" "}
                <span className="text-primary font-medium">Civil 3D</span>,{" "}
                <span className="text-primary font-medium">ArcGIS Pro</span> y{" "}
                <span className="text-primary font-medium">Python</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all card-hover"
                >
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                    <div className="text-xl md:text-2xl font-bold text-primary text-glow">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="glow-teal hover:scale-105 transition-all" asChild>
                <a href="#experience">
                  Ver Experiencia
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10 gap-2" asChild>
                <a href="/henrry-lojan-cv.pdf" download="CV_Henrry_Lojan.pdf">
                  <Download className="w-4 h-4" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
