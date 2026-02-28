/**
 * Retorna la ruta correcta de una imagen incluyendo el basePath
 * Necesario para GitHub Pages donde las rutas son /Henrry-Lojan-Tenesaca/images/...
 */
export function imgPath(src: string): string {
    const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
    return `${base}${src}`
}
