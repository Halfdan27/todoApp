# App de Gestión de Tareas en Angular

## Descripción

Esta es una aplicación simple para gestionar tareas. 
Permite agregar, eliminar, y marcar tareas como completadas. 
Además, muestra un contador de tareas pendientes y mensajes dinámicos si no hay tareas en la lista.
Las tareas se mantienen guardadas en el `localStorage`, lo que permite que persistan incluso después de recargar la página.

## Funcionalidades

- **Agregar tareas**: Puedes añadir nuevas tareas usando un formulario. El título de la tarea es obligatorio.
- **Ver tareas**: Las tareas se muestran en una lista. Las tareas completadas se marcan con una línea tachada.
- **Eliminar tareas**: Puedes eliminar una tarea con el ícono de la papelera.
- **Contador de tareas pendientes**: Muestra cuántas tareas aún no se han completado.
- **Mensajes dinámicos**: Si no hay tareas, aparece el mensaje "No hay tareas pendientes".
- **Persistencia de datos**: Las tareas se guardan en el `localStorage`, por lo que no se perderán si recargas la página.

## Instrucciones

### 1. Clonar el repositorio

Para empezar, clona el proyecto en tu máquina local ya sea por git clone o descargarlo como .zip:

```bash
git clone https://github.com/Halfdan27/todoApp.git
```
Instalar las dependencias 
```bash
npm install
```
ejecutar ng serve para abrir el local host 
```bash
ng serve -o
```

## Decisiones Tomadas

- **Estructura del Proyecto**: Utilicé **Angular** para el frontend porque es una herramienta potente y fácil de trabajar,
 además de que permite integrar distintas funcionalidades sin complicaciones.
  
- **Diseño Responsivo**: Opté por un diseño simple y adaptativo usando **CSS Flexbox**,
   asegurando que la aplicación se vea bien tanto en dispositivos móviles como en pantallas grandes.

- **Interacción de Usuario**: Los botones de acción para eliminar y marcar tareas como completadas son fáciles de usar,
   y tienen colores distintos para que se entienda cuál es cuál de forma rápida.

- **Manejo del Scroll**: Implementé un scroll vertical en la lista de tareas para evitar que el contenido se sobreponga.
   Así, las tareas se organizan de manera más fluida, sin que se vea todo apretado.

- **Estilos y Diseño**: Elegí colores suaves para el fondo y contrastes nítidos para los botones y las tareas, haciendo la interfaz más limpia y fácil de leer.







# TodoApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
