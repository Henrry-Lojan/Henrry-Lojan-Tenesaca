"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
    Briefcase,
    Calendar,
    MapPin,
    ChevronDown,
    ChevronUp,
    Building2,
    HardHat,
    Globe,
    Compass,
} from "lucide-react"

const experiences = [
    {
        id: 1,
        role: "Ingeniero de Topografía / Control Geométrico",
        company: "Consorcio Puentes del Ecuador",
        period: "Jun 2025 – Ago 2025",
        location: "Francisco de Orellana, Ecuador",
        type: "Contrato",
        icon: Compass,
        color: "accent",
        current: false,
        highlights: [
            "Control topográfico de precisión con equipos GNSS/RTK y estaciones totales para el Puente Río Condor",
            "Implementación de red geodésica para replanteo y control geométrico en todas las fases constructivas",
            "Aplicación de metodología de resección múltiple, incrementando eficiencia operativa en 20%",
            "Generación de modelos digitales del terreno y perfiles longitudinales/transversales con Civil 3D",
        ],
        technologies: ["GNSS/RTK", "Estación Total", "Civil 3D", "AutoCAD", "Post-procesamiento GPS"],
    },
    {
        id: 2,
        role: "Residente de Obra / Especialista BIM",
        company: "Velsa & Cía",
        period: "2019 – 2024",
        location: "Loja, Ecuador",
        type: "Tiempo Completo",
        icon: HardHat,
        color: "primary",
        current: false,
        highlights: [
            "Gestión del ciclo completo de 15+ edificios multifamiliares (14,819 m² construidos) con presupuesto total de $4.8M+",
            "Implementación de metodología BIM en edificios Alarife (3,034 m²), Bo, y Bhoga (1,018 m²)",
            "Diseño y supervisión de estructuras especiales: caissons hasta 18m, pilotes 13m, muros anclados 12m",
            "Coordinación BIM multidisciplinaria (arquitectura, estructuras, MEP) con reducción de desviaciones al 15%",
            "Sistemas de agua potable y alcantarillado para conjuntos habitacionales",
            "Control de calidad, seguridad ocupacional y gestión de contratos con contratistas",
        ],
        technologies: ["Revit", "SAP2000", "ETABS", "Navisworks", "Civil 3D", "AutoCAD", "MS Project"],
    },
    {
        id: 4,
        role: "Maestrante en Geomática (Beca Nacional)",
        company: "ESPOL - Escuela Superior Politécnica del Litoral",
        period: "2024 – Presente",
        location: "Guayaquil, Ecuador (Remote)",
        type: "Investigación",
        icon: Globe,
        color: "purple",
        current: true,
        highlights: [
            "Beca otorgada por el Programa Nacional de Becas Hidrocarburos",
            "Investigación en análisis geoespacial de transformación territorial minera en la Amazonía Ecuatoriana",
            "Publicación aceptada en IGARSS 2026: 'Mining in the Southern Ecuadorian Amazon'",
            "Publicación aceptada en ISPRS Symposium 2026: 'Spatial Analysis of Mining Intensity in Buffer Zones'",
            "Aplicación de Deep Learning y AI para análisis de imágenes satelitales con ArcGIS Pro",
        ],
        technologies: ["ArcGIS Pro", "Python", "R", "PostGIS", "Google Earth Engine", "QGIS"],
    },
]

const colorMap: Record<string, { bg: string; border: string; text: string; line: string }> = {
    primary: {
        bg: "bg-primary/10",
        border: "border-primary/30",
        text: "text-primary",
        line: "bg-primary/30",
    },
    accent: {
        bg: "bg-accent/10",
        border: "border-accent/30",
        text: "text-accent",
        line: "bg-accent/30",
    },
    purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        text: "text-purple-400",
        line: "bg-purple-500/30",
    },
}

export function ExperienceSection() {
    const [expandedId, setExpandedId] = useState<number | null>(2)

    return (
        <section id="experience" className="py-20 lg:py-32 bg-card/30">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 mb-4">
                        Trayectoria
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                        Experiencia Profesional
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        6+ años construyendo infraestructura de calidad y expandiendo fronteras
                        en geomática e investigación aplicada.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                    <div className="space-y-6">
                        {experiences.map((exp) => {
                            const colors = colorMap[exp.color]
                            const isExpanded = expandedId === exp.id
                            const Icon = exp.icon

                            return (
                                <div key={exp.id} className="relative md:pl-20">
                                    {/* Timeline dot */}
                                    <div
                                        className={`absolute left-5 top-7 w-6 h-6 rounded-full border-2 ${colors.border} ${colors.bg} hidden md:flex items-center justify-center z-10`}
                                    >
                                        <div className={`w-2 h-2 rounded-full ${exp.current ? "animate-ping" : ""} ${colors.text.replace("text-", "bg-")}`} />
                                    </div>

                                    <Card
                                        className={`bg-card border-border hover:${colors.border} transition-all duration-300 cursor-pointer ${isExpanded ? `${colors.border} shadow-lg` : ""
                                            } card-hover`}
                                        onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                                    >
                                        <CardContent className="p-6">
                                            {/* Header Row */}
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-start gap-4 flex-1">
                                                    <div
                                                        className={`shrink-0 w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}
                                                    >
                                                        <Icon className={`w-6 h-6 ${colors.text}`} />
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 flex-wrap mb-1">
                                                            <h3 className="font-semibold text-foreground text-lg leading-tight">
                                                                {exp.role}
                                                            </h3>
                                                            {exp.current && (
                                                                <Badge className="text-xs bg-primary/10 text-primary border-primary/30 shrink-0">
                                                                    Actual
                                                                </Badge>
                                                            )}
                                                        </div>

                                                        <p className={`font-medium ${colors.text} font-mono text-sm mb-2`}>
                                                            {exp.company}
                                                        </p>

                                                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                                                            <span className="flex items-center gap-1">
                                                                <Calendar className="w-3.5 h-3.5" />
                                                                {exp.period}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <MapPin className="w-3.5 h-3.5" />
                                                                {exp.location}
                                                            </span>
                                                            <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                                                                {exp.type}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button className="shrink-0 text-muted-foreground hover:text-primary transition-colors mt-1">
                                                    {isExpanded ? (
                                                        <ChevronUp className="w-5 h-5" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5" />
                                                    )}
                                                </button>
                                            </div>

                                            {/* Expanded Content */}
                                            {isExpanded && (
                                                <div className="mt-6 pt-6 border-t border-border/50 space-y-4 animate-fade-in-up">
                                                    {/* Highlights */}
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                                                            <Briefcase className="w-4 h-4 text-primary" />
                                                            Logros y Responsabilidades
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {exp.highlights.map((highlight, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.text.replace("text-", "bg-")}`} />
                                                                    {highlight}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Technologies */}
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-foreground mb-2">
                                                            Herramientas y Tecnologías
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map((tech) => (
                                                                <Badge
                                                                    key={tech}
                                                                    variant="outline"
                                                                    className={`text-xs ${colors.border} ${colors.text} ${colors.bg}`}
                                                                >
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
