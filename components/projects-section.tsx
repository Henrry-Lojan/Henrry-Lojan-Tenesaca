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
  ExternalLink,
  Play,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  Images,
  Globe,
} from "lucide-react"
import { imgPath } from "@/lib/img-path"

const categories = [
  "Todos",
  "Edificacion",
  "Geotecnia",
  "Puentes",
  "GIS & Geomática",
]

const categoryColors: Record<string, string> = {
  "Edificacion": "bg-primary/10 text-primary border-primary/30",
  "Geotecnia": "bg-accent/10 text-accent border-accent/30",
  "Puentes": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "GIS & Geomática": "bg-green-500/10 text-green-400 border-green-500/30",
}

type MediaItem = {
  src: string
  type: "image" | "video"
  caption: string
}

const projects = [
  // ── 1. ALARIFE ─────────────────────────────────────────────
  {
    id: 1,
    title: "Edificio Alarife",
    category: "Edificacion",
    image: "/images/project-alarife.jpg",
    description:
      "Edificio multifamiliar de 3,034 m² con cimentaciones especiales mediante caissons de 18 m de profundidad.",
    challenge:
      "Condiciones geotécnicas complejas requerían cimentaciones profundas para garantizar estabilidad estructural en suelo de baja capacidad portante.",
    solution:
      "Implementación de sistema de caissons excavados manualmente hasta 18 m de profundidad, con refuerzo estructural y concreto de alta resistencia.",
    specs: {
      area: "3,034 m²",
      budget: "$1.06 M",
      duration: "2020",
      team: "Velsa & Cía",
      location: "Loja, Ecuador",
    },
    technologies: ["SAP2000", "ETABS", "Revit", "AutoCAD"],
    driveUrl: "https://drive.google.com/drive/folders/1Hq5pBRB25M878g8HC9M-N2TpjhxTusVG?usp=sharing",
    media: [] as MediaItem[],
  },

  // ── 2. BHOGA ───────────────────────────────────────────────
  {
    id: 2,
    title: "Edificio Bhoga",
    category: "Edificacion",
    image: "/images/project-building.jpg",
    description:
      "Edificio de 1,018 m² con coordinación BIM multidisciplinaria completa y detección de interferencias.",
    challenge:
      "Coordinar múltiples disciplinas (arquitectura, estructuras, MEP) en un espacio reducido minimizando conflictos durante construcción.",
    solution:
      "Implementación de metodología BIM con clash detection, reduciendo RFIs en obra y optimizando tiempos de ejecución en 15 %.",
    specs: {
      area: "1,018 m²",
      budget: "$415 K",
      duration: "2024",
      team: "Velsa & Cía",
      location: "Loja, Ecuador",
    },
    technologies: ["Revit", "Navisworks", "Civil 3D", "BIM 360"],
    driveUrl: "https://drive.google.com/drive/folders/13LBFTVVrxIauCCO1GCEOKjMB7slD7lDw?usp=drive_link",
    media: [] as MediaItem[],
  },

  // ── 3. BO (Muro Anclado) ───────────────────────────────────
  {
    id: 3,
    title: "Edificio Bo",
    category: "Geotecnia",
    image: "/images/project-dam.jpg",
    description:
      "Muro de contención anclado de 12 m de altura con sistema de anclajes postensados en condiciones de suelo cohesivo.",
    challenge:
      "Estabilizar excavación profunda de 12 m en zona urbana, garantizando seguridad de estructuras colindantes.",
    solution:
      "Diseño y supervisión de muro anclado con sistema de anclajes postensados, monitoreo continuo de deformaciones.",
    specs: {
      height: "12 m altura",
      budget: "$32.6 K",
      duration: "2020–2021",
      team: "Especializado",
      location: "Loja, Ecuador",
    },
    technologies: ["Plaxis", "GeoStudio", "SAP2000", "AutoCAD"],
    driveUrl: "https://drive.google.com/drive/folders/1uMzlIohlsIlDoTC2KaMPmmccrdviGUde?usp=drive_link",
    media: [] as MediaItem[],
  },

  // ── 4. BODAI ──────────────────────────────────────────────
  {
    id: 4,
    title: "Edificio Bodai",
    category: "Edificacion",
    image: "/images/project-building.jpg",
    description:
      "Proyecto de edificación residencial con control BIM integral y supervisión técnica de obra en todas las fases constructivas.",
    challenge:
      "Garantizar la calidad constructiva y el cumplimiento de especificaciones técnicas en cada etapa de la obra.",
    solution:
      "Implementación de protocolo de control de calidad y supervisión técnica permanente con metodología BIM.",
    specs: {
      type: "Edificio residencial",
      budget: "Confidencial",
      duration: "2023",
      team: "Velsa & Cía",
      location: "Loja, Ecuador",
    },
    technologies: ["Revit", "AutoCAD", "SAP2000", "BIM 360"],
    driveUrl: "https://drive.google.com/drive/folders/11JoFARFeTOqyaTg8zeP7AizDfGi-WAf2?usp=sharing",
    media: [] as MediaItem[],
  },

  // ── 5. KHANDA ─────────────────────────────────────────────
  {
    id: 5,
    title: "Edificio Khanda",
    category: "Edificacion",
    image: "/images/project-building.jpg",
    description:
      "Proyecto de edificación con diseño estructural avanzado y control topográfico de precisión durante todas las etapas de construcción.",
    challenge:
      "Coordinar el control geométrico y estructural en un proyecto de alta complejidad técnica.",
    solution:
      "Aplicación de control topográfico GNSS/RTK y modelado BIM para garantizar la precisión constructiva.",
    specs: {
      type: "Edificio",
      budget: "Confidencial",
      duration: "2024",
      team: "Especializado",
      location: "Loja, Ecuador",
    },
    technologies: ["GNSS/RTK", "Estación Total", "Revit", "AutoCAD"],
    driveUrl: "https://drive.google.com/drive/folders/1t60nzQTPyyAm1Y5bSzDLS6EaiC45r7vd?usp=drive_link",
    media: [] as MediaItem[],
  },

  // ── 6. KALA ───────────────────────────────────────────────
  {
    id: 6,
    title: "Edificio Kala",
    category: "Edificacion",
    image: "/images/project-building.jpg",
    description:
      "Proyecto de edificación con supervisión técnica integral, control de calidad y replanteo topográfico de precisión.",
    challenge:
      "Mantener la precisión geométrica y el estándar constructivo en cada fase del proyecto.",
    solution:
      "Control topográfico continuo con estación total y aplicación de metodología BIM para coordinación de obra.",
    specs: {
      type: "Edificio",
      budget: "Confidencial",
      duration: "2024–2025",
      team: "Consorcio Kala",
      location: "Loja, Ecuador",
    },
    technologies: ["Estación Total", "Revit", "AutoCAD", "Civil 3D"],
    driveUrl: "https://drive.google.com/drive/folders/1qXIcv27yNs5AeotFihIjp1Yl7aYwIw5h?usp=drive_link",
    media: [] as MediaItem[],
  },

  // ── 7. VALDIVIA (ArcGIS StoryMap) ─────────────────────────
  {
    id: 7,
    title: "Proyecto Valdivia",
    category: "GIS & Geomática",
    image: "/images/project-highway.jpg",
    description:
      "Análisis geoespacial y cartografía interactiva del Proyecto Valdivia, publicado como ArcGIS StoryMap con visualización de datos territoriales.",
    challenge:
      "Comunicar de manera efectiva el análisis territorial y los resultados geoespaciales a audiencias técnicas y no técnicas.",
    solution:
      "Desarrollo de StoryMap interactivo con ArcGIS, integrando capas de análisis espacial, mapas temáticos y narrativa visual del territorio.",
    specs: {
      type: "StoryMap / GIS",
      budget: "Investigación",
      duration: "2025",
      team: "Personal",
      location: "Ecuador",
    },
    technologies: ["ArcGIS Pro", "ArcGIS StoryMaps", "QGIS", "Python"],
    storyMapUrl: "https://storymaps.arcgis.com/stories/2c738911ae1e413eaa56efe1b70f2e8d",
    media: [] as MediaItem[],
  },

  // ── 8. PUENTE RÍO CÓNDOR ──────────────────────────────────
  {
    id: 8,
    title: "Puente Río Cóndor",
    category: "Puentes",
    image: "/images/gallery/visita-obra-puente-1.jpg",
    description:
      "Control topográfico de precisión para infraestructura en todas las etapas del Puente Río Cóndor. Registro completo de campo, replanteo y supervisión de obra.",
    challenge:
      "Mantener precisión milimétrica en control geométrico durante todas las fases constructivas del puente en zona de selva amazónica.",
    solution:
      "Implementación de red geodésica GNSS/RTK y metodología de resección múltiple con estación total, incrementando eficiencia operativa en 20 %.",
    specs: {
      type: "Puente vehicular",
      budget: "Confidencial",
      duration: "Jun–Ago 2025",
      team: "Consorcio Puentes",
      location: "Francisco de Orellana",
    },
    technologies: ["GNSS/RTK", "Estación Total", "Civil 3D", "AutoCAD"],
    media: [
      { src: "/images/gallery/video-puente-condor-1.mp4", type: "video" as const, caption: "Video de obra – Puente Río Cóndor" },
      { src: "/images/gallery/video-puente-condor-2.mp4", type: "video" as const, caption: "Video de campo – Puente Río Cóndor" },
      { src: "/images/gallery/visita-obra-puente-1.jpg", type: "image" as const, caption: "Visita de obra – Puente Río Cóndor" },
      { src: "/images/gallery/visita-obra-puente-2.jpg", type: "image" as const, caption: "Control topográfico – Puente Río Cóndor" },
      { src: "/images/gallery/visita-obra-campo-1.jpg", type: "image" as const, caption: "Trabajo de campo en zona del puente" },
      { src: "/images/gallery/visita-obra-campo-2.jpg", type: "image" as const, caption: "Equipo en campo – Puente Río Cóndor" },
      { src: "/images/gallery/visita-obra-campo-3.jpg", type: "image" as const, caption: "Inspección de obra" },
      { src: "/images/gallery/visita-obra-campo-4.jpg", type: "image" as const, caption: "Replanteo topográfico" },
    ],
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
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
            Selección de proyectos de ingeniería civil, geotecnia, geomática y análisis geoespacial.
          </p>
        </div>

        {/* Filtros */}
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

        {/* Grid */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge categoría */}
                <Badge className={`absolute top-4 left-4 ${categoryColors[project.category] || "bg-primary/10 text-primary"}`}>
                  {project.category}
                </Badge>

                {/* Indicador multimedia */}
                {"media" in project && project.media.length > 0 && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    <Play className="w-3 h-3" />
                    <span>{project.media.filter((m) => m.type === "video").length}v · {project.media.filter((m) => m.type === "image").length}f</span>
                  </div>
                )}

                {/* Indicador StoryMap */}
                {"storyMapUrl" in project && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-500/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    <Globe className="w-3 h-3" />
                    <span>StoryMap</span>
                  </div>
                )}

                {/* Indicador Drive */}
                {"driveUrl" in project && !("storyMapUrl" in project) && project.media.length === 0 && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-blue-500/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    <FolderOpen className="w-3 h-3" />
                    <span>Drive</span>
                  </div>
                )}

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

        {/* ── Modal ── */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
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

                {/* ── Galería multimedia (Puente Río Cóndor) ── */}
                {selectedProject.media.length > 0 && currentMediaItem ? (
                  <div className="my-4 space-y-3">
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

                      <div className="absolute top-3 left-3">
                        <Badge className={currentMediaItem.type === "video"
                          ? "bg-accent/80 text-white border-0"
                          : "bg-primary/80 text-white border-0"}>
                          {currentMediaItem.type === "video" ? "▶ Video" : "📷 Foto"}
                        </Badge>
                      </div>

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

                    <p className="text-sm text-center text-muted-foreground italic">
                      {currentMediaItem.caption}
                    </p>

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
                  /* Imagen estática */
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

                {/* Specs */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-6">
                  {[
                    { icon: MapPin, label: "Ubicación", value: selectedProject.specs.location },
                    { icon: DollarSign, label: "Presupuesto", value: selectedProject.specs.budget },
                    { icon: Calendar, label: "Período", value: selectedProject.specs.duration },
                    { icon: Users, label: "Equipo", value: selectedProject.specs.team },
                    {
                      icon: MapPin, label: "Escala", value:
                        (selectedProject.specs as any).area ||
                        (selectedProject.specs as any).height ||
                        (selectedProject.specs as any).type
                    },
                  ]
                    .filter((s) => s.value)
                    .map((s) => (
                      <div key={s.label} className="bg-secondary/50 border border-border rounded-lg p-3 text-center">
                        <s.icon className="w-5 h-5 mx-auto text-primary mb-1" />
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                        <div className="text-sm font-semibold text-foreground">{s.value}</div>
                      </div>
                    ))}
                </div>

                {/* Desafío & Solución */}
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="space-y-2 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                    <h4 className="font-semibold text-foreground">Desafío</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.challenge}</p>
                  </div>
                  <div className="space-y-2 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-semibold text-foreground">Solución</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Tecnologías */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Tecnologías Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="rounded-full border-primary/30 text-primary bg-primary/5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* ── Botón Google Drive ── */}
                {"driveUrl" in selectedProject && (selectedProject as any).driveUrl && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href={(selectedProject as any).driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-primary/5 to-green-500/10 hover:from-blue-500/20 hover:via-primary/10 hover:to-green-500/20 hover:border-blue-400/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FolderOpen className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                          Ver Álbum Completo de Fotos
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                          <Images className="w-3 h-3" />
                          Todas las fotos y videos en Google Drive
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-blue-400/70 group-hover:text-blue-400 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}

                {/* ── Botón ArcGIS StoryMap ── */}
                {"storyMapUrl" in selectedProject && (selectedProject as any).storyMapUrl && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href={(selectedProject as any).storyMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl border border-green-500/30 bg-gradient-to-r from-green-500/10 via-primary/5 to-teal-500/10 hover:from-green-500/20 hover:via-primary/10 hover:to-teal-500/20 hover:border-green-400/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Globe className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground group-hover:text-green-400 transition-colors">
                          Ver StoryMap Interactivo
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          Análisis geoespacial en ArcGIS StoryMaps
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-green-400/70 group-hover:text-green-400 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
