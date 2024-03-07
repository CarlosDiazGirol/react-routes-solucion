import { studies, experiences } from '../data/resume';
// En esta vista mostramos los estudios y experiencias laborales del autor del portfolio.
export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <section>
        {' '}
        {/* sección para mostrar los estudios */}
        <h2>Studies</h2>
        <ul>
          {studies.map((study) => (
            <li key={study.id}>
              <h3>{study.title}</h3>
              <p>{study.institution}</p>
              <p>{study.date}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        {' '}
        {/* sección para mostrar las experiencias laborales */}
        <h2>Experiences</h2>
        <ul>
          {experiences.map((experience) => (
            <li key={experience.id}>
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              <p>{experience.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
