import { projects } from "../../constants";
import ProjectUi from "./project-ui";

export default function Projects() {
  return (
    <>
      <h2 className="section__title">Projects</h2>
      {projects.map((project) => (
        <ProjectUi
          key={project.id}
          id={project.id}
          title={project.title}
          testUser={project.testUser}
          description={project.description}
          image={project.image}
          deploy={project.deploy}
          github={project.github}
          cms={project.cms}
          stack={project.stack}
        />
      ))}
    </>
  );
}
