// Configuración central del sitio. Actualiza estos valores antes de publicar.

export const SITE = {
  name: "Recursos Alfred",
  domain: "recursosalfred.online",
  url: "https://recursosalfred.online",
  gtmId: "GTM-K8RM895W",
  whatsappNumber: "573044775117",
  email: "contacto@recursosalfred.online",
  linkedin: "https://www.linkedin.com/company/recursos-alfred",
  github: "https://github.com/recursos-alfred",
  region: "Costa Caribe, Colombia",
  ciudades: [
    "Barranquilla",
    "Cartagena",
    "Santa Marta",
    "Montería",
    "Valledupar",
    "Sincelejo",
    "Riohacha",
  ],
} as const;

export function buildWhatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`;
}
