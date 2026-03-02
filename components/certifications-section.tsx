"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, ExternalLink, GraduationCap, BookOpen, FlaskConical } from "lucide-react"

const education = [
  {
    id: 1,
    name: "Maestría en Geomática",
    issuer: "ESPOL - Escuela Superior Politécnica del Litoral",
    year: "2024 – 2026",
    description:
      "Beca Nacional - Programa Hidrocarburos. Enfoque en análisis espacial avanzado, teledetección, inteligencia artificial aplicada a datos geoespaciales y ciencia de datos aplicada a ingeniería.",
    highlight: true,
    type: "education",
    badge: "Beca Nacional",
  },
  {
    id: 2,
    name: "Especialización en Geoinformación",
    issuer: "Universidad Técnica Particular de Loja (UTPL)",
    year: "2025 – 2026",
    description:
      "Formación especializada en sistemas de información geográfica, procesamiento de datos espaciales y aplicaciones de geoinformación en ingeniería civil.",
    highlight: false,
    type: "education",
    badge: null,
  },
  {
    id: 3,
    name: "Diplomado BIM Manager",
    issuer: "Universidad Técnica Particular de Loja (UTPL)",
    year: "2023",
    description:
      "Gestión e implementación de metodologías BIM en proyectos de construcción. Coordinación multidisciplinaria, clash detection y LOD 400.",
    highlight: false,
    type: "education",
    badge: null,
  },
  {
    id: 4,
    name: "Ingeniero Civil",
    issuer: "Universidad Técnica Particular de Loja (UTPL)",
    year: "2013 – 2018",
    description:
      "Formación integral en ingeniería civil con énfasis en estructuras, geotecnia y gestión de proyectos. SENESCYT: 1031-2018-2021611.",
    highlight: true,
    type: "education",
    badge: "Título Profesional",
  },
]

const certifications = [
  {
    id: 5,
    name: "Autodesk Professional Certification Package",
    issuer: "Autodesk",
    year: "200h total",
    description:
      "BIM Project Manager · Revit Structure · Civil 3D · Navisworks · BIM 3D Instalaciones · AutoCAD. Certificaciones oficiales Autodesk.",
    highlight: true,
    type: "cert",
    badge: "Certificado Oficial",
  },
  {
    id: 6,
    name: "ESRI GIS Specialist",
    issuer: "ESRI (Environmental Systems Research Institute)",
    year: "40h+",
    description:
      "ArcGIS Pro Essentials · Spatial Analysis · AI & Deep Learning for GIS · Hydrological Analysis · ArcGIS StoryMaps. Certificaciones oficiales ESRI.",
    highlight: true,
    type: "cert",
    badge: "Certificado Oficial",
  },
  {
    id: 7,
    name: "Residencia de Obras - ACI",
    issuer: "American Concrete Institute (ACI)",
    year: "2020",
    description:
      "Certificación en supervisión, inspección y control de calidad en obras de concreto armado según normas ACI 318.",
    highlight: false,
    type: "cert",
    badge: null,
  },
  {
    id: 8,
    name: "Prevención de Riesgos Laborales",
    issuer: "SETEC - Secretaría Técnica del SETED",
    year: "MDT-2118-CCL-268559",
    description:
      "Capacitación en seguridad y salud ocupacional para obras de construcción. Identificación de riesgos, EPP y planes de contingencia.",
    highlight: false,
    type: "cert",
    badge: null,
  },
  {
    id: 9,
    name: "Lean Construction & Calidad",
    issuer: "Instituto Técnico Superior",
    year: "2021",
    description:
      "Metodologías de construcción Lean: Last Planner System, reducción de desperdicios, planificación colaborativa y control de calidad.",
    highlight: false,
    type: "cert",
    badge: null,
  },
  {
    id: 10,
    name: "Python para Ingeniería Civil",
    issuer: "Coursera / Udemy",
    year: "2023-2024",
    description:
      "Análisis de datos con Pandas y NumPy, automatización CAD con Python, procesamiento de datos geoespaciales con GeoPandas/Shapely.",
    highlight: false,
    type: "cert",
    badge: null,
  },
]

