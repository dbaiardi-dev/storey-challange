# Storey Challenge

Este proyecto es una implementación de un sistema de diseño y una aplicación demo para gestionar suministros, desarrollado con Angular y siguiendo las mejores prácticas modernas.

## 🚀 Tecnologías

- Angular 17
- TypeScript
- SCSS
- Signals (Angular)
- pnpm
- JSON Server (para mock API)

## 📦 Estructura del Proyecto

```
storey-workspace/
├── projects/
│   ├── storey-design-system/    # Librería de componentes standalone reutilizables
│   └── demo/                    # Aplicación demo Angular
├── db.json                      # Mock data para JSON Server
└── package.json
```

## 🛠️ Instalación y Ejecución

1. **Clona el repositorio:**

```bash
git clone [URL_DEL_REPO]
cd storey-workspace
```

2. **Instala las dependencias:**

```bash
pnpm install
```

3. **Build de la librería de componentes:**

```bash
pnpm ng build storey-design-system
```

4. **Inicia el servidor de la fake API:**

```bash
pnpm json-server --watch db.json --port 3000
```

> Puedes editar la base de datos en `db.json`.

5. **Inicia la aplicación demo:**

```bash
pnpm ng serve demo
```

La app estará disponible en [http://localhost:4200](http://localhost:4200).

## 🎯 Características

- Sistema de diseño modular y reutilizable
- Componentes standalone
- Gestión de estado con Signals
- Diseño responsive
- Mock API con JSON Server
- Manejo visual de carga y errores
- Accesibilidad básica con ARIA

## 📄 Diseño en Figma

[Ver diseño en Figma](https://www.figma.com/design/gdO8zua1DWzUoAY8S387tq/Challenge---Storey?node-id=0-1&p=f&t=RUJ1cI9i3wQ9MgLY-0)


## 📝 Notas Técnicas

- Todos los componentes tienen el prefijo `storey-`
- La librería de componentes es totalmente standalone
- Se utiliza `pnpm` como gestor de paquetes
- El proyecto simula un backend con JSON Server

## 📚 Buenas Prácticas

- Modelos centralizados para evitar duplicidad
- Componentes autónomos y reutilizables
- Estado visual de carga y vacío implementado de forma clara
- Código comentado, limpio y escalable

## 💡 Consideraciones Finales

- Se utilizó FontAwesome para íconos con el fin de agilizar el desarrollo. Algunos íconos personalizados fueron exportados desde Figma.
- El menú contextual no se maquetó 100% según medidas exactas ya que Figma contenía solo una imagen y usaba una fuente premium. Se optó por una alternativa similar.
- Lo mismo aplica para la lista de suministros (cuando hay más de 3 ítems).

---

¡Muchas gracias por la oportunidad!
