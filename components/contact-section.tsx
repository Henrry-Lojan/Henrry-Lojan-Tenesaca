"use client"

import React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  CheckCircle,
  Loader2,
  Github,
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "henrylojan@yahoo.com",
    href: "mailto:henrylojan@yahoo.com",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+593 995 970 220",
    href: "tel:+593995970220",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Loja, Ecuador",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/henrrylojan",
    href: "https://linkedin.com/in/henrrylojan",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/henrrylojan",
    href: "https://github.com/henrrylojan",
  },
]

const subjectOptions = [
  { value: "proyecto", label: "Nuevo Proyecto de Ingenieria" },
  { value: "consultoria", label: "Consultoria BIM/SIG" },
  { value: "colaboracion", label: "Colaboracion Profesional" },
  { value: "otro", label: "Otro" },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 mb-4">
            Contacto
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Trabajemos Juntos
          </h2>
          <p className="text-muted-foreground text-lg">
            Tienes un proyecto en mente? Me encantaria saber de el. Enviame un
            mensaje y discutamos como podemos colaborar.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/30 transition-all">
              <CardContent className="p-6 lg:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 glow-green">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Mensaje Enviado!
                    </h3>
                    <p className="text-muted-foreground">
                      Gracias por contactarme. Te respondere lo antes posible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">Nombre *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50 border-border focus:border-primary/50 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-secondary/50 border-border focus:border-primary/50 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">Asunto *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, subject: value }))
                        }
                      >
                        <SelectTrigger className="bg-secondary/50 border-border focus:border-primary/50 focus:ring-primary/20">
                          <SelectValue placeholder="Selecciona una opcion" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {subjectOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Mensaje *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Cuentame sobre tu proyecto..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary/50 focus:ring-primary/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full glow-green hover:scale-[1.02] transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group card-hover">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:glow-green transition-all">
                        <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5 font-mono">
                          {info.label}
                        </div>
                        <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Availability Card */}
            <Card className="bg-primary/5 border-primary/30">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    Actualmente Disponible
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Abierto para proyectos de ingenieria civil, consultoria BIM/SIG 
                  y colaboraciones profesionales.
                </p>
              </CardContent>
            </Card>

            {/* Registros Profesionales */}
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-5">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 font-mono">
                  Registros Profesionales
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>SENESCYT: 1031-2018-2021611</p>
                  <p>GAD Loja: 3089</p>
                  <p>GAD Catamayo: 6022</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
