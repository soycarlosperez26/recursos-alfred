// ============================================================================
// Config central de herramientas.
// Aquí se van agregando los detalles de cada herramienta a medida que se
// construyen. Cada cambio queda registrado en el historial de git.
//
// Regla de visibilidad:
//   - status: "draft"     -> solo visible en local y staging (nunca en prod).
//   - status: "published" -> visible en todos los entornos, incluida prod.
//
// La landing en producción SOLO debe promocionar herramientas "published"
// (ya construidas y con demo lista). No cambies una herramienta a
// "published" hasta que hasDemo sea true y demoUrl funcione.
// ============================================================================

export type ToolStatus = "draft" | "published";

export type PricingTier = "Gratis" | "Freemium" | "Premium";

export type ToolCategory =
  | "Recursos Humanos"
  | "Inteligencia Artificial"
  | "Productividad"
  | "Logística"
  | "Desarrollo";

export interface Tool {
  /** Identificador único, kebab-case. Se usa como slug y como key de tracking. */
  id: string;
  name: string;
  description: string;
  /** "draft" = solo local/staging. "published" = también en producción. */
  status: ToolStatus;
  /** true si existe una demo funcional para mostrar al usuario. */
  hasDemo: boolean;
  /** URL de la demo. Debe existir si hasDemo es true. */
  demoUrl?: string;
  /**
   * Imagen principal de la tarjeta. Ruta dentro de /public,
   * ej: "/tools/control-asistencia/cover.png". Si queda "" se usa el
   * icono de respaldo (campo `icon`) en la tarjeta.
   */
  picture: string;
  /** Screenshots adicionales, para una futura vista de detalle por herramienta. */
  gallery: string[];
  /** Calificación mostrada al usuario, de 0 a 5. Usa 0 mientras no haya reseñas reales. */
  rate: number;
  /**
   * Descripción extendida para el modal de "más información". Opcional:
   * si no se define, el modal reutiliza `description`.
   */
  longDescription?: string;
  /** Lista de features/beneficios mostrados como checklist en el modal de detalle. Opcional. */
  features?: string[];

  // -- Campos adicionales (no pedidos explícitamente, pero necesarios para
  // no perder funcionalidad que ya tenía la landing) --

  /** Categoría bajo la que se agrupa en la landing. */
  category: ToolCategory;
  /** Icono de lucide-astro, usado como respaldo visual cuando no hay `picture`. */
  icon: string;
  /** Nivel de precio mostrado como badge (reemplaza el viejo campo "estado"). */
  pricingTier: PricingTier;
  /** Mensaje pre-cargado del botón de WhatsApp, específico por herramienta, para medir interés real por herramienta. */
  whatsappMessage: string;
  /** Orden manual dentro de la categoría (menor = primero). Opcional. */
  order?: number;
}

export const CATEGORY_META: Record<ToolCategory, { descripcion: string; icon: string }> = {
  "Recursos Humanos": {
    descripcion:
      "Automatiza la gestión de personal de tu pyme: asistencia, nómina y turnos sin hojas de cálculo interminables.",
    icon: "Users",
  },
  "Inteligencia Artificial": {
    descripcion:
      "Herramientas con IA para que tu empresa procese información y documentos en segundos, no en días.",
    icon: "Bot",
  },
  Productividad: {
    descripcion: "Utilidades para el trabajo diario de tu empresa, sin instalar software adicional.",
    icon: "Zap",
  },
  Logística: {
    descripcion:
      "Soluciones pensadas para empresas de transporte, comercio e inventario en la Costa Caribe.",
    icon: "Truck",
  },
  Desarrollo: {
    descripcion: "Utilidades técnicas para equipos de desarrollo y áreas de sistemas.",
    icon: "Code2",
  },
};

export const tools: Tool[] = [
  // ---------------------------------------------------------------------
  // PUBLICADAS (listas y con demo)
  // ---------------------------------------------------------------------
  {
    id: "control-asistencia",
    name: "Control de Asistencia",
    description: "Registra entradas y salidas de empleados de forma automática.",
    status: "published",
    hasDemo: true,
    demoUrl: "https://labortime.recursosalfred.online/",
    picture: "images/tools/labortime/logo.png",
    gallery: [
      "images/tools/labortime/dashboard0.png",
      "images/tools/labortime/Login0.png",
      "images/tools/labortime/register0.png"
    ],
    rate: 0,
    category: "Recursos Humanos",
    icon: "Clock",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, estoy interesado en la herramienta Control de Asistencia.",
  }
];

/**
 * Entorno de la app. En Vercel (u otro host), define la variable de entorno
 * PUBLIC_APP_ENV="production" solo en el deploy de producción. Sin esa
 * variable, se asume "production" cuando el build es de producción
 * (import.meta.env.PROD) y "development" en local/staging.
 */
function getAppEnv(): "production" | "development" {
  const explicit = import.meta.env.PUBLIC_APP_ENV;
  if (explicit === "production" || explicit === "staging" || explicit === "development") {
    return explicit === "production" ? "production" : "development";
  }
  return import.meta.env.PROD ? "production" : "development";
}

/** true si la herramienta debe mostrarse en el entorno actual. */
export function isToolVisible(tool: Tool): boolean {
  if (tool.status === "published") return true;
  return getAppEnv() !== "production";
}

/** Herramientas visibles en el entorno actual, ordenadas por categoría y `order`. */
export function getVisibleTools(): Tool[] {
  return tools
    .filter(isToolVisible)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

/** Herramientas visibles agrupadas por categoría, en el orden de CATEGORY_META. */
export function getVisibleToolsByCategory(): { category: ToolCategory; meta: (typeof CATEGORY_META)[ToolCategory]; tools: Tool[] }[] {
  const visible = getVisibleTools();
  return (Object.keys(CATEGORY_META) as ToolCategory[])
    .map((category) => ({
      category,
      meta: CATEGORY_META[category],
      tools: visible.filter((t) => t.category === category),
    }))
    .filter((group) => group.tools.length > 0);
}

/** Cantidad de herramientas publicadas (listas y en producción), para stats en la UI. */
export function getPublishedToolsCount(): number {
  return tools.filter((t) => t.status === "published").length;
}
