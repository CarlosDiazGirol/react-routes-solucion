import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> {/* link para ir a la home */}
        <Link to="/projects">Projects</Link>{' '}
        {/* link para ir a la lista de proyectos */}
        <Link to="/resume">Resume</Link>{' '}
        {/* link para ir a la página de about */}
      </nav>
      <Outlet /> {/* outlet para renderizar las rutas hijas */}
    </div>
  );
}
