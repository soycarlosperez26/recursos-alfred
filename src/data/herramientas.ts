export type Estado = "Gratis" | "Freemium" | "Premium" | "Próximamente";

export interface Herramienta {
  slug: string;
  nombre: string;
  descripcion: string;
  estado: Estado;
  icon: string; // nombre de icono lucide
  whatsappMensaje: string;
}

export interface CategoriaHerramientas {
  categoria: string;
  descripcion: string;
  icon: string;
  herramientas: Herramienta[];
}

export const categorias: CategoriaHerramientas[] = [
  {
    categoria: "Recursos Humanos",
    descripcion:
      "Automatiza la gestión de personal de tu pyme: asistencia, nómina y turnos sin hojas de cálculo interminables.",
    icon: "Users",
    herramientas: [
      {
        slug: "control-asistencia",
        nombre: "Control de Asistencia",
        descripcion: "Registra entradas y salidas de empleados de forma automática.",
        estado: "Freemium",
        icon: "Clock",
        whatsappMensaje: "Hola, estoy interesado en la herramienta Control de Asistencia.",
      },
      {
        slug: "calculadora-horas-extras",
        nombre: "Calculadora de Horas Extras",
        descripcion: "Calcula recargos y horas extra según la ley laboral colombiana.",
        estado: "Gratis",
        icon: "Calculator",
        whatsappMensaje: "Hola, quiero información sobre la Calculadora de Horas Extras.",
      },
      {
        slug: "liquidaciones",
        nombre: "Liquidaciones",
        descripcion: "Genera liquidaciones de nómina de forma rápida y sin errores.",
        estado: "Premium",
        icon: "Receipt",
        whatsappMensaje: "Hola, deseo cotizar la herramienta de Liquidaciones.",
      },
      {
        slug: "gestion-vacaciones",
        nombre: "Gestión de Vacaciones",
        descripcion: "Controla solicitudes y saldos de vacaciones de tu equipo.",
        estado: "Freemium",
        icon: "CalendarCheck",
        whatsappMensaje: "Hola, quiero información sobre Gestión de Vacaciones.",
      },
      {
        slug: "turnos-trabajo",
        nombre: "Turnos de Trabajo",
        descripcion: "Organiza turnos y horarios de tu personal en minutos.",
        estado: "Próximamente",
        icon: "CalendarDays",
        whatsappMensaje: "Hola, quiero más información sobre la herramienta de Turnos de Trabajo.",
      },
    ],
  },
  {
    categoria: "Inteligencia Artificial",
    descripcion:
      "Herramientas con IA para que tu empresa procese información y documentos en segundos, no en días.",
    icon: "Bot",
    herramientas: [
      {
        slug: "chat-documentos",
        nombre: "Chat con Documentos",
        descripcion: "Consulta tus documentos empresariales con lenguaje natural.",
        estado: "Freemium",
        icon: "MessageSquareText",
        whatsappMensaje: "Hola, estoy interesado en la herramienta Chat con Documentos.",
      },
      {
        slug: "ocr-documentos",
        nombre: "OCR de Documentos",
        descripcion: "Digitaliza facturas y documentos físicos automáticamente.",
        estado: "Gratis",
        icon: "ScanText",
        whatsappMensaje: "Hola, estoy interesado en la herramienta OCR.",
      },
      {
        slug: "resumidor-pdf",
        nombre: "Resumidor de PDF",
        descripcion: "Obtén resúmenes claros de contratos y reportes extensos.",
        estado: "Gratis",
        icon: "FileText",
        whatsappMensaje: "Hola, quiero información sobre el Resumidor de PDF.",
      },
      {
        slug: "clasificador-automatico",
        nombre: "Clasificador Automático",
        descripcion: "Organiza correos, facturas y documentos por categoría sin esfuerzo.",
        estado: "Freemium",
        icon: "Tags",
        whatsappMensaje: "Hola, quiero información sobre el Clasificador Automático.",
      },
      {
        slug: "extraccion-datos",
        nombre: "Extracción de Datos",
        descripcion: "Extrae datos clave de documentos y cárgalos a tu sistema.",
        estado: "Premium",
        icon: "Database",
        whatsappMensaje: "Hola, deseo cotizar la herramienta de Extracción de Datos.",
      },
    ],
  },
  {
    categoria: "Productividad",
    descripcion:
      "Utilidades gratuitas para el trabajo diario de tu empresa, sin instalar software adicional.",
    icon: "Zap",
    herramientas: [
      {
        slug: "firmar-pdf",
        nombre: "Firmar PDF",
        descripcion: "Firma documentos digitalmente desde cualquier dispositivo.",
        estado: "Gratis",
        icon: "PenLine",
        whatsappMensaje: "Hola, estoy interesado en la herramienta Firmar PDF.",
      },
      {
        slug: "unir-pdf",
        nombre: "Unir PDF",
        descripcion: "Combina varios archivos PDF en un solo documento.",
        estado: "Gratis",
        icon: "Files",
        whatsappMensaje: "Hola, estoy interesado en la herramienta Unir PDF.",
      },
      {
        slug: "dividir-pdf",
        nombre: "Dividir PDF",
        descripcion: "Separa un PDF extenso en varios archivos más pequeños.",
        estado: "Gratis",
        icon: "Scissors",
        whatsappMensaje: "Hola, estoy interesado en la herramienta Dividir PDF.",
      },
      {
        slug: "generador-qr",
        nombre: "Generador QR",
        descripcion: "Crea códigos QR para tu negocio en segundos.",
        estado: "Gratis",
        icon: "QrCode",
        whatsappMensaje: "Hola, estoy interesado en el Generador QR.",
      },
      {
        slug: "conversor-archivos",
        nombre: "Conversor de Archivos",
        descripcion: "Convierte documentos, imágenes y hojas de cálculo entre formatos.",
        estado: "Freemium",
        icon: "RefreshCw",
        whatsappMensaje: "Hola, quiero información sobre el Conversor de Archivos.",
      },
    ],
  },
  {
    categoria: "Logística",
    descripcion:
      "Soluciones pensadas para empresas de transporte, comercio e inventario en la Costa Caribe.",
    icon: "Truck",
    herramientas: [
      {
        slug: "comparador-excel",
        nombre: "Comparador de Excel",
        descripcion: "Compara inventarios y bases de datos en Excel sin errores manuales.",
        estado: "Gratis",
        icon: "Table",
        whatsappMensaje: "Hola, estoy interesado en el Comparador de Excel.",
      },
      {
        slug: "validador-documentos",
        nombre: "Validador de Documentos",
        descripcion: "Valida guías, facturas y documentos de transporte automáticamente.",
        estado: "Freemium",
        icon: "ShieldCheck",
        whatsappMensaje: "Hola, quiero información sobre el Validador de Documentos.",
      },
      {
        slug: "importador-inventario",
        nombre: "Importador de Inventario",
        descripcion: "Carga masiva de inventario desde Excel a tu sistema.",
        estado: "Freemium",
        icon: "PackageSearch",
        whatsappMensaje: "Hola, quiero información sobre el Importador de Inventario.",
      },
      {
        slug: "generador-reportes",
        nombre: "Generador de Reportes",
        descripcion: "Crea reportes logísticos automáticos y listos para compartir.",
        estado: "Próximamente",
        icon: "BarChart3",
        whatsappMensaje: "Hola, quiero más información sobre el Generador de Reportes.",
      },
    ],
  },
  {
    categoria: "Desarrollo",
    descripcion:
      "Utilidades técnicas gratuitas para equipos de desarrollo y áreas de sistemas.",
    icon: "Code2",
    herramientas: [
      {
        slug: "json-formatter",
        nombre: "JSON Formatter",
        descripcion: "Formatea y valida JSON al instante.",
        estado: "Gratis",
        icon: "Braces",
        whatsappMensaje: "Hola, estoy interesado en el JSON Formatter.",
      },
      {
        slug: "jwt-decoder",
        nombre: "JWT Decoder",
        descripcion: "Decodifica y analiza tokens JWT de forma segura.",
        estado: "Gratis",
        icon: "KeyRound",
        whatsappMensaje: "Hola, estoy interesado en el JWT Decoder.",
      },
      {
        slug: "base64",
        nombre: "Base64",
        descripcion: "Codifica y decodifica texto y archivos en Base64.",
        estado: "Gratis",
        icon: "Binary",
        whatsappMensaje: "Hola, estoy interesado en la herramienta Base64.",
      },
      {
        slug: "xml-converter",
        nombre: "XML Converter",
        descripcion: "Convierte entre XML, JSON y CSV sin esfuerzo.",
        estado: "Gratis",
        icon: "FileCode2",
        whatsappMensaje: "Hola, estoy interesado en el XML Converter.",
      },
      {
        slug: "api-tester",
        nombre: "API Tester",
        descripcion: "Prueba endpoints y APIs directamente desde el navegador.",
        estado: "Freemium",
        icon: "Webhook",
        whatsappMensaje: "Hola, quiero información sobre el API Tester.",
      },
    ],
  },
];

export const servicios = [
  { nombre: "Migración de software Legacy", icon: "RefreshCcw" },
  { nombre: "Automatización empresarial", icon: "Workflow" },
  { nombre: "Integraciones entre sistemas", icon: "Link2" },
  { nombre: "Desarrollo de APIs", icon: "Server" },
  { nombre: "Desarrollo Web", icon: "Globe" },
  { nombre: "Aplicaciones Empresariales", icon: "AppWindow" },
  { nombre: "Inteligencia Artificial", icon: "BrainCircuit" },
  { nombre: "Consultoría Tecnológica", icon: "Lightbulb" },
];
