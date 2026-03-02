"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, Play, ZoomIn, Camera, Video, BookOpen, Mountain, HardHat } from "lucide-react"
import { imgPath } from "@/lib/img-path"
import React from "react"

type MediaType = "image" | "video"

interface GalleryItem {
    id: number
    src: string
    type: MediaType
    category: string
    title: string
    description: string
}

const galleryItems: GalleryItem[] = [
    // ── TOPOGRAFÍA ──────────────────────────────────────────
    { id: 1, src: "/images/gallery/topografia-trabajo-campo.jpg", type: "image", category: "Topografía", title: "Trabajo de Campo – Estación Total", description: "Levantamiento topográfico en campo con estación total, realizando replanteo y control geométrico de obra." },
    { id: 2, src: "/images/gallery/topografia-estacion-total-campo.jpg", type: "image", category: "Topografía", title: "Estación Total – Control Geométrico", description: "Equipo de estación total listo para trabajo de topografía de precisión." },
    { id: 3, src: "/images/gallery/topografia-estacion-total-oficina.jpg", type: "image", category: "Topografía", title: "Equipos de Medición de Precisión", description: "Estación total de alta precisión utilizada en proyectos de control geométrico." },
    { id: 4, src: "/images/gallery/visita-obra-campo-1.jpg", type: "image", category: "Topografía", title: "Replanteo Topográfico en Obra", description: "Actividades de replanteo y control de puntos en campo durante visita de obra." },
    { id: 5, src: "/images/gallery/visita-obra-campo-2.jpg", type: "image", category: "Topografía", title: "Medición de Precisión – Obra Civil", description: "Control geométrico de elementos estructurales con equipo topográfico de alta precisión." },
    { id: 6, src: "/images/gallery/visita-obra-campo-3.jpg", type: "image", category: "Topografía", title: "Levantamiento Topográfico – Campo", description: "Levantamiento de puntos de control para revisión de avance de obra." },
    { id: 7, src: "/images/gallery/visita-obra-campo-4.jpg", type: "image", category: "Topografía", title: "Red de Control – Puntos Geodésicos", description: "Materialización y medición de puntos de red de control geodésica en obra." },
    { id: 8, src: "/images/gallery/visita-obra-campo-5.jpg", type: "image", category: "Topografía", title: "Control de Cota – Estructurales", description: "Verificación de cotas y alineación de elementos estructurales con estación total." },
    { id: 9, src: "/images/gallery/visita-obra-campo-6.jpg", type: "image", category: "Topografía", title: "Topografía de Obra – Vista General", description: "Vista general del trabajo topográfico en campo durante ejecución de obra." },

    // ── GIS & GEOMÁTICA ───────────────────────────────────────
    { id: 20, src: "/images/gallery/gis-clasificacion-uso-suelo.jpg", type: "image", category: "GIS & Geomática", title: "Clasificación de Uso de Suelo – ArcGIS", description: "Análisis de clasificación supervisada de cobertura y uso de suelo en la Amazonía Ecuatoriana con ArcGIS Pro." },
    { id: 21, src: "/images/gallery/gis-dem-3d-qgis.jpg", type: "image", category: "GIS & Geomática", title: "Modelo Digital de Elevación 3D – QGIS", description: "Visualización 3D de Modelo Digital de Elevación (DEM) con QGIS2threejs. Análisis hídrico y geomorfológico." },
    { id: 22, src: "/images/gallery/henrry-loja-panoramica.jpg", type: "image", category: "GIS & Geomática", title: "Vista Panorámica – Ciudad de Loja", description: "Vista panorámica de la ciudad de Loja, Ecuador, con parque eólico al fondo." },

    // ── BIM & ESTRUCTURAS ─────────────────────────────────────
    { id: 30, src: "/images/gallery/estructuras-detalle-columna-revit.jpg", type: "image", category: "BIM & Estructuras", title: "Detalle Estructural – Columna y Zapata", description: "Modelo BIM de detalle estructural: columna C1 (50×50 cm) con zapata Z1, estribos 10 mm y acero 14 mm, elaborado en Revit." },

    // ── PRODUCCIÓN CIENTÍFICA ─────────────────────────────────
    { id: 40, src: "/images/gallery/investigacion-igarss-paper.jpg", type: "image", category: "Producción Científica", title: "Publicación IGARSS 2026", description: "'Mining in the Southern Ecuadorian Amazon' – Artículo aceptado en IGARSS 2026." },
    { id: 41, src: "/images/gallery/produccion-cientifica-1.jpg", type: "image", category: "Producción Científica", title: "Investigación en Geomática Aplicada", description: "Documentación de investigación en teledetección y análisis geoespacial aplicado a minería y biodiversidad amazónica." },

    // ── VISITAS DE OBRAS – Fotos ──────────────────────────────
    { id: 60, src: "/images/gallery/visita-obra-puente-1.jpg", type: "image", category: "Visitas de Obras", title: "Visita de Obra – Puente Río Cóndor", description: "Registro fotográfico de visita de obra al Puente Río Cóndor, Francisco de Orellana." },
    { id: 61, src: "/images/gallery/visita-obra-puente-2.jpg", type: "image", category: "Visitas de Obras", title: "Inspección – Puente Río Cóndor", description: "Inspección de elementos del puente y control geométrico de la estructura." },
    { id: 62, src: "/images/gallery/visita-obra-equipo-1.jpg", type: "image", category: "Visitas de Obras", title: "Equipo Técnico en Obra", description: "Equipo de trabajo realizando inspección y control de obra en campo." },
    { id: 63, src: "/images/gallery/visita-obra-equipo-2.jpg", type: "image", category: "Visitas de Obras", title: "Coordinación de Obra en Campo", description: "Coordinación técnica con equipo de obra durante visita de inspección." },
    { id: 64, src: "/images/gallery/visita-obra-equipo-3.jpg", type: "image", category: "Visitas de Obras", title: "Revisión Técnica – Estructurales", description: "Revisión de armados, materiales y especificaciones técnicas en obra." },
    { id: 65, src: "/images/gallery/visita-obra-civil-1.jpg", type: "image", category: "Visitas de Obras", title: "Control de Calidad – Obra Civil", description: "Control de calidad de elementos de concreto y verificación de diseño." },
    { id: 66, src: "/images/gallery/visita-obra-civil-2.jpg", type: "image", category: "Visitas de Obras", title: "Supervisión de Construcción", description: "Supervisión técnica de avance de obra y cumplimiento de especificaciones." },
    { id: 67, src: "/images/gallery/visita-obra-panoramica.jpg", type: "image", category: "Visitas de Obras", title: "Vista Panorámica – Zona de Obra", description: "Vista panorámica de la zona de obra con entorno y accesos." },

    // ── VISITAS DE OBRAS – Videos ─────────────────────────────
    { id: 50, src: "/images/gallery/video-puente-condor-1.mp4", type: "video", category: "Visitas de Obras", title: "Río Cóndor – Control Topográfico en Puente", description: "Registro en video de actividades de control topográfico y replanteo en el Puente Río Cóndor, Francisco de Orellana." },
    { id: 51, src: "/images/gallery/video-puente-condor-2.mp4", type: "video", category: "Visitas de Obras", title: "Río Cóndor – Inspección y Replanteo Estructural", description: "Documentación de actividades de inspección geométrica y replanteo de la estructura del Puente Río Cóndor." },
    { id: 52, src: "/images/gallery/video-visita-obra-1.mp4", type: "video", category: "Visitas de Obras", title: "Supervisión de Elementos Estructurales", description: "Visita técnica de supervisión: revisión de armados, encofrado y elementos estructurales en proceso de construcción." },
    { id: 53, src: "/images/gallery/video-visita-obra-2.mp4", type: "video", category: "Visitas de Obras", title: "Inspección de Avance de Obra", description: "Inspección de campo de avance constructivo y verificación de especificaciones técnicas del proyecto." },
    { id: 54, src: "/images/gallery/video-visita-obra-3.mp4", type: "video", category: "Visitas de Obras", title: "Documentación de Proceso Constructivo", description: "Registro video de procesos de construcción, vaciado de concreto y supervisión técnica en obra." },
    { id: 55, src: "/images/gallery/video-visita-obra-4.mp4", type: "video", category: "Visitas de Obras", title: "Verificación de Armados y Materiales", description: "Control de calidad de armados de acero, verificación de diámetros y disposición según planos estructurales." },
    { id: 56, src: "/images/gallery/video-visita-obra-5.mp4", type: "video", category: "Visitas de Obras", title: "Mediciones y Control de Avance Constructivo", description: "Toma de medidas, control dimensional y revisión del avance de obra frente al cronograma de trabajo." },
    { id: 57, src: "/images/gallery/video-visita-obra-6.mp4", type: "video", category: "Visitas de Obras", title: "Recorrido Panorámico – Zona de Obra", description: "Recorrido visual completo de la zona de obra mostrando el estado general de los trabajos en ejecución." },
    { id: 58, src: "/images/gallery/video-visita-obra-7.mp4", type: "video", category: "Visitas de Obras", title: "Cierre de Visita – Verificación de Terminados", description: "Registro final de visita: revisión de acabados, tolerancias geométricas y conformidad con el diseño aprobado." },
]

