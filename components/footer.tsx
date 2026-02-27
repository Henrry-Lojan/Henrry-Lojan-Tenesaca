import Link from "next/link"
import { HardHat, Linkedin, Github, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/henrrylojan", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/henrrylojan", label: "GitHub" },
  { icon: Mail, href: "mailto:henrylojan@yahoo.com", label: "Email" },
]

const quickLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Acerca", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Contacto", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow-green-sm transition-all">
                <HardHat className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-lg text-foreground">Henrry Lojan</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Ingeniero Civil especializado en BIM y SIG. 6+ anos de experiencia 
              en gestion de proyectos, estructuras especiales y geomatica aplicada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Enlaces Rapidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Conectar</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 hover:glow-green-sm transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Conectemos y discutamos tu proximo proyecto de ingenieria.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Henrry Lojan. Loja, Ecuador.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Construido con
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10 border border-primary/30 text-xs font-medium text-primary font-mono">
              Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
