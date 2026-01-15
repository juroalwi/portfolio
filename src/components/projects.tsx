import ProjectCard from "./project-card";
import TypedTitle from "./typed-title/typed-title";
import img from "assets/chinardo.png";
import ProjectData from "/types/project-data";

const projectsData: ProjectData[] = [
  {
    id: 1,
    name: "Project 1",
    img: img,
    desc: "Lorem ipsum ap dor un ideal a izquierda es maximal si no existe ideal propio que lo contenga estrictamente",
  },
  {
    id: 2,
    name: "Project 2",
    img: img,
    desc: "Lorem ipsum ap dor un ideal a izquierda es maximal si no existe ideal propio que lo contenga estrictamente",
  },
  {
    id: 3,
    name: "Project 3",
    img: img,
    desc: "Lorem ipsum ap dor un ideal a izquierda es maximal si no existe ideal propio que lo contenga estrictamente",
  },
];

export default function Projects() {
  return (
    <div>
      <TypedTitle>My projects</TypedTitle>
      <ul className="flex justify-start list-unstyled gap-8">
        {projectsData.map(({ id, name, img, desc }) => (
          <li key={id} className="w-1/4">
            <ProjectCard
              id={id}
              name={name}
              img={img}
              desc={desc}
            ></ProjectCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
