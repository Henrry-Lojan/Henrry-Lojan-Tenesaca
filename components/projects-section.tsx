"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import {
  ArrowRight,
  ExternalLink,
  Play,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  Images,
  Globe,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Zap,
  Target,
  X,
} from "lucide-react"
import { imgPath } from "@/lib/img-path"

const categories = ["Todos", "Edificacion", "Geotecnia", "Puentes", "GIS & Geomática"]

const categoryColors: Record<string, { badge: string; accent: string; glow: string }> = {
  "Edificacion": { badge: "bg-teal-500/20 text-teal-300 border-teal-500/40", accent: "#14b8a6", glow: "from-teal-500/30" },
  "Geotecnia": { badge: "bg-amber-500/20 text-amber-300 border-amber-500/40", accent: "#f59e0b", glow: "from-amber-500/30" },
  "Puentes": { badge: "bg-blue-500/20 text-blue-300 border-blue-500/40", accent: "#3b82f6", glow: "from-blue-500/30" },
  "GIS & Geomática": { badge: "bg-green-500/20 text-green-300 border-green-500/40", accent: "#22c55e", glow: "from-green-500/30" },
}

type MediaItem = { src: string; type: "image" | "video"; caption: string }

const projects = [
  {
    id: 1,
    title: "Edificio Alarife",
    category: "Edificacion",
    image: "/images/project-alarife.jpg",
    description: "Edificio multifamiliar de 3,034 m² con cimentaciones especiales mediante caissons de 18 m de profundidad.",
    challenge: "Condiciones geotécnicas complejas requerían cimentaciones profundas para garantizar estabilidad estructural en suelo de baja capacidad portante.",
    solution: "Implementación de caissons excavados manualmente hasta 18 m de profundidad, con refuerzo estructural y concreto de alta resistencia.",
    specs: { area: "3,034 m²", budget: "$1.06 M", duration: "2020", team: "Velsa & Cía", location: "Loja, Ecuador" },
    technologies: ["SAP2000", "ETABS", "Revit", "AutoCAD"],
    driveUrl: "https://drive.google.com/drive/folders/1Hq5pBRB25M878g8HC9M-N2TpjhxTusVG?usp=sharing",
    media: [] as MediaItem[],
  },
  {
    id: 2,
    title: "Edificio Bhoga",
    category: "Edificacion",
    image: "/images/project-building.jpg",
    description: "Edificio de 1,018 m² con coordinación BIM multidisciplinaria completa y detección de interferencias.",
    challenge: "Coordinar múltiples disciplinas (arquitectura, estructuras, MEP) en espacio reducido minimizando conflictos durante construcción.",
    solution: "Metodología BIM con clash detection, reduciendo RFIs en obra y optimizando tiempos de ejecución en 15 %.",
    specs: { area: "1,018 m²", budget: "$415 K", duration: "2024", team: "Velsa & Cía", location: "Loja, Ecuador" },
    technologies: ["Revit", "Navisworks", "Civil 3D", "BIM 360"],
    driveUrl: "https://drive.google.com/drive/folders/13LBFTVVrxIauCCO1GCEOKjMB7slD7lDw?usp=drive_link",
    media: [] as MediaItem[],
  },
  {
    id: 3,
    title: "Edificio Bo",
    category: "Geotecnia",
    image: "/images/project-dam.jpg",
    description: "Muro de contención anclado de 12 m de altura con sistema de anclajes postensados en suelo cohesivo.",
    challenge: "Estabilizar excavación profunda de 12 m en zona urbana, garantizando seguridad de estructuras colindantes.",
    solution: "Muro anclado con anclajes postensados y monitoreo continuo de deformaciones en tiempo real.",
    specs: { height: "12 m altura", budget: "$32.6 K", duration: "2020–2021", team: "Especializado", location: "Loja, Ecuador" },
    technologies: ["Plaxis", "GeoStudio", "SAP2000", "AutoCAD"],
    driveUrl: "https://drive.google.com/drive/folders/1uMzlIohlsIlDoTC2KaMPmmccrdviGUde?usp=drive_link",
    media: [] as MediaItem[],
  },
  {
    id: 4,
    title: "Edificio Bodai",
    category: "Edificacion",
    image: "/images/project-building.jpg",
    description: "Proyecto residencial con control BIM integral y supervisión técnica de obra en todas las fases constructivas.",
    challenge: "Garantizar la calidad constructiva y cumplimiento de especificaciones técnicas en cada etapa de la obra.",
    solution: "Protocolo de control de calidad y supervisión técnica permanente con metodología BIM integrada.",
    specs: { type: "Edificio residencial", budget: "Confidencial", duration: "2023", team: "Velsa & Cía", location: "Loja, Ecuador" },
    technologies: ["Revit", "AutoCAD", "SAP2000", "BIM 360"],
    driveUrl: "https://drive.google.com/drive/folders/11JoFARFeTOqyaTg8zeP7AizDfGi-WAf2?usp=sharing",
    media: [] as MediaItem[],
  },
  {
    id: 5,
    title: "Edificio Khanda",
    category: "Edificacion",
    image: "/images/project-building.jpg",
    description: "Proyecto de edificación con diseño estructural avanzado y control topográfico de precisión milimétrica.",
    challenge: "Coordinar el control geométrico y estructural en proyecto de alta complejidad técnica.",
    solution: "Control topográfico GNSS/RTK y modelado BIM para garantizar la precisión en cada fase constructiva.",
    specs: { type: "Edificio", budget: "Confidencial", duration: "2024", team: "Especializado", location: "Loja, Ecuador" },
    technologies: ["GNSS/RTK", "Estación Total", "Revit", "AutoCAD"],
    driveUrl: "https://drive.google.com/drive/folders/1t60nzQTPyyAm1Y5bSzDLS6EaiC45r7vd?usp=drive_link",
    media: [] as MediaItem[],
  },
  {
    id: 6,
    title: "Edificio Kala",
    category: "Edificacion",
    image: "/images/project-building.jpg",
    description: "Supervisión técnica integral con control de calidad y replanteo topográfico de alta precisión.",
    challenge: "Mantener la precisión geométrica y el estándar constructivo en cada fase del proyecto.",
    solution: "Control topográfico continuo con estación total y coordinación BIM de todas las disciplinas.",
    specs: { type: "Edificio", budget: "Confidencial", duration: "2024–2025", team: "Consorcio Kala", location: "Loja, Ecuador" },
    technologies: ["Estación Total", "Revit", "AutoCAD", "Civil 3D"],
    driveUrl: "https://drive.google.com/drive/folders/1qXIcv27yNs5AeotFihIjp1Yl7aYwIw5h?usp=drive_link",
    media: [] as MediaItem[],
  },
  {
    id: 7,
    title: "Proyecto Valdivia",
    category: "GIS & Geomática",
    image: "/images/project-highway.jpg",
    description: "Análisis geoespacial y cartografía interactiva publicada como ArcGIS StoryMap con visualización de datos territoriales.",
    challenge: "Comunicar de manera efectiva el análisis territorial a audiencias técnicas y no técnicas.",
    solution: "StoryMap interactivo en ArcGIS con capas de análisis espacial, mapas temáticos y narrativa visual del territorio.",
    specs: { type: "StoryMap / GIS", budget: "Investigación", duration: "2025", team: "Personal", location: "Ecuador" },
    technologies: ["ArcGIS Pro", "ArcGIS StoryMaps", "QGIS", "Python"],
    storyMapUrl: "https://storymaps.arcgis.com/stories/2c738911ae1e413eaa56efe1b70f2e8d",
    media: [] as MediaItem[],
  },
  {
    id: 8,
    title: "Puente Río Cóndor",
    category: "Puentes",
    image: "/images/gallery/visita-obra-puente-1.jpg",
    description: "Control topográfico de precisión en todas las etapas del Puente Río Cóndor. Campo, replanteo y supervisión completa.",
    challenge: "Precisión milimétrica en control geométrico durante todas las fases constructivas en selva amazónica.",
    solution: "Red geodésica GNSS/RTK con metodología de resección múltiple. Eficiencia operativa mejorada en 20 %.",
    specs: { type: "Puente vehicular", budget: "Confidencial", duration: "Jun–Ago 2025", team: "Consorcio Puentes", location: "Francisco de Orellana" },
    technologies: ["GNSS/RTK", "Estación Total", "Civil 3D", "AutoCAD"],
    media: [
      { src: "/images/gallery/video-puente-condor-1.mp4", type: "video" as const, caption: "Video de obra – Puente Río Cóndor" },
      { src: "/images/gallery/video-puente-condor-2.mp4", type: "video" as const, caption: "Video de campo – Puente Río Cóndor" },
      { src: "/images/gallery/visita-obra-puente-1.jpg", type: "image" as const, caption: "Visita de obra" },
      { src: "/images/gallery/visita-obra-puente-2.jpg", type: "image" as const, caption: "Control topográfico" },
      { src: "/images/gallery/visita-obra-campo-1.jpg", type: "image" as const, caption: "Trabajo de campo" },
      { src: "/images/gallery/visita-obra-campo-2.jpg", type: "image" as const, caption: "Equipo en campo" },
      { src: "/images/gallery/visita-obra-campo-3.jpg", type: "image" as const, caption: "Inspección de obra" },
      { src: "/images/gallery/visita-obra-campo-4.jpg", type: "image" as const, caption: "Replanteo topográfico" },
    ],
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null)
  const [mediaIndex, setMediaIndex] = useState(0)

  const filtered = activeCategory === "Todos" ? projects : projects.filter((p) => p.category === activeCategory)

  const open = (p: (typeof projects)[0]) => { setSelected(p); setMediaIndex(0) }
  const close = () => setSelected(null)

  const currentMedia = selected && selected.media.length > 0 ? selected.media[mediaIndex] : null
  const prevMedia = () => setMediaIndex((i) => selected ? (i - 1 + selected.media.length) % selected.media.length : 0)
  const nextMedia = () => setMediaIndex((i) => selected ? (i + 1) % selected.media.length : 0)

  const colors = selected ? (categoryColors[selected.category] || categoryColors["Edificacion"]) : categoryColors["Edificacion"]

  return (
    <section id="projects" className="py-16 lg:py-28 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-card/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 mb-3 text-xs tracking-widest uppercase">
            Portafolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Ingeniería civil, geotecnia, BIM y análisis geoespacial aplicados en proyectos reales.
          </p>
        </div>

        {/* ── Filtros ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-card/60 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground hover:bg-primary/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Grid de tarjetas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((project) => {
            const c = categoryColors[project.category] || categoryColors["Edificacion"]
            const hasDrive = "driveUrl" in project
            const hasStory = "storyMapUrl" in project
            const hasVideo = project.media.length > 0

            return (
              <article
                key={project.id}
                onClick={() => open(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              >
                {/* Imagen */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={imgPath(project.image) || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Gradiente sobre imagen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badge categoría */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${c.badge}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Badge tipo de enlace */}
                  <div className="absolute top-3 right-3">
                    {hasVideo && (
                      <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-black/60 text-white border border-white/20 backdrop-blur-sm">
                        <Play className="w-3 h-3" />
                        Video
                      </span>
                    )}
                    {hasStory && !hasVideo && (
                      <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-green-500/80 text-white backdrop-blur-sm">
                        <Globe className="w-3 h-3" />
                        StoryMap
                      </span>
                    )}
                    {hasDrive && !hasVideo && !hasStory && (
                      <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-blue-500/70 text-white backdrop-blur-sm">
                        <FolderOpen className="w-3 h-3" />
                        Drive
                      </span>
                    )}
                  </div>

                  {/* Título sobre la imagen (parte inferior) */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Contenido textual – SEPARADO de la imagen */}
                <div className="flex flex-col flex-1 p-4 gap-3">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tecnologías preview */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-primary text-sm font-semibold pt-1 group-hover:gap-2 transition-all">
                    Ver detalles
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* ────────── MODAL ────────── */}
      <Dialog open={!!selected} onOpenChange={close}>
        <DialogContent className="max-w-2xl w-[95vw] max-h-[92vh] overflow-y-auto p-0 rounded-2xl bg-card border-border gap-0">
          {selected && (
            <>
              {/* ── Hero del modal: imagen + título superpuesto limpio ── */}
              <div className="relative w-full h-52 sm:h-64 overflow-hidden rounded-t-2xl flex-shrink-0">
                {/* Imagen o primer frame del media */}
                <Image
                  src={imgPath(
                    selected.media.length > 0 && selected.media[0].type === "image"
                      ? selected.media[0].src
                      : selected.image
                  ) || "/placeholder.svg"}
                  alt={selected.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Gradiente pronunciado para leer bien */}
                <div className={`absolute inset-0 bg-gradient-to-t ${colors.glow} via-black/50 to-black/10`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Botón cerrar */}
                <button
                  onClick={close}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center hover:bg-black/70 transition-all backdrop-blur-sm"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Categoría + título en la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colors.badge} backdrop-blur-sm mb-2 inline-block`}>
                    {selected.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-xl">
                    {selected.title}
                  </h2>
                  <p className="text-sm text-white/80 mt-1 leading-relaxed line-clamp-2">
                    {selected.description}
                  </p>
                </div>
              </div>

              {/* ── Cuerpo del modal – todo bajo la imagen ── */}
              <div className="p-4 sm:p-6 space-y-6">

                {/* Galería multimedia solo si hay media (Puente) */}
                {selected.media.length > 0 && currentMedia && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
                      <Play className="w-4 h-4 text-primary" />
                      Registro Multimedia
                    </h3>
                    <div className="relative rounded-xl overflow-hidden bg-black border border-primary/20">
                      {currentMedia.type === "video" ? (
                        <video
                          key={currentMedia.src}
                          src={imgPath(currentMedia.src)}
                          controls
                          autoPlay
                          className="w-full max-h-64 object-contain"
                        />
                      ) : (
                        <div className="relative w-full aspect-video">
                          <Image src={imgPath(currentMedia.src)} alt={currentMedia.caption} fill className="object-contain" unoptimized />
                        </div>
                      )}
                      {selected.media.length > 1 && (
                        <>
                          <button onClick={prevMedia} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80">
                            <ChevronLeft className="w-4 h-4 text-white" />
                          </button>
                          <button onClick={nextMedia} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80">
                            <ChevronRight className="w-4 h-4 text-white" />
                          </button>
                          <div className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/60 px-2 py-0.5 rounded-full">
                            {mediaIndex + 1}/{selected.media.length}
                          </div>
                        </>
                      )}
                    </div>
                    <p className="text-xs text-center text-muted-foreground italic">{currentMedia.caption}</p>

                    {/* Thumbnails */}
                    {selected.media.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {selected.media.map((m, i) => (
                          <button key={i} onClick={() => setMediaIndex(i)} className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === mediaIndex ? "border-primary" : "border-border hover:border-primary/50"}`}>
                            {m.type === "video" ? (
                              <div className="w-full h-full bg-black/80 flex items-center justify-center"><Play className="w-4 h-4 text-primary" /></div>
                            ) : (
                              <Image src={imgPath(m.src)} alt={m.caption} fill className="object-cover" unoptimized />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* ── Specs ── */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Ficha Técnica
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { icon: MapPin, label: "Ubicación", value: selected.specs.location },
                      { icon: Calendar, label: "Período", value: selected.specs.duration },
                      { icon: Users, label: "Equipo", value: selected.specs.team },
                      { icon: DollarSign, label: "Presupuesto", value: selected.specs.budget },
                      { icon: Target, label: "Escala", value: (selected.specs as any).area || (selected.specs as any).height || (selected.specs as any).type },
                    ].filter((s) => s.value).map((s) => (
                      <div key={s.label} className="flex items-start gap-2 p-3 rounded-xl bg-secondary/40 border border-border">
                        <s.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">{s.label}</p>
                          <p className="text-sm font-semibold text-foreground leading-tight mt-0.5 truncate">{s.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Desafío & Solución ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl p-4 bg-red-500/5 border border-red-500/20 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-red-500/20 flex items-center justify-center">
                        <Zap className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground">Desafío</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selected.challenge}</p>
                  </div>
                  <div className="rounded-xl p-4 bg-primary/5 border border-primary/20 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Target className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground">Solución</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selected.solution}</p>
                  </div>
                </div>

                {/* ── Tecnologías ── */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Tecnologías</h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/5 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Botón Google Drive ── */}
                {"driveUrl" in selected && (selected as any).driveUrl && (
                  <a
                    href={(selected as any).driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-teal-500/5 hover:from-blue-500/20 hover:to-teal-500/10 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FolderOpen className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-foreground group-hover:text-blue-400 transition-colors">
                        Ver Álbum Completo de Fotos
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <Images className="w-3 h-3" /> Galería completa en Google Drive
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-400/60 group-hover:text-blue-400 flex-shrink-0" />
                  </a>
                )}

                {/* ── Botón ArcGIS StoryMap ── */}
                {"storyMapUrl" in selected && (selected as any).storyMapUrl && (
                  <a
                    href={(selected as any).storyMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-green-500/30 bg-gradient-to-r from-green-500/10 to-teal-500/5 hover:from-green-500/20 hover:to-teal-500/10 hover:border-green-400/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-foreground group-hover:text-green-400 transition-colors">
                        Ver StoryMap Interactivo
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <Globe className="w-3 h-3" /> Análisis geoespacial en ArcGIS StoryMaps
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-green-400/60 group-hover:text-green-400 flex-shrink-0" />
                  </a>
                )}

              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
