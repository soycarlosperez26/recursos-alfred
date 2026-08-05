# Estrategia de Negocio — RecursosAlfred.online

> Documento vivo. Se actualiza cada vez que tengamos una mejor idea. El historial de decisiones queda preservado en git (`git log -- docs/estrategia-negocio.md`).

Última actualización: 2026-08-05

---

## 1. Visión

RecursosAlfred.online no es una "plataforma de IA" genérica. Es un catálogo de herramientas pequeñas, de implementación fácil, que resuelven necesidades muy específicas de pymes que no tienen los equipos o el presupuesto para construirlas por su cuenta (ej. un asistente de IT para controlar equipos, una herramienta para optimizar cotizaciones de compras).

La propuesta de valor se comunica por rol/dolor (RRHH, Compras, IT, Logística, Desarrollo), no por tecnología.

---

## 2. Estrategia de adquisición (Go-to-Market)

Principio rector: vender el dolor puntual de una herramienta, no la plataforma completa. La categorización por rol que ya existe en la landing (RRHH, IA, Productividad, Desarrollo, Logística) debe ser también la estructura de los canales de adquisición.

### Canales

- **SEO de nicho por herramienta.** Cada herramienta merece su propia página/artículo apuntando a búsquedas de dolor real (ej. "cómo controlar asistencia de empleados sin sistema", "comparar cotizaciones de proveedores en excel"). Barato, compone con el tiempo.
- **LinkedIn dirigido por cargo.** Mensajes personalizados a encargados de compras, RRHH o TI en pymes — no a dueños de empresa en general. El mensaje debe nombrar el dolor exacto, nunca "tenemos IA para tu empresa".
- **Alianzas con quien ya atiende pymes.** Contadores, consultores administrativos, gremios, cámaras de comercio locales. Ya tienen la confianza y el acceso; comisión por referido es más barata que ads.
- **Ads muy segmentados** (Meta/Google) por cargo + industria, usando la herramienta específica como gancho.
- **Comunidades sectoriales** (grupos de WhatsApp/Facebook de logística, retail, manufactura pyme) — se publica la herramienta relevante, no la plataforma.
- **El propio MVP como canal de descubrimiento.** Cada clic a WhatsApp es una conversación de validación. Usar esas conversaciones para afinar mensajes y detectar qué vertical duele más antes de invertir en ads.

---

## 3. Modelo de entrega — cómo la empresa empieza a usar los recursos

Dado el público objetivo (pymes sin equipo de TI), **no se recomienda entregar código fuente como opción principal**:

- Requiere capacidad técnica del cliente para instalar, actualizar y mantener — justo lo que no tienen.
- Elimina la recurrencia de ingresos y el control de versiones.
- Multiplica el soporte (cada instalación queda distinta).

### Modelo de dos pistas

**Pista A — Micro-SaaS self-service (el grueso del negocio)**

Herramienta alojada por nosotros, acceso por navegador o vía el bot de WhatsApp, sin instalación.

- **Gratis:** uso limitado (X documentos/mes, X registros). Permite probar sin fricción.
- **Freemium / bajo costo:** sube el límite, quita marca de agua, agrega exportación, etc.
- **Premium:** mayor volumen, soporte prioritario, integraciones (ej. conectar con Excel/ERP existente del cliente).

Coincide con lo ya planeado para la v2 del producto (login, planes, pagos, dashboard — ver `first-step.md`). Falta definir la escalera de precios: ¿por herramienta individual o por bundle (ej. "paquete RRHH" con varias herramientas a precio fijo)?

**Pista B — Servicios empresariales (sección "¿Necesitas algo personalizado?")**

Para el cliente que necesita integración, modernización legacy o desarrollo a medida. Aquí sí se negocia caso por caso, y es el único lugar donde tendría sentido licenciar código fuente o hacer despliegue on-premise — como excepción de alto ticket, no como opción por defecto.

### Ruta de entrada más fácil para el cliente

1. Clic en herramienta en la landing → WhatsApp con mensaje precargado → conversación humana (fase actual de validación, ver `first-step.md`).
2. Cuando haya tracción: automatizar ese primer paso con un tier gratis sin tarjeta (prueba real de la herramienta).
3. WhatsApp queda para consultas, venta de plan pago, o servicios a medida (Pista B).

---

## 4. Preguntas abiertas / próximos pasos

- [ ] Definir escalera de precios concreta por herramienta o por bundle.
- [ ] Definir con qué herramienta(s) se hace el piloto de validación (¿cuál duele más según las conversaciones de WhatsApp?).
- [ ] Definir mensajes de LinkedIn/outreach por rol (RRHH, Compras, IT, Logística).
- [ ] Evaluar primeras alianzas con contadores/consultores locales.

---

## Historial de decisiones

| Fecha | Decisión / cambio |
|---|---|
| 2026-08-05 | Primera versión del documento: estrategia de adquisición y modelo de entrega (dos pistas: micro-SaaS self-service + servicios empresariales a medida). |
