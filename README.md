# React Router

En este proyecto se muestra el uso de React Router para la navegación entre páginas. Crearemos el portfolio de un desarrollador web, con una página de inicio, una página de proyectos y una página de currículum.

## Pasos previos

Debemos crear un proyecto de React con vite. Para ello, ejecutamos el siguiente comando:

```bash
npm create vite .
```

## Instalación

Para instalar react-router en tu proyecto, ejecuta el siguiente comando:

```bash
npm install react-router-dom
```

1. **Configuración de Rutas:**

Primero, definimos las rutas de nuestro proyecto en el archivo `routes`. Usando `react-router-dom`, definimos las diferentes rutas que usaremos en el proyecto y cuál componente será renderizado en cada una.

- La ruta raíz (`/`) renderizará el componente `Root`. Este componente mostrará una barra de navegación y el contenido de la página correspondiente a la ruta actual. Esta ruta tendrá a las demás como rutas hijas.

  - La subruta `/` renderizará el componente `Home`. Este componente mostrará la página de inicio del portfolio. En esta página, se mostrará una breve descripción del desarrollador.

  - La subruta `/projects` renderizará el componente `Projects`. Este componente mostrará la página de proyectos del portfolio. En esta página, se mostrarán los proyectos en los que ha trabajado el desarrollador.

  - La subruta `/resume` renderizará el componente `Resume`. Este componente mostrará la página de currículum del portfolio. En esta página, se mostrará la experiencia laboral y educativa del desarrollador.

2. **Navegación entre páginas:**

- Incorporamos una navegación básica en la aplicación utilizando el componente `Link` de `react-router-dom`. Con `Link`, podemos crear enlaces a diferentes páginas de nuestra aplicación.
  - Usamos `<Outlet />` en el componente `Root` para renderizar las rutas secundarias . Outlet es un placeholder para el lugar en nuestra interfaz de usuario donde queremos colocar la salida de la ruta secundaria.

3. **Páginas de contenido:**

Creamos los componentes `Home`, `Projects` y `Resume` que se renderizarán en las rutas correspondientes. Estos componentes simplemente muestran un mensaje de bienvenida, una lista de proyectos y una lista de experiencias laborales y educativas, respectivamente.

Para poder editar más fácilmente el contenido de las páginas, creamos dos archivos en la carpeta `data` que contienen la información que se mostrará en las páginas de proyectos y currículum. El primer archivo se llamará projects.js y exportará un array con los proyectos, con los siguientes campos ` ( id, name, image, description, url)`. El segundo archivo se llamará resume.js y exportará dos arrays, uno con la experiencia laboral y otro con la educación, con los siguientes campos `studies (id, title, institution, date)` y `experiences (id, title, company, date)`.

Importaremos estos archivos en los componentes `Projects` y `Resume` para mostrar la información en las páginas. Usando `map`, recorremos los arrays y mostramos la información de cada proyecto, experiencia laboral y educación.

4. **Gestionando errores:**

Finalmente, tenemos un componente `Error` que se muestra cuando tratamos de acceder a una ruta que no existe. Este componente simplemente muestra un mensaje de error.

## Referencias

- [Tutorial React Router](https://reactrouter.com/en/6.22.1/start/tutorial)
