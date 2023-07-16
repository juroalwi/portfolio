import ProjectCard from "../project-card/project-card";
import "./projects.scss";
import projectsData from "./projects-data";

export default function Projects() {
  return (
    <div className="section">
      <h1 className="section-title">My projects</h1>
      <ul className="flex justify-around list-unstyled">
        {projectsData.map(({ id, name, img, desc }) => (
          <li key={id} className="w-1/4">
            <ProjectCard name={name} img={img} desc={desc}></ProjectCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
