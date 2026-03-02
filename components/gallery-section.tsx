"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Play, ZoomIn, Camera, Video, BookOpen, Mountain, HardHat } from "lucide-react"
import { imgPath } from "@/lib/img-path"

type MediaType = "image" | "video"

interface GalleryItem {
    id: number
    src: string
    thumb: string
    type: MediaType
    category: string
    title: string
    description: string
}

const galleryItems: GalleryItem[] = [

    // ── TOPOGRAFÍA ──────────────────────────────────────────
    {
        id: 1,
        src: "/images/gallery/topografia-trabajo-campo.jpg",
        thumb: "/images/gallery/topografia-trabajo-campo.jpg",
        type: "image",
        category: "Topografía",
        title: "Trabajo de Campo – Estación Total",
        description: "Levantamiento topográfico en campo con estación total, realizando replanteo y control geométrico de obra.",
    },
    {
        id: 2,
        src: "/images/gallery/topografia-estacion-total-campo.jpg",
        thumb: "/images/gallery/topografia-estacion-total-campo.jpg",
        type: "image",
        category: "Topografía",
        title: "Estación Total – Control Geométrico",
        description: "Equipo de estación total listo para trabajo de topografía de precisión.",
    },
    {
        id: 3,
        src: "/images/gallery/topografia-estacion-total-oficina.jpg",
        thumb: "/images/gallery/topografia-estacion-total-oficina.jpg",
        type: "image",
        category: "Topografía",
        title: "Equipos de Medición de Precisión",
        description: "Estación total de alta precisión utilizada en proyectos de control geométrico.",
    },
    {
        id: 4,
        src: "/images/gallery/visita-obra-campo-1.jpg",
        thumb: "/images/gallery/visita-obra-campo-1.jpg",
        type: "image",
        category: "Topografía",
        title: "Replanteo Topográfico en Obra",
        description: "Actividades de replanteo y control de puntos en campo durante visita de obra.",
    },
    {
        id: 5,
        src: "/images/gallery/visita-obra-campo-2.jpg",
        thumb: "/images/gallery/visita-obra-campo-2.jpg",
        type: "image",
        category: "Topografía",
        title: "Medición de Precisión – Obra Civil",
        description: "Control geométrico de elementos estructurales con equipo topográfico de alta precisión.",
    },
    {
        id: 6,
        src: "/images/gallery/visita-obra-campo-3.jpg",
        thumb: "/images/gallery/visita-obra-campo-3.jpg",
        type: "image",
        category: "Topografía",
        title: "Levantamiento Topográfico – Campo",
        description: "Levantamiento de puntos de control para revisión de avance de obra.",
    },
    {
        id: 7,
        src: "/images/gallery/visita-obra-campo-4.jpg",
        thumb: "/images/gallery/visita-obra-campo-4.jpg",
        type: "image",
        category: "Topografía",
        title: "Red de Control – Puntos Geodésicos",
        description: "Materialización y medición de puntos de red de control geodésica en obra.",
    },
    {
        id: 8,
        src: "/images/gallery/visita-obra-campo-5.jpg",
        thumb: "/images/gallery/visita-obra-campo-5.jpg",
        type: "image",
        category: "Topografía",
        title: "Control de Cota – Elementos Estructurales",
        description: "Verificación de cotas y alineación de elementos estructurales con estación total.",
    },
    {
        id: 9,
        src: "/images/gallery/visita-obra-campo-6.jpg",
        thumb: "/images/gallery/visita-obra-campo-6.jpg",
        type: "image",
        category: "Topografía",
        title: "Topografía de Obra – Vista General",
        description: "Vista general del trabajo topográfico en campo durante ejecución de obra.",
    },

    // ── GIS & GEOMÁTICA ───────────────────────────────────────
    {
        id: 20,
        src: "/images/gallery/gis-clasificacion-uso-suelo.jpg",
        thumb: "/images/gallery/gis-clasificacion-uso-suelo.jpg",
        type: "image",
        category: "GIS & Geomática",
        title: "Clasificación de Uso de Suelo – ArcGIS Pro",
        description: "Análisis de clasificación supervisada de cobertura y uso de suelo en la Amazonía Ecuatoriana con ArcGIS Pro.",
    },
    {
        id: 21,
        src: "/images/gallery/gis-dem-3d-qgis.jpg",
        thumb: "/images/gallery/gis-dem-3d-qgis.jpg",
        type: "image",
        category: "GIS & Geomática",
        title: "Modelo Digital de Elevación 3D – QGIS",
        description: "Visualización 3D de Modelo Digital de Elevación (DEM) con QGIS2threejs. Análisis hídrico y geomorfológico.",
    },
    {
        id: 22,
        src: "/images/gallery/henrry-loja-panoramica.jpg",
        thumb: "/images/gallery/henrry-loja-panoramica.jpg",
        type: "image",
        category: "GIS & Geomática",
        title: "Vista Panorámica – Ciudad de Loja",
        description: "Vista panorámica de la ciudad de Loja, Ecuador, con parque eólico al fondo. Base de operaciones de Henrry Lojan.",
    },

    // ── BIM & ESTRUCTURAS ─────────────────────────────────────
    {
        id: 30,
        src: "/images/gallery/estructuras-detalle-columna-revit.jpg",
        thumb: "/images/gallery/estructuras-detalle-columna-revit.jpg",
        type: "image",
        category: "BIM & Estructuras",
        title: "Detalle Estructural – Columna y Zapata (Revit)",
        description: "Modelo BIM de detalle estructural: columna C1 (50×50cm) con zapata Z1, estribos 10mm y acero 14mm, elaborado en Revit.",
    },

    // ── PRODUCCIÓN CIENTÍFICA ─────────────────────────────────
    {
        id: 40,
        src: "/images/gallery/investigacion-igarss-paper.jpg",
        thumb: "/images/gallery/investigacion-igarss-paper.jpg",
        type: "image",
        category: "Producción Científica",
        title: "Publicación IGARSS 2026",
        description: "'Mining in the Southern Ecuadorian Amazon: Territorial Transformation and Biodiversity Loss in the Zamora and Nangaritza Rivers' – Artículo aceptado en IGARSS 2026.",
    },
    {
        id: 41,
        src: "/images/gallery/produccion-cientifica-1.jpg",
        thumb: "/images/gallery/produccion-cientifica-1.jpg",
        type: "image",
        category: "Producción Científica",
        title: "Investigación en Geomática Aplicada",
        description: "Documentación de investigación en teledetección y análisis geoespacial aplicado a minería y biodiversidad amazónica.",
    },

    // ── VISITAS DE OBRAS ──────────────────────────────────────
    {
        id: 50,
        src: "/images/gallery/video-puente-condor-1.mp4",
        thumb: "/images/gallery/visita-obra-puente-1.jpg",
        type: "video",
        category: "Visitas de Obras",
        title: "Video – Puente Río Cóndor (1)",
        description: "Registro en video de actividades de campo y control topográfico en el Puente Río Cóndor, Francisco de Orellana.",
    },
    {
        id: 51,
        src: "/images/gallery/video-puente-condor-2.mp4",
        thumb: "/images/gallery/visita-obra-puente-2.jpg",
        type: "video",
        category: "Visitas de Obras",
        title: "Video – Puente Río Cóndor (2)",
        description: "Registro de actividades de inspección y replanteo en el Puente Río Cóndor.",
    },
    {
        id: 52,
        src: "/images/gallery/video-visita-obra-1.mp4",
        thumb: "/images/gallery/visita-obra-equipo-1.jpg",
        type: "video",
        category: "Visitas de Obras",
        title: "Video – Visita de Obra (1)",
        description: "Registro de visita de obra civil, supervisión de elementos estructurales y control de calidad.",
    },
    {
        id: 53,
        src: "/images/gallery/video-visita-obra-2.mp4",
        thumb: "/images/gallery/visita-obra-equipo-2.jpg",
        type: "video",
        category: "Visitas de Obras",
        title: "Video – Visita de Obra (2)",
        description: "Inspección de avance de obra y revisión de especificaciones técnicas en campo.",
    },
    {
        id: 54,
        src: "/images/gallery/video-visita-obra-3.mp4",
        thumb: "/images/gallery/visita-obra-equipo-3.jpg",
        type: "video",
        category: "Visitas de Obras",
        title: "Video – Visita de Obra (3)",
        description: "Documentación visual de procesos constructivos y supervisión técnica.",
    },
    {
        id: 55,
        src: "/images/gallery/video-visita-obra-4.mp4",
        thumb: "/images/gallery/visita-obra-civil-1.jpg",
        type: "video",
        category: "Visitas de Obras",
        title: "Video – Control de Obra Civil (1)",
        description: "Control de elementos estructurales, verificación de armados y concreto.",
    },
    {
        id: 56,
        src: "/images/gallery/video-visita-obra-5.mp4",
        thumb: "/images/gallery/visita-obra-civil-2.jpg",
        type: "video",
        category: "Visitas de Obras",
        title: "Video – Control de Obra Civil (2)",
        description: "Revisión de procesos constructivos, mediciones y control de avance.",
    },
    {
        id: 57,
        src: "/images/gallery/video-visita-obra-6.mp4",
        thumb: "/images/gallery/visita-obra-panoramica.jpg",
        type: "video",
        category: "Visitas de Obras",
        title: "Video – Vista Panorámica de Obra",
        description: "Vista panorámica de la obra con registro completo del estado de avance.",
    },
    {
        id: 58,
        src: "/images/gallery/video-visita-obra-7.mp4",
        thumb: "/images/gallery/visita-obra-puente-1.jpg",
        type: "video",
        category: "Visitas de Obras",
        title: "Video – Registro Final de Obra",
        description: "Documentación final de obra: verificación de terminados, detalles y cierre.",
    },
    // Fotos de visitas de obras
    {
        id: 60,
        src: "/images/gallery/visita-obra-puente-1.jpg",
        thumb: "/images/gallery/visita-obra-puente-1.jpg",
        type: "image",
        category: "Visitas de Obras",
        title: "Visita de Obra – Puente Río Cóndor",
        description: "Registro fotográfico de visita de obra al Puente Río Cóndor, Francisco de Orellana.",
    },
    {
        id: 61,
        src: "/images/gallery/visita-obra-puente-2.jpg",
        thumb: "/images/gallery/visita-obra-puente-2.jpg",
        type: "image",
        category: "Visitas de Obras",
        title: "Inspección – Puente Río Cóndor",
        description: "Inspección de elementos del puente y control geométrico de la estructura.",
    },
    {
        id: 62,
        src: "/images/gallery/visita-obra-equipo-1.jpg",
        thumb: "/images/gallery/visita-obra-equipo-1.jpg",
        type: "image",
        category: "Visitas de Obras",
        title: "Equipo Técnico en Obra",
        description: "Equipo de trabajo realizando inspección y control de obra en campo.",
    },
    {
        id: 63,
        src: "/images/gallery/visita-obra-equipo-2.jpg",
        thumb: "/images/gallery/visita-obra-equipo-2.jpg",
        type: "image",
        category: "Visitas de Obras",
        title: "Coordinación de Obra en Campo",
        description: "Coordinación técnica con equipo de obra durante visita de inspección.",
    },
    {
        id: 64,
        src: "/images/gallery/visita-obra-equipo-3.jpg",
        thumb: "/images/gallery/visita-obra-equipo-3.jpg",
        type: "image",
        category: "Visitas de Obras",
        title: "Revisión Técnica – Elementos Estructurales",
        description: "Revisión de armados, materiales y especificaciones técnicas en obra.",
    },
    {
        id: 65,
        src: "/images/gallery/visita-obra-civil-1.jpg",
        thumb: "/images/gallery/visita-obra-civil-1.jpg",
        type: "image",
        category: "Visitas de Obras",
        title: "Control de Calidad – Obra Civil",
        description: "Control de calidad de elementos de concreto y verificación de diseño.",
    },
    {
        id: 66,
        src: "/images/gallery/visita-obra-civil-2.jpg",
        thumb: "/images/gallery/visita-obra-civil-2.jpg",
        type: "image",
        category: "Visitas de Obras",
        title: "Supervisión de Construcción",
        description: "Supervisión técnica de avance de obra y cumplimiento de especificaciones.",
    },
    {
        id: 67,
        src: "/images/gallery/visita-obra-panoramica.jpg",
        thumb: "/images/gallery/visita-obra-panoramica.jpg",
        type: "image",
        category: "Visitas de Obras",
        title: "Vista Panorámica – Zona de Obra",
        description: "Vista panorámica de la zona de obra con entorno y accesos.",
    },
]

