# Daniel Diaz · sitio personal y landing V4

| Ruta | Contenido | Archivo de entrada |
| --- | --- | --- |
| `/` | Portada de construcción | `src/app/(modern)/page.tsx` |
| `/v4` | Nueva landing y demo | `src/app/(modern)/v4/page.tsx` |
| `/legacy` | Portafolio anterior | `src/app/(legacy)/legacy/page.tsx` |

## Ejecutar

```bash
npm ci
npm run dev
```

Abrir http://localhost:3000/, http://localhost:3000/v4 y http://localhost:3000/legacy.

```bash
npm run lint
npm run build
npm run start
```

La arquitectura, archivos, comportamiento de la demo y pasos de publicación están documentados en [docs/arquitectura-v4.md](docs/arquitectura-v4.md).

Los cambios son locales. Para publicarlos en daniels35.lat hay que desplegar esta revisión con el flujo habitual del proyecto.
