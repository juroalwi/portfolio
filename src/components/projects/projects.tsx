import ProjectCard from "../project-card/project-card";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="">
      <h1>My projects</h1>
      <ul className="d-flex list-unstyled">
        <li>
          <ProjectCard></ProjectCard>
        </li>
      </ul>
    </div>
  );
}