const publications = [
  {
    id: 11,
    name: "Mining in the Southern Ecuadorian Amazon",
    issuer: "IGARSS 2026 – IEEE (Aceptado)",
    year: "2026",
    description:
      "Territorial Transformation and Biodiversity Loss using multi-temporal satellite imagery and ML classification. Lojan-Tenesaca, H. et al. – Presentación oral aprobada.",
    highlight: true,
    url: null,
  },
  {
    id: 12,
    name: "Spatial Analysis of Mining Intensity in Buffer Zones",
    issuer: "ISPRS Symposium 2026 (Aceptado)",
    year: "2026",
    description:
      "Buffer Zones of Protected Areas in the Ecuadorian Amazon. Multi-scale spatial analysis with ArcGIS Pro and Google Earth Engine. Lojan-Tenesaca, H. et al.",
    highlight: true,
    url: null,
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 mb-4">
            Credenciales
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Educación y Certificaciones
          </h2>
          <p className="text-muted-foreground text-lg">
            Formación académica y certificaciones profesionales que demuestran
            compromiso con la excelencia y el aprendizaje continuo.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Formación Académica</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item) => (
              <Card
                key={item.id}
                className={`bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover ${item.highlight ? "border-primary/30 glow-teal-sm" : ""
                  }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${item.highlight
                        ? "bg-primary text-primary-foreground glow-teal"
                        : "bg-secondary border border-border text-muted-foreground"
                        }`}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-semibold text-foreground">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <Badge className="shrink-0 text-xs bg-primary/10 text-primary border-primary/30">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-primary font-mono text-xs">
                          {item.issuer}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.year}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
              <Award className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Certificaciones Profesionales</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className={`bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover ${cert.highlight ? "border-primary/30 glow-teal-sm" : ""
                  }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${cert.highlight
                        ? "bg-primary text-primary-foreground glow-teal"
                        : "bg-secondary border border-border text-muted-foreground"
                        }`}
                    >
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-semibold text-foreground">
                          {cert.name}
                        </h4>
                        {cert.badge && (
                          <Badge className="shrink-0 text-xs bg-primary/10 text-primary border-primary/30">
                            {cert.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-primary font-mono text-xs">
                          {cert.issuer}
                        </span>
                        <span className="flex items-center gap-1 text-xs">
                          <Calendar className="w-3.5 h-3.5" />
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Producción Científica</h3>
              <p className="text-sm text-muted-foreground">Publicaciones académicas indexadas</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub) => (
              <Card
                key={pub.id}
                className="bg-card border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 card-hover glow-teal-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-purple-500/20 text-purple-400">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 mb-1 flex-wrap">
                        <h4 className="font-semibold text-foreground">
                          {pub.name}
                        </h4>
                        <Badge className="shrink-0 text-xs bg-purple-500/10 text-purple-400 border-purple-500/30">
                          Aceptado
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-purple-400 font-mono text-xs">
                          {pub.issuer}
                        </span>
                        <span className="flex items-center gap-1 text-xs">
                          <Calendar className="w-3.5 h-3.5" />
                          {pub.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {pub.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* ── Documentos descargables ── */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-1">📄 Documentos Oficiales</h3>
              <p className="text-sm text-muted-foreground">
                Descarga mi Hoja de Vida completa y el Anexo de Certificaciones con los respaldos de mis credenciales profesionales.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1qQVsvnN7ptf9f7D--IzT3iy9A0czMD_z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-primary/30"
              >
                <ExternalLink className="w-4 h-4" />
                Hoja de Vida
              </a>
              <a
                href="https://drive.google.com/file/d/1V_84JN8N1LLu7DAToIEefC_2BNJFjZzw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 bg-card hover:bg-primary/10 hover:border-primary/60 text-sm font-semibold text-foreground transition-all duration-200"
              >
                <Award className="w-4 h-4 text-primary" />
                Anexo Certificaciones
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
