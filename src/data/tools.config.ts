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
    demoUrl: "https://asistencia-operativa.vercel.app/",
    picture: "",
    gallery: [],
    rate: 0,
    category: "Recursos Humanos",
    icon: "Clock",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, estoy interesado en la herramienta Control de Asistencia.",
  },

  // ---------------------------------------------------------------------
  // BORRADOR / EN CONSTRUCCIÓN (roadmap interno, no se promocionan en prod
  // hasta que status pase a "published" y tengan demo real)
  // ---------------------------------------------------------------------
  {
    id: "calculadora-horas-extras",
    name: "Calculadora de Horas Extras",
    description: "Calcula recargos y horas extra según la ley laboral colombiana.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Recursos Humanos",
    icon: "Calculator",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, quiero información sobre la Calculadora de Horas Extras.",
  },
  {
    id: "liquidaciones",
    name: "Liquidaciones",
    description: "Genera liquidaciones de nómina de forma rápida y sin errores.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Recursos Humanos",
    icon: "Receipt",
    pricingTier: "Premium",
    whatsappMessage: "Hola, deseo cotizar la herramienta de Liquidaciones.",
  },
  {
    id: "gestion-vacaciones",
    name: "Gestión de Vacaciones",
    description: "Controla solicitudes y saldos de vacaciones de tu equipo.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Recursos Humanos",
    icon: "CalendarCheck",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, quiero información sobre Gestión de Vacaciones.",
  },
  {
    id: "turnos-trabajo",
    name: "Turnos de Trabajo",
    description: "Organiza turnos y horarios de tu personal en minutos.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Recursos Humanos",
    icon: "CalendarDays",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, quiero más información sobre la herramienta de Turnos de Trabajo.",
  },
  {
    id: "chat-documentos",
    name: "Chat con Documentos",
    description: "Consulta tus documentos empresariales con lenguaje natural.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Inteligencia Artificial",
    icon: "MessageSquareText",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, estoy interesado en la herramienta Chat con Documentos.",
  },
  {
    id: "ocr-documentos",
    name: "OCR de Documentos",
    description: "Digitaliza facturas y documentos físicos automáticamente.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Inteligencia Artificial",
    icon: "ScanText",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, estoy interesado en la herramienta OCR.",
  },
  {
    id: "resumidor-pdf",
    name: "Resumidor de PDF",
    description: "Obtén resúmenes claros de contratos y reportes extensos.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Inteligencia Artificial",
    icon: "FileText",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, quiero información sobre el Resumidor de PDF.",
  },
  {
    id: "clasificador-automatico",
    name: "Clasificador Automático",
    description: "Organiza correos, facturas y documentos por categoría sin esfuerzo.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Inteligencia Artificial",
    icon: "Tags",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, quiero información sobre el Clasificador Automático.",
  },
  {
    id: "extraccion-datos",
    name: "Extracción de Datos",
    description: "Extrae datos clave de documentos y cárgalos a tu sistema.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Inteligencia Artificial",
    icon: "Database",
    pricingTier: "Premium",
    whatsappMessage: "Hola, deseo cotizar la herramienta de Extracción de Datos.",
  },
  {
    id: "firmar-pdf",
    name: "Firmar PDF",
    description: "Firma documentos digitalmente desde cualquier dispositivo.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Productividad",
    icon: "PenLine",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, estoy interesado en la herramienta Firmar PDF.",
  },
  {
    id: "unir-pdf",
    name: "Unir PDF",
    description: "Combina varios archivos PDF en un solo documento.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Productividad",
    icon: "Files",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, estoy interesado en la herramienta Unir PDF.",
  },
  {
    id: "dividir-pdf",
    name: "Dividir PDF",
    description: "Separa un PDF extenso en varios archivos más pequeños.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Productividad",
    icon: "Scissors",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, estoy interesado en la herramienta Dividir PDF.",
  },
  {
    id: "generador-qr",
    name: "Generador QR",
    description: "Crea códigos QR para tu negocio en segundos.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Productividad",
    icon: "QrCode",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, estoy interesado en el Generador QR.",
  },
  {
    id: "conversor-archivos",
    name: "Conversor de Archivos",
    description: "Convierte documentos, imágenes y hojas de cálculo entre formatos.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Productividad",
    icon: "RefreshCw",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, quiero información sobre el Conversor de Archivos.",
  },
  {
    id: "comparador-excel",
    name: "Comparador de Excel",
    description: "Compara inventarios y bases de datos en Excel sin errores manuales.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Logística",
    icon: "Table",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, estoy interesado en el Comparador de Excel.",
  },
  {
    id: "validador-documentos",
    name: "Validador de Documentos",
    description: "Valida guías, facturas y documentos de transporte automáticamente.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Logística",
    icon: "ShieldCheck",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, quiero información sobre el Validador de Documentos.",
  },
  {
    id: "importador-inventario",
    name: "Importador de Inventario",
    description: "Carga masiva de inventario desde Excel a tu sistema.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Logística",
    icon: "PackageSearch",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, quiero información sobre el Importador de Inventario.",
  },
  {
    id: "generador-reportes",
    name: "Generador de Reportes",
    description: "Crea reportes logísticos automáticos y listos para compartir.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Logística",
    icon: "BarChart3",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, quiero más información sobre el Generador de Reportes.",
  },
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Formatea y valida JSON al instante.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Desarrollo",
    icon: "Braces",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, estoy interesado en el JSON Formatter.",
  },
  {
    id: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decodifica y analiza tokens JWT de forma segura.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Desarrollo",
    icon: "KeyRound",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, estoy interesado en el JWT Decoder.",
  },
  {
    id: "base64",
    name: "Base64",
    description: "Codifica y decodifica texto y archivos en Base64.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Desarrollo",
    icon: "Binary",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, estoy interesado en la herramienta Base64.",
  },
  {
    id: "xml-converter",
    name: "XML Converter",
    description: "Convierte entre XML, JSON y CSV sin esfuerzo.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Desarrollo",
    icon: "FileCode2",
    pricingTier: "Gratis",
    whatsappMessage: "Hola, estoy interesado en el XML Converter.",
  },
  {
    id: "api-tester",
    name: "API Tester",
    description: "Prueba endpoints y APIs directamente desde el navegador.",
    status: "draft",
    hasDemo: false,
    picture: "",
    gallery: [],
    rate: 0,
    category: "Desarrollo",
    icon: "Webhook",
    pricingTier: "Freemium",
    whatsappMessage: "Hola, quiero información sobre el API Tester.",
  },
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