const categories = ["Todos", "Topografía", "GIS & Geomática", "BIM & Estructuras", "Producción Científica", "Visitas de Obras"]

const categoryStyle: Record<string, { badge: string; accent: string }> = {
    "Topografía": { badge: "bg-amber-500/15 text-amber-300 border-amber-500/30", accent: "#f59e0b" },
    "GIS & Geomática": { badge: "bg-green-500/15 text-green-300 border-green-500/30", accent: "#22c55e" },
    "BIM & Estructuras": { badge: "bg-teal-500/15 text-teal-300 border-teal-500/30", accent: "#14b8a6" },
    "Producción Científica": { badge: "bg-purple-500/15 text-purple-300 border-purple-500/30", accent: "#a855f7" },
    "Visitas de Obras": { badge: "bg-blue-500/15 text-blue-300 border-blue-500/30", accent: "#3b82f6" },
}

const categoryIcons: Record<string, React.ReactNode> = {
    "Topografía": <Mountain className="w-3.5 h-3.5" />,
    "GIS & Geomática": <Camera className="w-3.5 h-3.5" />,
    "BIM & Estructuras": <HardHat className="w-3.5 h-3.5" />,
    "Producción Científica": <BookOpen className="w-3.5 h-3.5" />,
    "Visitas de Obras": <Video className="w-3.5 h-3.5" />,
}

