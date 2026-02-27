"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Monitor,
  Cog,
  Users,
  Ruler,
  Building2,
  Layers,
  FileSpreadsheet,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Clock,
  HandshakeIcon,
  Database,
  Globe,
  Code,
} from "lucide-react"

const softwareSkills = [
  { name: "SAP2000 / ETABS / Safe", proficiency: 90, icon: Building2 },
  { name: "Revit / Civil 3D / AutoCAD", proficiency: 95, icon: Ruler },
  { name: "ArcGIS Pro / QGIS", proficiency: 85, icon: Globe },
  { name: "Python (Pandas, NumPy)", proficiency: 80, icon: Code },
  { name: "PostgreSQL / PostGIS", proficiency: 75, icon: Database },
]

const technicalSkills = [
  { name: "Analisis Estructural", icon: Building2 },
  { name: "Diseno Estructural", icon: Layers },
  { name: "Metodologias BIM", icon: Cog },
  { name: "SIG y Geomatica", icon: Globe },
  { name: "Gestion de Proyectos", icon: FileSpreadsheet },
  { name: "Topografia de Precision", icon: BarChart3 },
]

const softSkills = [
  { name: "Liderazgo de Equipos", icon: Users },
  { name: "Resolucion de Problemas", icon: Lightbulb },
  { name: "Coordinacion Multidisciplinaria", icon: HandshakeIcon },
  { name: "Mejora Continua", icon: Clock },
  { name: "Comunicacion Tecnica", icon: MessageSquare },
  { name: "Analisis Bajo Presion", icon: Lightbulb },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 mb-4">
            Experiencia
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Habilidades y Competencias
          </h2>
          <p className="text-muted-foreground text-lg">
            Un conjunto completo de experiencia tecnica y habilidades profesionales
            perfeccionadas a traves de anos de experiencia en la industria.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Software & Tools */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all card-hover">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">
                Software y Herramientas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {softwareSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-primary font-mono">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2 bg-secondary" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Technical Expertise */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all card-hover">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-xl text-foreground">
                Experiencia Tecnica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all card-hover">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">
                Competencias Clave
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="flex items-center gap-1.5 px-3 py-1.5 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default"
                  >
                    <skill.icon className="w-3.5 h-3.5 text-primary" />
                    {skill.name}
                  </Badge>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  Fuertes habilidades interpersonales desarrolladas coordinando equipos
                  multidisciplinarios de arquitectura, estructuras e instalaciones MEP,
                  optimizando tiempos en 15%.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Skills Row */}
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {[
            { label: "Idiomas", value: "Espanol (Nativo), Ingles (Intermedio - Lectura tecnica)" },
            { label: "Metodologias", value: "BIM Manager, Lean Construction, Control de Calidad" },
            { label: "Software Adicional", value: "Tekla, CypeCAD, MATLAB, MS Project, Obras 6.0" },
            { label: "Especializaciones", value: "Estructuras Especiales, Pilotes, Muros Anclados, Caissons" },
          ].map((item) => (
            <Card
              key={item.label}
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all card-hover"
            >
              <CardContent className="p-4">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 font-mono">
                  {item.label}
                </div>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
