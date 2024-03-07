/*

* La ruta raíz (`/`) renderizará el componente `Root`. Este componente mostrará una barra de navegación y el contenido de la página correspondiente a la ruta actual. Esta ruta tendrá a las demás como rutas hijas.

   * La subruta `/` renderizará el componente `Home`. Este componente mostrará la página de inicio del portfolio. En esta página, se mostrará una breve descripción del desarrollador.

   * La subruta `/projects` renderizará el componente `Projects`. Este componente mostrará la página de proyectos del portfolio. En esta página, se mostrarán los proyectos en los que ha trabajado el desarrollador.

   * La subruta `/resume` renderizará el componente `Resume`. Este componente mostrará la página de currículum del portfolio. En esta página, se mostrará la experiencia laboral y educativa del desarrollador.

*/
import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

import ErrorPage from './pages/Error';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/resume', element: <Resume /> },
    ],
  },
]);

export default router;
