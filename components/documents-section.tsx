"use client"

import { Badge } from "@/components/ui/badge"
import { imgPath } from "@/lib/img-path"
import { FileText, Map, Download, ExternalLink, BookOpen, Layers } from "lucide-react"

const docs = [
    {
        id: 1,
        title: "Clasificación Supervisada de Imágenes Satelitales",
        description:
            "Análisis de clasificación supervisada de cobertura y uso de suelo en la Amazonía Ecuatoriana mediante teledetección con ArcGIS Pro y Python.",
        file: "/docs/clasificacion-supervisada.pdf",
        type: "Publicación Científica",
        icon: BookOpen,
        color: {
            bg: "bg-purple-500/10",
            border: "border-purple-500/30",
            icon: "bg-purple-500/20 text-purple-400 border-purple-500/30",
            badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
            btn: "bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/30",
            glow: "from-purple-500/20",
        },
        tags: ["ArcGIS Pro", "Teledetección", "Python", "Machine Learning"],
    },
    {
        id: 2,
        title: "Mapa de Ubicación – Ríos Zamora y Nangaritza",
        description:
            "Cartografía de los ríos Zamora y Nangaritza con análisis de cuencas hidrográficas y delimitación de áreas de influencia en la Amazonía Sur del Ecuador.",
        file: "/docs/mapa-rios.pdf",
        type: "Cartografía GIS",
        icon: Map,
        color: {
            bg: "bg-blue-500/10",
            border: "border-blue-500/30",
            icon: "bg-blue-500/20 text-blue-400 border-blue-500/30",
            badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
            btn: "bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border-blue-500/30",
            glow: "from-blue-500/20",
        },
        tags: ["QGIS", "Cuencas Hidrográficas", "SIG", "Hidrología"],
    },
    {
        id: 3,
        title: "Mapa de Ubicación – Predios",
        description:
            "Mapa catastral de predios con análisis espacial de tenencia de tierra, delimitación de linderos y georreferenciación de propiedades.",
        file: "/docs/mapa-predios.pdf",
        type: "Cartografía GIS",
        icon: Layers,
        color: {
            bg: "bg-teal-500/10",
            border: "border-teal-500/30",
            icon: "bg-teal-500/20 text-teal-400 border-teal-500/30",
            badge: "bg-teal-500/15 text-teal-300 border-teal-500/30",
            btn: "bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border-teal-500/30",
            glow: "from-teal-500/20",
        },
        tags: ["ArcGIS", "Catastro", "Georreferenciación", "Predios"],
    },
    {
        id: 4,
        title: "Mapa de Ubicación – Zamora Chinchipe",
        description:
            "Cartografía provincial de Zamora Chinchipe con análisis territorial, infraestructura vial, cobertura vegetal y puntos de interés geoespacial.",
        file: "/docs/mapa-zamora.pdf",
        type: "Cartografía GIS",
        icon: Map,
        color: {
            bg: "bg-green-500/10",
            border: "border-green-500/30",
            icon: "bg-green-500/20 text-green-400 border-green-500/30",
            badge: "bg-green-500/15 text-green-300 border-green-500/30",
            btn: "bg-green-500/20 hover:bg-green-500/30 text-green-300 border-green-500/30",
            glow: "from-green-500/20",
        },
        tags: ["QGIS", "Zamora Chinchipe", "Territorio", "Planificación"],
    },
]

export function DocumentsSection() {
    return (
        <section id="documents" className="py-16 lg:py-28 relative overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
                    <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 mb-3 text-xs tracking-widest uppercase">
                        Documentos
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        Mapas & Publicaciones
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        Producción cartográfica y científica en análisis geoespacial,
                        teledetección y gestión territorial.
                    </p>
                </div>

                {/* Grid de documentos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
                    {docs.map((doc) => {
                        const Icon = doc.icon
                        return (
                            <div
                                key={doc.id}
                                className={`group relative flex flex-col rounded-2xl border ${doc.color.border} ${doc.color.bg} overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10`}
                            >
                                {/* Franja decorativa superior */}
                                <div className={`h-1 w-full bg-gradient-to-r ${doc.color.glow} to-transparent`} />

                                <div className="p-5 flex flex-col flex-1 gap-4">
                                    {/* Cabecera */}
                                    <div className="flex items-start gap-4">
                                        {/* Ícono */}
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${doc.color.icon} transition-transform group-hover:scale-110 duration-300`}>
                                            <Icon className="w-6 h-6" />
                                        </div>

                                        {/* Tipo + Título */}
                                        <div className="flex-1 min-w-0">
                                            <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border mb-1.5 ${doc.color.badge}`}>
                                                {doc.type}
                                            </span>
                                            <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                                                {doc.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Descripción */}
                                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                        {doc.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {doc.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-0.5 rounded-md bg-card/60 text-muted-foreground border border-border"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Botones */}
                                    <div className="flex gap-2 pt-1">
                                        {/* Ver PDF */}
                                        <a
                                            href={imgPath(doc.file)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${doc.color.btn}`}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>Ver PDF</span>
                                        </a>

                                        {/* Descargar */}
                                        <a
                                            href={imgPath(doc.file)}
                                            download
                                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 text-sm font-semibold text-muted-foreground hover:text-foreground transition-all duration-200"
                                            title="Descargar PDF"
                                        >
                                            <Download className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Nota al pie */}
                <div className="flex items-center justify-center gap-2 mt-10 text-xs text-muted-foreground/60">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Documentos en formato PDF · Elaborados con ArcGIS Pro y QGIS</span>
                </div>
            </div>
        </section>
    )
}
