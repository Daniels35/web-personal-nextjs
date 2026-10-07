# Transición de la web personal a V4

## Rutas

| Ruta | Local | Después de desplegar |
| --- | --- | --- |
| Construcción | http://localhost:3000/ | https://daniels35.lat/ |
| Nueva versión | http://localhost:3000/v4 | https://daniels35.lat/v4 |
| Portafolio anterior | http://localhost:3000/legacy | https://daniels35.lat/legacy |

Los grupos `(modern)` y `(legacy)` organizan archivos y no aparecen en la URL. La navegación antigua conserva `/legacy#home`, `/legacy#portfolio`, `/legacy#about` y `/legacy#contact`. Los enlaces antiguos `/#portfolio` deben actualizarse a `/legacy#portfolio`, porque `/` ahora es la construcción.

## Archivos

```text
src/app/
  favicon.ico                         Favicon antiguo conservado
  (modern)/
    layout.tsx                        HTML, metadatos y estilos de V4
    modern.css                        Diseño responsive, tokens y componentes nuevos
    page.tsx                          Portada de construcción /
    v4/page.tsx                       Entrada y metadatos /v4
  (legacy)/
    layout.tsx                        HTML y hojas de estilo originales
    legacy.css                        Entrada Tailwind v4 del portafolio
    legacy/page.tsx                   Entrada y metadatos /legacy
src/components/brand/Brand.tsx         Marca, header y footer compartidos
src/config/site.ts                    Contactos, redes y enlaces WhatsApp de V4
src/data/projects.json                Proyectos compartidos
src/features/v4/
  LandingPage.tsx                     Composición de las secciones nuevas
  content.ts                         Copy de problemas y servicios
  RotatingHeadline.tsx               Subtítulos rotativos
  DiagnosisDemo.tsx                  Demo local y resumen para WhatsApp
src/features/legacy/
  LegacyPortfolio.tsx                Antigua src/app/page.tsx
  components/
    NextSectionButton.tsx
    Portal.tsx
    PortfolioCard.tsx
    Sidebar.tsx
    SmokeBackground.tsx
    ThemeSwitcher.tsx
    TypingEffect.tsx
    WhatsAppButton.tsx
  sections/
    AboutSection.tsx
    ContactSection.tsx
    HomeSection.tsx
    PortfolioSection.tsx
public/brand/horus-gold.png            Ojo de Horus original dorado
public/brand/daniel-diaz-gold.png      Logotipo original del nombre
public/brand/horus-watermark.png       Marca de agua original al 18%
public/css/                           Estilos y paletas originales
public/js/                            Scripts originales
public/images/                        Retrato y proyectos originales
public/Daniel_Stiven_Diaz_CV_ES.pdf     CV, misma URL
docs/arquitectura-v4.md                Esta guía
```

Los componentes y secciones antiguos se trasladaron a `features/legacy` y se actualizaron sus imports. Se conservan datos, imágenes, CV, paletas, navegación y humo. Se corrigieron errores de lint de Portal, Sidebar y ThemeSwitcher, y se adaptó la entrada CSS a Tailwind v4.

## Aislamiento y reutilización

Cada grupo tiene un layout raíz con `<html>` y `<body>`. Los estilos globales, canvas y tema de la versión antigua se cargan en `/legacy`. Pasar entre grupos realiza una navegación completa para limpiar el documento anterior. Las páginas modernas comparten su layout, marca y estilos.

Para cambiar contactos nuevos: `src/config/site.ts`. Para editar servicios y problemas: `features/v4/content.ts`. Para modificar secciones: `LandingPage.tsx`. Para cambiar construcción: `(modern)/page.tsx`. `projects.json` y los assets originales se comparten sin duplicarlos. Los contactos originales siguen en sus componentes antiguos para preservar su versión.

## Referencia visual y contenido

El PDF «Arquitectura y Copywriting de la Landing Page Destino QR - Daniel Diaz» se tomó como referencia visual y editorial; no como autorización para publicar o conectar servicios externos.

La identidad usa `#080D1A`, `#111827`, `#D4AF37`, `#FDE68A`, textos plata y verde `#25D366` para el estado de demo. Helvetica/Arial del sistema evita descargas de fuentes en las páginas modernas. La cabecera y el favicon usan los PNG originales aportados por Daniel. El hero sigue su boceto: nombre centrado, subtítulo con efecto de escritura y un input ancho. La conversación aparece al enviar la primera respuesta. Se usa su marca de agua como fondo sutil.

V4 incluye hero, subtítulos rotativos, diagnóstico guiado, tres problemas, cuatro soluciones, proyectos existentes, experiencia y llamada a diagnóstico gratuito de 15 minutos. Las imágenes usan `next/image`. Hay estilos móviles, foco de teclado y respeto por movimiento reducido. No se publican cifras comerciales ni garantías de disponibilidad o rendimiento sin verificar.

## Demo disponible

El visitante escribe su sector, describe su reto, indica nombre/empresa, correo y WhatsApp y propone un horario en Colombia. Recibe respuestas predefinidas y un enlace que prepara el resumen en WhatsApp; revisa y envía el mensaje por su cuenta. El botón flotante permite volver a la demo al desplazarse.

No hay autoenvío, modelo de IA, backend, persistencia ni reserva de agenda. El estado permanece en memoria y se pierde al recargar o salir. La interfaz identifica la demo y aclara que el horario requiere confirmación. El formulario simulado antiguo se conserva en `/legacy`.

## Integraciones pendientes

El agente real requiere proveedor/modelo, instrucciones, endpoint de servidor y límites de abuso. Odoo requiere instancia, versión/API, credenciales de servidor y mapeo de `res.partner` y `crm.lead`. Google Calendar requiere autorización, consulta de disponibilidad, zona `America/Bogota`, prevención de duplicados y creación de eventos. Las confirmaciones automáticas por WhatsApp requieren proveedor y configuración del canal.

Los puntos de integración futuros son `src/app/api/diagnosis/route.ts`, `src/app/api/availability/route.ts` y `src/app/api/bookings/route.ts`. No se han creado endpoints ficticios. No poner secretos en variables `NEXT_PUBLIC_*`. Antes de almacenar prospectos, implementar consentimiento y una política de privacidad adecuada al flujo real.

## Publicación y futura promoción

Usar el proveedor y flujo de despliegue existentes. Las rutas no requieren dominios nuevos ni redirects. Verificar las tres páginas, el CV, imágenes y navegación después del despliegue. No se ha modificado el sitio publicado.

`/v4` tiene `robots: { index: false, follow: true }` mientras se revisa; esto no limita su acceso. Para convertir V4 en inicio, reemplazar el componente de `(modern)/page.tsx` por `<LandingPage />`, actualizar sus metadatos y decidir si `/v4` se conserva o redirige a `/`. Mantener `/legacy` disponible.

## Validación

Build y TypeScript verifican las tres rutas estáticas. Se prueba la conversación completa con datos ficticios, hasta generar el enlace sin enviar mensajes. Se revisan escritorio, móvil a 390 px y navegación entre los layouts. El objetivo PageSpeed del PDF exige una medición posterior en el despliegue real; no se considera demostrado por la compilación.

La portada de construcción usa una sola columna y solo muestra enlaces de contacto. No enlaza a /legacy ni a /v4; ambas rutas siguen disponibles por URL directa para revisión interna.
