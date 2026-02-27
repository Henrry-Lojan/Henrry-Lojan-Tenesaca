"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Eye,
  Calendar,
  DollarSign,
  Users,
  MapPin,
  ArrowRight,
  Github,
  ExternalLink,
} from "lucide-react"

const categories = [
  "Todos",
  "Edificacion",
  "Geotecnia",
  "Puentes",
  "Open Source",
]

const categoryColors: Record<string, string> = {
  "Edificacion": "bg-primary/10 text-primary border-primary/30",
  "Geotecnia": "bg-accent/10 text-accent border-accent/30",
  "Puentes": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "Open Source": "bg-purple-500/10 text-purple-400 border-purple-500/30",
}

const projects = [
  {
    id: 1,
    title: "Edificio Alarife",
    category: "Edificacion",
    image: "/images/project-building.jpg",
    description:
      "Edificio multifamiliar de 3,034 m2 con cimentaciones especiales mediante caissons de 18m de profundidad.",
    challenge:
      "Condiciones geotecnicas complejas requerian cimentaciones profundas para garantizar estabilidad estructural en suelo de baja capacidad portante.",
    solution:
      "Implementacion de sistema de caissons excavados manualmente hasta 18m de profundidad, con refuerzo estructural y concreto de alta resistencia.",
    specs: {
      area: "3,034 m2",
      budget: "$1.06M",
      duration: "2020",
      team: "Velsa & Cia",
      location: "Loja, Ecuador",
    },
    technologies: ["SAP2000", "ETABS", "Revit", "AutoCAD"],
  },
  {
    id: 2,
    title: "Edificio Bhoga",
    category: "Edificacion",
    image: "/images/project-building.jpg",
    description:
      "Edificio de 1,018 m2 con coordinacion BIM multidisciplinaria completa y deteccion de interferencias.",
    challenge:
      "Coordinar multiples disciplinas (arquitectura, estructuras, MEP) en un espacio reducido minimizando conflictos durante construccion.",
    solution:
      "Implementacion de metodologia BIM con clash detection, reduciendo RFIs en obra y optimizando tiempos de ejecucion en 15%.",
    specs: {
      area: "1,018 m2",
      budget: "$415K",
      duration: "2024",
      team: "Velsa & Cia",
      location: "Loja, Ecuador",
    },
    technologies: ["Revit", "Navisworks", "Civil 3D", "BIM 360"],
  },
  {
    id: 3,
    title: "Muro Anclado - Edificio Bo",
    category: "Geotecnia",
    image: "/images/project-dam.jpg",
    description:
      "Muro de contencion anclado de 12m de altura con sistema de anclajes postensados en condiciones de suelo cohesivo.",
    challenge:
      "Estabilizar excavacion profunda de 12m en zona urbana, garantizando seguridad de estructuras colindantes.",
    solution:
      "Diseno y supervision de muro anclado con sistema de anclajes postensados, monitoreo continuo de deformaciones.",
    specs: {
      height: "12m altura",
      budget: "$32.6K",
      duration: "2020-2021",
      team: "Especializado",
      location: "Loja, Ecuador",
    },
    technologies: ["Plaxis", "GeoStudio", "SAP2000", "AutoCAD"],
  },
  {
    id: 4,
    title: "Puente Rio Condor",
    category: "Puentes",
    image: "/images/project-bridge.jpg",
    description:
      "Control topografico de precision para infraestructura en todas las etapas del Puente Rio Condor.",
    challenge:
      "Mantener precision milimetrica en control geometrico durante todas las fases constructivas del puente.",
    solution:
      "Implementacion de red geodesica GNSS/RTK y metodologia de reseccion multiple con estacion total, incrementando eficiencia operativa en 20%.",
    specs: {
      type: "Puente vehicular",
      budget: "Confidencial",
      duration: "Jun-Ago 2025",
      team: "Consorcio Puentes",
      location: "Francisco de Orellana",
    },
    technologies: ["GNSS/RTK", "Estacion Total", "Civil 3D", "AutoCAD"],
  },
  {
    id: 5,
    title: "Geoportal Predial - Loja",
    category: "Open Source",
    image: "/images/project-highway.jpg",
    description:
      "Geoportal interactivo para consulta catastral con analisis espacial de la ciudad de Loja.",
    challenge:
      "Democratizar acceso a informacion catastral y territorial para ciudadanos y profesionales.",
    solution:
      "Desarrollo de aplicacion web con visualizacion de datos catastrales, busqueda por predios y analisis espacial basico.",
    specs: {
      type: "Web App",
      budget: "Open Source",
      duration: "2025",
      team: "Personal",
      location: "github.com/Henrry-Lojan",
    },
    technologies: ["HTML", "JavaScript", "Leaflet.js", "GeoJSON"],
    github: "https://github.com/Henrry-Lojan",
  },
  {
    id: 6,
    title: "Dashboard Siniestros Viales",
    category: "Open Source",
    image: "/images/project-tunnel.jpg",
    description:
      "Visualizacion geoespacial y analisis estadistico de accidentalidad vial en Ecuador.",
    challenge:
      "Procesar y visualizar grandes volumenes de datos de siniestros viales para identificar patrones y zonas criticas.",
    solution:
      "Dashboard interactivo con mapas de calor, estadisticas temporales y filtros avanzados para analisis de seguridad vial.",
    specs: {
      type: "Dashboard",
      budget: "Open Source",
      duration: "2025",
      team: "Personal",
      location: "github.com/Henrry-Lojan",
    },
    technologies: ["HTML", "JavaScript", "Chart.js", "Leaflet"],
    github: "https://github.com/Henrry-Lojan",
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 mb-4">
            Portafolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground text-lg">
            Una seleccion de proyectos de ingenieria que demuestran innovacion,
            precision y dedicacion a la excelencia.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full ${
                activeCategory === category 
                  ? "glow-green-sm" 
                  : "border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer card-hover"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <Badge className={`absolute top-4 left-4 ${categoryColors[project.category] || "bg-primary/10 text-primary"}`}>
                  {project.category}
                </Badge>

                {/* Quick View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center glow-green">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  Ver Detalles
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-primary/20">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={categoryColors[selectedProject.category] || "bg-primary/10 text-primary"}>
                      {selectedProject.category}
                    </Badge>
                  </div>
                  <DialogTitle className="text-2xl text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Project Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden my-4 border border-primary/20">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Specs */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-6">
                  {[
                    {
                      icon: MapPin,
                      label: "Ubicacion",
                      value: selectedProject.specs.location,
                    },
                    {
                      icon: DollarSign,
                      label: "Presupuesto",
                      value: selectedProject.specs.budget,
                    },
                    {
                      icon: Calendar,
                      label: "Periodo",
                      value: selectedProject.specs.duration,
                    },
                    {
                      icon: Users,
                      label: "Equipo",
                      value: selectedProject.specs.team,
                    },
                    {
                      icon: MapPin,
                      label: "Escala",
                      value:
                        selectedProject.specs.area ||
                        selectedProject.specs.height ||
                        selectedProject.specs.type,
                    },
                  ]
                    .filter((spec) => spec.value)
                    .map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-secondary/50 border border-border rounded-lg p-3 text-center"
                      >
                        <spec.icon className="w-5 h-5 mx-auto text-primary mb-1" />
                        <div className="text-xs text-muted-foreground">
                          {spec.label}
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="space-y-2 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                    <h4 className="font-semibold text-foreground">Desafio</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="space-y-2 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-semibold text-foreground">Solucion</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-full border-primary/30 text-primary bg-primary/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* GitHub Link for Open Source projects */}
                {selectedProject.github && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Ver en GitHub
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
