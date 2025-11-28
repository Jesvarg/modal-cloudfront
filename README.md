# Modal Reutilizable

Un componente modal reutilizable construido con React, Tailwind CSS y Framer Motion.

## ✨ Características

- **Reutilizable**: Patrón de composición que permite cualquier contenido
- **Animaciones Suaves**: Transiciones con Framer Motion
- **Responsivo**: Adaptable a cualquier tamaño de pantalla

## 🛠️ Tecnologías

- **React 18**
- **Tailwind CSS** 
- **JavaScript**

## 🚀 Instalación

```bash
# Clonar repositorio
git clone https://github.com/Jesvarg/modal-react.git
cd modal-react

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## 🎯 Casos de Uso Implementados

### 1. Mensaje Simple
Modal para confirmaciones y alertas con diferentes tipos (éxito, error, info).

### 2. Formulario de Contacto
Modal con formulario, validación en tiempo real y manejo de errores.

### 3. Galería de Imágenes
Modal para visualizar imágenes con navegación, miniaturas y acciones sociales.


## 📁 Estructura

```
src/
├── components/
│   ├── Modal/Modal.jsx              # Componente principal
│   └── ModalContent/
│       ├── SimpleMessage.jsx        # Mensajes
│       ├── ContactForm.jsx          # Formulario
│       └── ImageGallery.jsx         # Galería
└── App.jsx                          
```

## ✅ Funcionalidades

- ✅ Modal controlado por componente padre
- ✅ Composición de componentes
- ✅ Diseño responsivo

---
