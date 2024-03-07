import projects from '../data/projects';

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <section className="projects">
        {projects.map(
          (
            project // recorremos el array de proyectos y por cada uno de ellos renderizamos un artículo con su información
          ) => (
            <article key={project.id}>
              <h2>{project.name}</h2>
              <img src={project.image} alt={project.name} />
              <p>{project.description}</p>
              <a href={project.url}>Go to project</a>
            </article>
          )
        )}
      </section>
    </div>
  );
}