// ── Thumbnail card ────────────────────────────────────────────────────────────
function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
    const style = categoryStyle[item.category] || { badge: "", accent: "#14b8a6" }
    const isVideo = item.type === "video"

    return (
        <div
            onClick={onClick}
            className="group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-primary/50 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
        >
            {/* Thumbnail */}
            <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                {isVideo ? (
                    /* VIDEO: fondo oscuro con ícono Play centrado */
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center gap-3">
                        {/* Círculo Play */}
                        <div className="w-14 h-14 rounded-full border-2 border-primary/60 bg-primary/15 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30 group-hover:border-primary">
                            <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                        </div>
                        <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                            Reproducir video
                        </span>
                    </div>
                ) : (
                    /* IMAGE: foto real */
                    <>
                        <Image
                            src={imgPath(item.src)}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            unoptimized
                        />
                        {/* Overlay hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-sm">
                                <ZoomIn className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </>
                )}

                {/* Badge categoría */}
                <div className="absolute top-2 left-2">
                    <span className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border backdrop-blur-sm ${style.badge}`}>
                        {categoryIcons[item.category]}
                        {item.category}
                    </span>
                </div>

                {/* Badge tipo */}
                <div className="absolute top-2 right-2">
                    {isVideo ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/80 text-white border border-primary/60 backdrop-blur-sm">
                            <Video className="w-3 h-3" /> Video
                        </span>
                    ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/50 text-white/80 border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-3 h-3" /> Foto
                        </span>
                    )}
                </div>
            </div>

            {/* Texto */}
            <div className="p-3 flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {item.title}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </div>
    )
}

// ── Sección principal ─────────────────────────────────────────────────────────
export function GallerySection() {
    const [activeCategory, setActiveCategory] = useState("Todos")
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    const filtered = activeCategory === "Todos"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory)

    // Separar imágenes y videos para mostrarlos en bloques ordenados
    const images = filtered.filter((i) => i.type === "image")
    const videos = filtered.filter((i) => i.type === "video")

    // La lista que usan los índices del lightbox es filtered (preserva el orden original)
    const openLightbox = (indexInFiltered: number) => setLightboxIndex(indexInFiltered)
    const closeLightbox = useCallback(() => setLightboxIndex(null), [])
    const goPrev = useCallback(() => setLightboxIndex((p) => p !== null ? (p - 1 + filtered.length) % filtered.length : null), [filtered.length])
    const goNext = useCallback(() => setLightboxIndex((p) => p !== null ? (p + 1) % filtered.length : null), [filtered.length])

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

    useEffect(() => {
        if (lightboxIndex === null && videoRef.current) videoRef.current.pause()
    }, [lightboxIndex])

    const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

    const showVideosBlock = videos.length > 0 && (activeCategory === "Todos" || activeCategory === "Visitas de Obras")
    const showImagesBlock = images.length > 0

    return (
        <section id="gallery" className="py-16 lg:py-28 bg-card/30 relative">
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                    <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 mb-3 text-xs tracking-widest uppercase">
                        Galería Visual
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Mi Trabajo en Imágenes & Videos
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        Registro visual de proyectos, visitas de obras, topografía de campo,
                        producción científica y análisis geoespacial.
                    </p>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${activeCategory === cat
                                ? "bg-primary text-primary-foreground border-primary shadow-md"
                                : "bg-card/60 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground hover:bg-primary/10"
                                }`}
                        >
                            {cat !== "Todos" && categoryIcons[cat]}
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-5 mb-10 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Camera className="w-3.5 h-3.5 text-primary" />{images.length} fotos</span>
                    <span className="text-muted-foreground/30">·</span>
                    <span className="flex items-center gap-1.5"><Video className="w-3.5 h-3.5 text-accent" />{videos.length} videos</span>
                    <span className="text-muted-foreground/30">·</span>
                    <span>{filtered.length} en total</span>
                </div>

                {/* ── BLOQUE VIDEOS ── */}
                {showVideosBlock && (
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                                <Video className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-primary">Videos</span>
                                <span className="text-xs text-primary/60 font-mono">{videos.length}</span>
                            </div>
                            <div className="flex-1 h-px bg-border" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                            {videos.map((item) => (
                                <GalleryCard
                                    key={item.id}
                                    item={item}
                                    onClick={() => openLightbox(filtered.indexOf(item))}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* ── BLOQUE IMÁGENES ── */}
                {showImagesBlock && (
                    <div>
                        {showVideosBlock && (
                            <div className="flex items-center gap-3 mb-5">
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                                    <Camera className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-semibold text-primary">Fotografías</span>
                                    <span className="text-xs text-primary/60 font-mono">{images.length}</span>
                                </div>
                                <div className="flex-1 h-px bg-border" />
                            </div>
                        )}
                        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                            {images.map((item) => (
                                <div key={item.id} className="break-inside-avoid">
                                    <GalleryCard
                                        item={item}
                                        onClick={() => openLightbox(filtered.indexOf(item))}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {filtered.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        No hay elementos en esta categoría aún.
                    </div>
                )}
            </div>

            {/* ── LIGHTBOX ── */}
            {currentItem && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 sm:p-6"
                    onClick={closeLightbox}
                >
                    {/* Cerrar */}
                    <button
                        className="absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>

                    {/* Anterior */}
                    <button
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 transition-all backdrop-blur-sm"
                        onClick={(e) => { e.stopPropagation(); goPrev() }}
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>

                    {/* Siguiente */}
                    <button
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 transition-all backdrop-blur-sm"
                        onClick={(e) => { e.stopPropagation(); goNext() }}
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>

                    {/* Contenido */}
                    <div
                        className="relative max-w-4xl w-full flex flex-col items-center gap-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {currentItem.type === "image" ? (
                            <div className="relative w-full rounded-xl overflow-hidden border border-white/10">
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
                            <div className="relative w-full rounded-xl overflow-hidden border border-primary/30">
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
                        <div className="text-center px-2">
                            <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-2 ${categoryStyle[currentItem.category]?.badge || ""}`}>
                                {categoryIcons[currentItem.category]}
                                {currentItem.category}
                                <span className="ml-1 opacity-60">·</span>
                                {currentItem.type === "video"
                                    ? <><Video className="w-3 h-3" /> Video</>
                                    : <><Camera className="w-3 h-3" /> Foto</>
                                }
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-white">{currentItem.title}</h3>
                            <p className="text-sm text-white/60 mt-1 max-w-xl leading-relaxed">{currentItem.description}</p>
                            <p className="text-xs text-white/30 mt-2 font-mono">
                                {(lightboxIndex ?? 0) + 1} / {filtered.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
