# App de Gestión de Tareas en Angular

## Descripción

Esta es una aplicación simple para gestionar tareas. Permite agregar, eliminar, y marcar tareas como completadas. 
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

Para empezar, clona el proyecto en tu máquina local (abrir una terminal) o descargar como .zip:

```bash 
git clone https://github.com/Halfdan27/todoApp.git
```
### 2. Instalar dependencias

utiliza el siguiente comando para instalar las depencias :

```bash
npm install
```
ejecuta el siguiente ocmando para que inicia el localhost
```bash 
ng serve -o 
```


## Decisiones Tomadas

- **Estructura del Proyecto**: Utilicé **Angular** para el frontend porque es una herramienta potente y fácil de trabajar, 
además de que permite integrar distintas funcionalidades sin complicaciones.
  
- **Diseño Responsivo**: Opté por un diseño simple y adaptativo usando **CSS Flexbox**, asegurando que la aplicación se vea bien tanto en dispositivos móviles como en pantallas grandes.

- **Interacción de Usuario**: Los botones de acción para eliminar y marcar tareas como completadas son fáciles de usar, y tienen colores distintos para que se entienda cuál es cuál de forma rápida.

- **Manejo del Scroll**: Implementé un scroll vertical en la lista de tareas para evitar que el contenido se sobreponga. Así, las tareas se organizan de manera más fluida, sin que se vea todo apretado.

- **Estilos y Diseño**: Elegí colores suaves para el fondo y contrastes nítidos para los botones y las tareas, haciendo la interfaz más limpia y fácil de leer.

