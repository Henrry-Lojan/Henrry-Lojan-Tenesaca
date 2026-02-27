import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains"
});

export const metadata: Metadata = {
  title: 'Henrry Lojan | Ingeniero Civil & Especialista GIS',
  description: 'Ingeniero Civil con Maestria en Geomatica. Especializado en infraestructura, BIM, GIS y proyectos de construccion. Loja, Ecuador.',
  keywords: ['ingeniero civil', 'geomatica', 'gis', 'bim', 'infraestructura', 'construccion', 'loja', 'ecuador'],
  authors: [{ name: 'Henrry Lojan' }],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Henrry Lojan | Ingeniero Civil & Especialista GIS',
    description: 'Ingeniero Civil con Maestria en Geomatica. Especializado en infraestructura, BIM, GIS y proyectos de construccion.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a365d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${poppins.className} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
