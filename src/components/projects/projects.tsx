import ProjectCard from "../project-card/project-card";
import "./projects.scss";
import projectsData from "./projects-data";

export default function Projects() {
  return (
    <div className="mb-5">
      <h1 className="mb-4">My projects</h1>
      <ul className="d-flex justify-content-around list-unstyled">
        {projectsData.map(({ id, name, img, desc }) => (
          <li key={id} className="w-25">
            <ProjectCard name={name} img={img} desc={desc}></ProjectCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
