# 💍 Invitación de Boda - Bety & Erick

Una elegante invitación digital para la boda de Bety y Erick, desarrollada con Angular 20. Esta aplicación web presenta todos los detalles importantes del evento de manera interactiva y responsive.

## ✨ Características

- **Diseño Responsive**: Optimizado para dispositivos móviles y desktop
- **Multiidioma**: Soporte para español e inglés con selector de banderas
- **Secciones Interactivas**:
  - 🏠 **Inicio**: Presentación principal de los novios
  - 📅 **Detalles**: Información del evento con contador regresivo
  - 📍 **Ubicación**: Salón Villa Constanza con botón para abrir en Maps
  - 👗 **Para tomar en cuenta**: Código de vestimenta y recomendaciones
  - 🎁 **Regalos**: Mesa de regalos y opciones de contribución
  - ✅ **Confirmar asistencia**: Formulario RSVP
  - 📞 **Contacto**: Información de contacto
- **Reproductor de Música**: Canción especial de los novios
- **Galería de Fotos**: Momentos especiales de la pareja
- **Itinerario**: Cronograma detallado del día de la boda

## 🛠️ Tecnologías

- Angular 20
- TypeScript
- SCSS
- Responsive Design
- PWA Ready

## 🚀 Desarrollo Local

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd wedding-invitation

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve
```

Una vez que el servidor esté ejecutándose, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques cualquier archivo fuente.

## 📦 Construcción para Producción

Para construir el proyecto para producción:

```bash
ng build --configuration production
```

Los archivos compilados se almacenarán en el directorio `dist/`.

## 🌐 Despliegue Automático en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Configuración Inicial

1. **Habilitar GitHub Pages**:
   - Ve a Settings → Pages en tu repositorio
   - Selecciona "GitHub Actions" como fuente

2. **Configurar el Workflow**:
   El archivo `.github/workflows/deploy.yml` ya está configurado para:
   - Construir la aplicación automáticamente
   - Desplegar en GitHub Pages
   - Ejecutarse en cada push a la rama `main`

### Despliegue Manual

Si necesitas desplegar manualmente:

```bash
# Instalar angular-cli-ghpages
npm install -g angular-cli-ghpages

# Construir y desplegar
ng build --configuration production --base-href="/nombre-del-repositorio/"
npx angular-cli-ghpages --dir=dist/wedding-invitation
```

### URL de Producción
Una vez desplegado, la invitación estará disponible en:
`https://tu-usuario.github.io/nombre-del-repositorio/`

## 🧪 Testing

Para ejecutar las pruebas unitarias:

```bash
ng test
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes de la aplicación
│   │   ├── header/         # Navegación y selector de idioma
│   │   ├── home/           # Página principal
│   │   ├── details/        # Detalles del evento y padres
│   │   ├── location/       # Ubicación del evento
│   │   ├── dress-code/     # Código de vestimenta
│   │   ├── registry/       # Mesa de regalos
│   │   ├── rsvp/          # Confirmación de asistencia
│   │   ├── contact/       # Información de contacto
│   │   ├── gallery/       # Galería de fotos
│   │   ├── itinerary/     # Itinerario del día
│   │   └── footer/        # Pie de página
│   ├── services/          # Servicios (traducción, etc.)
│   └── pipes/            # Pipes personalizados
└── public/               # Recursos estáticos (imágenes, audio)
```

## 🎨 Personalización

### Colores y Estilos
Los colores principales se definen en `src/styles.scss`:
- `--color-navy`: Azul marino principal
- `--color-silver`: Gris plata
- `--color-white`: Blanco
- `--color-black`: Negro

### Traducciones
Las traducciones se gestionan en `src/app/services/translation.service.ts` con soporte para español e inglés.

### Imágenes
Todas las imágenes se almacenan en la carpeta `public/` y se referencian directamente.

## 📝 Licencia

Este proyecto es de uso personal para la boda de Bety & Erick.

## 💝 Créditos

Desarrollado con ❤️ para celebrar el amor de Bety & Erick
