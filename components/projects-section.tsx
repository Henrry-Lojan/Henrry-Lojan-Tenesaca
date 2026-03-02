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
  Play,
  ChevronLeft,
  ChevronRight,
  X,
  FolderOpen,
  Images,
} from "lucide-react"
import { imgPath } from "@/lib/img-path"

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

// media item type for the Puente Río Condor gallery
type MediaItem = {
  src: string
  type: "image" | "video"
  caption: string
}

const projects = [
  {
    id: 1,
    title: "Edificio Alarife",
    category: "Edificacion",
    image: "/images/project-alarife.jpg",
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
    driveUrl: "https://drive.google.com/drive/folders/1Hq5pBRB25M878g8HC9M-N2TpjhxTusVG?usp=sharing",
    media: [] as MediaItem[],
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
    media: [] as MediaItem[],
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
    media: [] as MediaItem[],
  },
  {
    id: 4,
    title: "Puente Rio Condor",
    category: "Puentes",
    image: "/images/gallery/visita-obra-puente-1.jpg",
    description:
      "Control topografico de precision para infraestructura en todas las etapas del Puente Rio Condor. Registro completo de campo, replanteo y supervision de obra.",
    challenge:
      "Mantener precision milimetrica en control geometrico durante todas las fases constructivas del puente en zona de selva amazónica.",
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
    // Videos y fotos reales del Puente Río Condor
    media: [
      { src: "/images/gallery/video-puente-condor-1.mp4", type: "video" as const, caption: "Video de obra – Puente Río Condor" },
      { src: "/images/gallery/video-puente-condor-2.mp4", type: "video" as const, caption: "Video de campo – Puente Río Condor" },
      { src: "/images/gallery/visita-obra-puente-1.jpg", type: "image" as const, caption: "Visita de obra – Puente Río Condor" },
      { src: "/images/gallery/visita-obra-puente-2.jpg", type: "image" as const, caption: "Control topográfico – Puente Río Condor" },
      { src: "/images/gallery/visita-obra-campo-1.jpg", type: "image" as const, caption: "Trabajo de campo en zona del puente" },
      { src: "/images/gallery/visita-obra-campo-2.jpg", type: "image" as const, caption: "Equipo en campo – Puente Río Condor" },
      { src: "/images/gallery/visita-obra-campo-3.jpg", type: "image" as const, caption: "Inspección de obra" },
      { src: "/images/gallery/visita-obra-campo-4.jpg", type: "image" as const, caption: "Replanteo topográfico" },
    ],
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
    media: [] as MediaItem[],
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
    media: [] as MediaItem[],
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)
  const [mediaIndex, setMediaIndex] = useState(0)

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setMediaIndex(0)
  }

  const currentMediaItem =
    selectedProject && selectedProject.media.length > 0
      ? selectedProject.media[mediaIndex]
      : null

  const prevMedia = () =>
    setMediaIndex((i) =>
      selectedProject ? (i - 1 + selectedProject.media.length) % selectedProject.media.length : 0
    )
  const nextMedia = () =>
    setMediaIndex((i) =>
      selectedProject ? (i + 1) % selectedProject.media.length : 0
    )

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
              className={`rounded-full ${activeCategory === category
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
              onClick={() => openProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={imgPath(project.image) || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <Badge className={`absolute top-4 left-4 ${categoryColors[project.category] || "bg-primary/10 text-primary"}`}>
                  {project.category}
                </Badge>

                {/* Media count badge */}
                {project.media.length > 0 && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    <Play className="w-3 h-3" />
                    <span>{project.media.filter(m => m.type === "video").length} videos · {project.media.filter(m => m.type === "image").length} fotos</span>
                  </div>
                )}

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

                {/* ── Media Gallery (si tiene media real) ── */}
                {selectedProject.media.length > 0 && currentMediaItem ? (
                  <div className="my-4 space-y-3">
                    {/* Visor principal */}
                    <div className="relative rounded-xl overflow-hidden border border-primary/20 bg-black">
                      {currentMediaItem.type === "video" ? (
                        <video
                          key={currentMediaItem.src}
                          src={imgPath(currentMediaItem.src)}
                          controls
                          autoPlay
                          className="w-full max-h-[50vh] object-contain"
                          style={{ background: "#000" }}
                        />
                      ) : (
                        <div className="relative w-full aspect-video">
                          <Image
                            src={imgPath(currentMediaItem.src)}
                            alt={currentMediaItem.caption}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}

                      {/* Tipo de media */}
                      <div className="absolute top-3 left-3">
                        <Badge className={currentMediaItem.type === "video"
                          ? "bg-accent/80 text-white border-0"
                          : "bg-primary/80 text-white border-0"
                        }>
                          {currentMediaItem.type === "video" ? "▶ Video" : "📷 Foto"}
                        </Badge>
                      </div>

                      {/* Navegación */}
                      {selectedProject.media.length > 1 && (
                        <>
                          <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all"
                            onClick={prevMedia}
                          >
                            <ChevronLeft className="w-5 h-5 text-white" />
                          </button>
                          <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all"
                            onClick={nextMedia}
                          >
                            <ChevronRight className="w-5 h-5 text-white" />
                          </button>
                          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                            {mediaIndex + 1} / {selectedProject.media.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Caption */}
                    <p className="text-sm text-center text-muted-foreground italic">
                      {currentMediaItem.caption}
                    </p>

                    {/* Thumbnails strip */}
                    {selectedProject.media.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {selectedProject.media.map((m, i) => (
                          <button
                            key={i}
                            onClick={() => setMediaIndex(i)}
                            className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${i === mediaIndex
                              ? "border-primary glow-teal-sm"
                              : "border-border hover:border-primary/50"
                              }`}
                          >
                            {m.type === "video" ? (
                              <div className="w-full h-full bg-black/80 flex items-center justify-center">
                                <Play className="w-5 h-5 text-accent" />
                              </div>
                            ) : (
                              <Image
                                src={imgPath(m.src)}
                                alt={m.caption}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Imagen estática si no hay media */
                  <div className="relative aspect-video rounded-lg overflow-hidden my-4 border border-primary/20">
                    <Image
                      src={imgPath(selectedProject.image) || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}

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
                        (selectedProject.specs as any).area ||
                        (selectedProject.specs as any).height ||
                        (selectedProject.specs as any).type,
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

                {/* Google Drive Album – banner llamativo */}
                {"driveUrl" in selectedProject && selectedProject.driveUrl && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href={(selectedProject as any).driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-primary/5 to-green-500/10 hover:from-blue-500/20 hover:via-primary/10 hover:to-green-500/20 hover:border-blue-400/50 transition-all duration-300"
                    >
                      {/* Ícono Drive */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FolderOpen className="w-6 h-6 text-blue-400" />
                      </div>

                      {/* Texto */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                          Ver Álbum Completo de Fotos
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                          <Images className="w-3 h-3" />
                          Todas las fotos y videos en Google Drive
                        </p>
                      </div>

                      {/* Flecha */}
                      <ExternalLink className="w-4 h-4 text-blue-400/70 group-hover:text-blue-400 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}

                {/* GitHub Link for Open Source projects */}
                {"github" in selectedProject && selectedProject.github && (
                  <div className="mt-4">
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
