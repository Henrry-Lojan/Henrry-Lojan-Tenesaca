"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, ExternalLink, GraduationCap } from "lucide-react"

const education = [
  {
    id: 1,
    name: "Maestria en Geomatica",
    issuer: "ESPOL - Escuela Superior Politecnica del Litoral",
    year: "2024-2026",
    description:
      "Beca Nacional - Programa Hidrocarburos. Enfoque en analisis espacial avanzado y ciencia de datos geoespaciales.",
    highlight: true,
    type: "education",
  },
  {
    id: 2,
    name: "Especializacion en Geoinformacion",
    issuer: "Universidad Tecnica Particular de Loja (UTPL)",
    year: "2025-2026",
    description:
      "Formacion especializada en sistemas de informacion geografica y procesamiento de datos espaciales.",
    highlight: false,
    type: "education",
  },
  {
    id: 3,
    name: "Diplomado BIM Manager",
    issuer: "Universidad Tecnica Particular de Loja (UTPL)",
    year: "2023",
    description:
      "Gestion e implementacion de metodologias BIM en proyectos de construccion.",
    highlight: false,
    type: "education",
  },
  {
    id: 4,
    name: "Ingeniero Civil",
    issuer: "Universidad Tecnica Particular de Loja (UTPL)",
    year: "2013-2018",
    description:
      "Formacion integral en ingenieria civil con enfasis en estructuras y gestion de proyectos.",
    highlight: true,
    type: "education",
  },
]

const certifications = [
  {
    id: 5,
    name: "Autodesk Professional - BIM",
    issuer: "Autodesk",
    year: "200h total",
    description:
      "BIM Project Manager, Revit Structure, Civil 3D, Navisworks, BIM 3D Instalaciones.",
    highlight: true,
    type: "cert",
  },
  {
    id: 6,
    name: "ESRI GIS Specialist",
    issuer: "ESRI",
    year: "40h+ total",
    description:
      "ArcGIS Pro, Spatial Analysis, AI & Deep Learning, Hydrological Analysis.",
    highlight: true,
    type: "cert",
  },
  {
    id: 7,
    name: "Residencia de Obras ACI",
    issuer: "ACI",
    year: "2020",
    description:
      "Certificacion en supervision y control de obras de concreto armado.",
    highlight: false,
    type: "cert",
  },
  {
    id: 8,
    name: "Prevencion de Riesgos Laborales",
    issuer: "SETEC",
    year: "MDT-2118-CCL-268559",
    description:
      "Capacitacion en seguridad y salud ocupacional para obras de construccion.",
    highlight: false,
    type: "cert",
  },
]

const publications = [
  {
    id: 9,
    name: "Mining in the Southern Ecuadorian Amazon",
    issuer: "IGARSS 2026 (Aceptado)",
    year: "2026",
    description:
      "Territorial Transformation and Biodiversity Loss. Lojan-Tenesaca, H. et al.",
    highlight: true,
    type: "publication",
  },
  {
    id: 10,
    name: "Spatial Analysis of Mining Intensity",
    issuer: "ISPRS Symposium 2026 (Aceptado)",
    year: "2026",
    description:
      "Buffer Zones of Protected Areas. Lojan-Tenesaca, H. et al.",
    highlight: true,
    type: "publication",
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
            Educacion y Certificaciones
          </h2>
          <p className="text-muted-foreground text-lg">
            Formacion academica y certificaciones profesionales que demuestran compromiso 
            con la excelencia y el aprendizaje continuo.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Formacion Academica</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item) => (
              <Card
                key={item.id}
                className={`bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover ${
                  item.highlight ? "border-primary/30 glow-green-sm" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        item.highlight
                          ? "bg-primary text-primary-foreground glow-green"
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
                        {item.highlight && (
                          <Badge className="shrink-0 text-xs bg-primary/10 text-primary border-primary/30">
                            Destacado
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
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className={`bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover ${
                  cert.highlight ? "border-primary/30 glow-green-sm" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        cert.highlight
                          ? "bg-primary text-primary-foreground glow-green"
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
                        {cert.highlight && (
                          <Badge className="shrink-0 text-xs bg-primary/10 text-primary border-primary/30">
                            Clave
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="font-medium text-primary font-mono">
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
              <ExternalLink className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Produccion Cientifica</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub) => (
              <Card
                key={pub.id}
                className="bg-card border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 card-hover"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-purple-500/20 text-purple-400">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1">
                        {pub.name}
                      </h4>
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
      </div>
    </section>
  )
}