const categories = ["Todos", "Topografía", "GIS & Geomática", "BIM & Estructuras", "Producción Científica", "Visitas de Obras"]

const categoryColors: Record<string, string> = {
    "Topografía": "bg-accent/10 text-accent border-accent/30",
    "GIS & Geomática": "bg-green-500/10 text-green-400 border-green-500/30",
    "BIM & Estructuras": "bg-primary/10 text-primary border-primary/30",
    "Producción Científica": "bg-purple-500/10 text-purple-400 border-purple-500/30",
    "Visitas de Obras": "bg-blue-500/10 text-blue-400 border-blue-500/30",
}

const categoryIcons: Record<string, React.ReactNode> = {
    "Topografía": <Mountain className="w-3.5 h-3.5" />,
    "GIS & Geomática": <Camera className="w-3.5 h-3.5" />,
    "BIM & Estructuras": <HardHat className="w-3.5 h-3.5" />,
    "Producción Científica": <BookOpen className="w-3.5 h-3.5" />,
    "Visitas de Obras": <Video className="w-3.5 h-3.5" />,
}

// Import React for JSX
import React from "react"

export function GallerySection() {
    const [activeCategory, setActiveCategory] = useState("Todos")
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    const filtered = activeCategory === "Todos"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory)

    const openLightbox = (indexInFiltered: number) => {
        setLightboxIndex(indexInFiltered)
    }

    const closeLightbox = useCallback(() => {
        setLightboxIndex(null)
    }, [])

    const goPrev = useCallback(() => {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null))
    }, [filtered.length])

    const goNext = useCallback(() => {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null))
    }, [filtered.length])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return
            if (e.key === "Escape") closeLightbox()
            if (e.key === "ArrowLeft") goPrev()
            if (e.key === "ArrowRight") goNext()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [lightboxIndex, closeLightbox, goPrev, goNext])

    // Stop video when lightbox closes
    useEffect(() => {
        if (lightboxIndex === null && videoRef.current) {
            videoRef.current.pause()
        }
    }, [lightboxIndex])

    const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

    // Stats per category
    const totalImages = filtered.filter((i) => i.type === "image").length
    const totalVideos = filtered.filter((i) => i.type === "video").length

    return (
        <section id="gallery" className="py-20 lg:py-32 bg-card/30 relative">
            <div className="absolute inset-0 grid-pattern" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 mb-4">
                        Galería Visual
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                        Mi Trabajo en Imágenes & Videos
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Registro visual de proyectos, visitas de obras, topografía de campo,
                        producción científica y análisis geoespacial avanzado.
                    </p>
                </div>

                {/* Category Filter – con íconos */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <Button
                        variant={activeCategory === "Todos" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory("Todos")}
                        className={`rounded-full text-xs sm:text-sm ${activeCategory === "Todos"
                            ? "glow-teal-sm"
                            : "border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                            }`}
                    >
                        Todos
                    </Button>
                    {categories.filter(c => c !== "Todos").map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveCategory(cat)}
                            className={`rounded-full text-xs sm:text-sm flex items-center gap-1.5 ${activeCategory === cat
                                ? "glow-teal-sm"
                                : "border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                                }`}
                        >
                            {categoryIcons[cat]}
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Stats bar */}
                <div className="flex justify-center gap-6 mb-8 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-primary" />
                        {totalImages} fotos
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5 text-accent" />
                        {totalVideos} videos
                    </span>
                    <span className="text-muted-foreground/50">·</span>
                    <span className="flex items-center gap-1.5 text-muted-foreground/70">
                        {filtered.length} elementos
                    </span>
                </div>

                {/* Masonry-style Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {filtered.map((item, idx) => (
                        <div
                            key={item.id}
                            className="break-inside-avoid group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card card-hover"
                            onClick={() => openLightbox(idx)}
                        >
                            {/* Thumbnail */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={imgPath(item.thumb)}
                                    alt={item.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Play icon for videos */}
                                {item.type === "video" && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center glow-teal group-hover:scale-110 transition-transform">
                                            <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                                        </div>
                                    </div>
                                )}

                                {/* Zoom icon for images */}
                                {item.type === "image" && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center glow-teal-sm">
                                            <ZoomIn className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                )}

                                {/* Category badge */}
                                <Badge
                                    className={`absolute top-3 left-3 text-xs flex items-center gap-1 ${categoryColors[item.category] || "bg-card text-foreground"}`}
                                >
                                    {categoryIcons[item.category]}
                                    {item.category}
                                </Badge>

                                {/* Media type badge */}
                                <div className="absolute top-3 right-3">
                                    {item.type === "video"
                                        ? <Video className="w-4 h-4 text-accent drop-shadow" />
                                        : <Camera className="w-4 h-4 text-primary/70 drop-shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                                    }
                                </div>
                            </div>

                            {/* Caption */}
                            <div className="p-3">
                                <p className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                                    {item.title}
                                </p>
                                <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        No hay elementos en esta categoría aún.
                    </div>
                )}
            </div>

            {/* ── Lightbox ── */}
            {currentItem && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close */}
                    <button
                        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-card hover:border-primary/50 transition-all"
                        onClick={closeLightbox}
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5 text-foreground" />
                    </button>

                    {/* Prev */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
                        onClick={(e) => { e.stopPropagation(); goPrev() }}
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>

                    {/* Next */}
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
                        onClick={(e) => { e.stopPropagation(); goNext() }}
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>

                    {/* Content */}
                    <div
                        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {currentItem.type === "image" ? (
                            <div className="relative w-full max-h-[70vh] rounded-xl overflow-hidden border border-primary/20 glow-teal">
                                <Image
                                    src={imgPath(currentItem.src)}
                                    alt={currentItem.title}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto max-h-[70vh] object-contain"
                                    unoptimized
                                />
                            </div>
                        ) : (
                            <div className="relative w-full rounded-xl overflow-hidden border border-accent/30 glow-teal">
                                <video
                                    ref={videoRef}
                                    src={imgPath(currentItem.src)}
                                    controls
                                    autoPlay
                                    className="w-full max-h-[65vh] rounded-xl"
                                    style={{ background: "#000" }}
                                />
                            </div>
                        )}

                        {/* Info */}
                        <div className="text-center px-4">
                            <Badge className={`mb-2 text-xs flex items-center gap-1 mx-auto w-fit ${categoryColors[currentItem.category] || ""}`}>
                                {categoryIcons[currentItem.category]}
                                {currentItem.category}
                            </Badge>
                            <h3 className="text-lg font-semibold text-foreground">{currentItem.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1 max-w-xl">{currentItem.description}</p>
                            <p className="text-xs text-muted-foreground/50 mt-2 font-mono">
                                {(lightboxIndex ?? 0) + 1} / {filtered.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
