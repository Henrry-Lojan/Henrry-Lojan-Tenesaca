"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Download, HardHat } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Acerca", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Galería", href: "#gallery" },
  { label: "Habilidades", href: "#skills" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Contacto", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-teal-sm group-hover:bg-primary/20 transition-all">
              <HardHat className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-none block">
                Henrry Lojan
              </span>
              <span className="text-xs text-muted-foreground font-mono">Ing. Civil | BIM & GIS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button asChild className="glow-teal-sm hover:glow-teal transition-all">
              <a href="/henrry-lojan-cv.pdf" download="CV_Henrry_Lojan.pdf">
                <Download className="w-4 h-4" />
                Descargar CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="w-5 h-5 text-primary" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background border-primary/20">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 glow-teal-sm">
                  <a href="/henrry-lojan-cv.pdf" download="CV_Henrry_Lojan.pdf">
                    <Download className="w-4 h-4" />
                    Descargar CV
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
