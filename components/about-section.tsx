"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Clock,
  Award,
  MapPin,
  HardHat,
  Ruler,
  Compass,
  Calculator,
} from "lucide-react"

const stats = [
  { icon: Building2, value: "15+", label: "Edificios Entregados" },
  { icon: Clock, value: "6+", label: "Anos de Experiencia" },
  { icon: Award, value: "14,819", label: "m2 Construidos" },
  { icon: MapPin, value: "$4.8M+", label: "En Proyectos" },
]

const skillBadges = [
  { icon: HardHat, label: "Obras Civiles" },
  { icon: Ruler, label: "Estructural" },
  { icon: Compass, label: "BIM & SIG" },
  { icon: Calculator, label: "Geomatica" },
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
            Acerca de Mi
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Construyendo el Futuro, Un Proyecto a la Vez
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-primary/20 glow-green">
                <Image
                  src="/images/henrry-lojan.jpg"
                  alt="Henrry Lojan - Ingeniero Civil"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating skill badges */}
              {skillBadges.map((skill, index) => (
                <div
                  key={skill.label}
                  className={`absolute z-20 bg-card border border-primary/30 rounded-full px-4 py-2 shadow-lg animate-float glow-green-sm ${
                    index === 0
                      ? "-top-4 left-1/4"
                      : index === 1
                        ? "top-1/4 -right-4"
                        : index === 2
                          ? "bottom-1/4 -left-4"
                          : "-bottom-4 right-1/4"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {skill.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -z-10" />
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
                  Ing. Civil - UTPL
                </Badge>
                <Badge className="bg-accent/10 text-accent border-accent/30 hover:bg-accent/20">
                  M.Sc Geomatica - ESPOL
                </Badge>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="border-l-2 border-primary pl-4 italic text-foreground">
                &ldquo;Transformando desafios de ingenieria complejos en soluciones elegantes y sostenibles.&rdquo;
              </p>
              <p>
                Ingeniero Civil con 6+ anos de experiencia gestionando el ciclo completo de proyectos. 
                He entregado 15+ edificios multifamiliares (14,819 m2 construccion) con reduccion de 
                desviaciones presupuestarias al 15%.
              </p>
              <p>
                Experiencia en estructuras especiales (pilotes 13m, muros anclados 12m, caisson 8m), 
                puentes y sistemas de agua potable y alcantarillado. Actualmente expandiendo 
                capacidades hacia geomatica avanzada y ciencia de datos aplicada a ingenieria civil.
              </p>
              <p>
                Manejo herramientas como <span className="text-primary font-medium">SAP2000</span>,{" "}
                <span className="text-primary font-medium">ETABS</span>,{" "}
                <span className="text-primary font-medium">Revit</span>,{" "}
                <span className="text-primary font-medium">Civil 3D</span>,{" "}
                <span className="text-primary font-medium">ArcGIS Pro</span> y{" "}
                <span className="text-primary font-medium">Python</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all card-hover"
                >
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                    <div className="text-2xl font-bold text-primary text-glow">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
