"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Play, ZoomIn, Camera, Video } from "lucide-react"
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
    // Topografía & Campo
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

    // GIS & Geomática
    {
        id: 4,
        src: "/images/gallery/gis-clasificacion-uso-suelo.jpg",
        thumb: "/images/gallery/gis-clasificacion-uso-suelo.jpg",
        type: "image",
        category: "GIS & Geomática",
        title: "Clasificación de Uso de Suelo – ArcGIS Pro",
        description: "Análisis de clasificación supervisada de cobertura y uso de suelo en la Amazonía Ecuatoriana con ArcGIS Pro.",
    },
    {
        id: 5,
        src: "/images/gallery/gis-dem-3d-qgis.jpg",
        thumb: "/images/gallery/gis-dem-3d-qgis.jpg",
        type: "image",
        category: "GIS & Geomática",
        title: "Modelo Digital de Elevación 3D – QGIS",
        description: "Visualización 3D de Modelo Digital de Elevación (DEM) con QGIS2threejs. Análisis hídrico y geomorfológico.",
    },

    // Estructuras & BIM
    {
        id: 6,
        src: "/images/gallery/estructuras-detalle-columna-revit.jpg",
        thumb: "/images/gallery/estructuras-detalle-columna-revit.jpg",
        type: "image",
        category: "BIM & Estructuras",
        title: "Detalle Estructural – Columna y Zapata (Revit)",
        description: "Modelo BIM de detalle estructural: columna C1 (50×50cm) con zapata Z1, estribos 10mm y acero 14mm, elaborado en Revit.",
    },

    // Investigación
    {
        id: 7,
        src: "/images/gallery/investigacion-igarss-paper.jpg",
        thumb: "/images/gallery/investigacion-igarss-paper.jpg",
        type: "image",
        category: "Investigación",
        title: "Publicación IGARSS 2026",
        description: "'Mining in the Southern Ecuadorian Amazon: Territorial Transformation and Biodiversity Loss in the Zamora and Nangaritza Rivers' – Artículo aceptado en IGARSS 2026.",
    },

    // Proyectos (videos)
    {
        id: 8,
        src: "/images/gallery/video-obra-1.mp4",
        thumb: "/images/gallery/henrry-loja-panoramica.jpg",
        type: "video",
        category: "Obras & Proyectos",
        title: "Video de Obra – Proyecto en Campo",
        description: "Registro en video de trabajo de campo e inspección de obra.",
    },
    {
        id: 9,
        src: "/images/gallery/video-obra-2.mp4",
        thumb: "/images/gallery/henrry-loja-panoramica.jpg",
        type: "video",
        category: "Obras & Proyectos",
        title: "Video de Proyecto – Avance de Obra",
        description: "Documentación en video de avance de obra y control de calidad.",
    },

    // Loja & Entorno
    {
        id: 10,
        src: "/images/gallery/henrry-loja-panoramica.jpg",
        thumb: "/images/gallery/henrry-loja-panoramica.jpg",
        type: "image",
        category: "Obras & Proyectos",
        title: "Vista Panorámica – Ciudad de Loja",
        description: "Vista panorámica de la ciudad de Loja, Ecuador, con parque eólico al fondo. Base de operaciones de Henrry Lojan.",
    },
]

const categories = ["Todos", "Topografía", "GIS & Geomática", "BIM & Estructuras", "Investigación", "Obras & Proyectos"]

const categoryColors: Record<string, string> = {
    "Topografía": "bg-accent/10 text-accent border-accent/30",
    "GIS & Geomática": "bg-green-500/10 text-green-400 border-green-500/30",
    "BIM & Estructuras": "bg-primary/10 text-primary border-primary/30",
    "Investigación": "bg-purple-500/10 text-purple-400 border-purple-500/30",
    "Obras & Proyectos": "bg-blue-500/10 text-blue-400 border-blue-500/30",
}

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
                        Mi Trabajo en Imágenes
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Registro visual de proyectos, herramientas e investigaciones.
                        Desde topografía de campo hasta análisis geoespacial avanzado.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveCategory(cat)}
                            className={`rounded-full text-xs sm:text-sm ${activeCategory === cat
                                    ? "glow-teal-sm"
                                    : "border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                                }`}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Stats bar */}
                <div className="flex justify-center gap-6 mb-8 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-primary" />
                        {filtered.filter((i) => i.type === "image").length} fotos
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5 text-accent" />
                        {filtered.filter((i) => i.type === "video").length} videos
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
                                    className={`absolute top-3 left-3 text-xs ${categoryColors[item.category] || "bg-card text-foreground"}`}
                                >
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
                            <Badge className={`mb-2 text-xs ${categoryColors[currentItem.category] || ""}`}>
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
