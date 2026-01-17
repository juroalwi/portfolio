import { FadeIn } from "./fade-in";
import ProjectCard from "./project-card";
import TypedTitle from "./typed-title/typed-title";
import img from "assets/chinardo.png";

type ProjectData = {
  id: number;
  name: string;
  img: any;
  description: string;
};

const projects: ProjectData[] = [
  {
    id: 1,
    name: "Project 1",
    img: img,
    description:
      "Lorem ipsum ap dor un ideal a izquierda es maximal si no existe ideal propio que lo contenga estrictamente.Lorem ipsum ap dor un ideal a izquierda es maximal si no existe ideal propio que lo contenga estrictamente",
  },
  {
    id: 2,
    name: "Project 2",
    img: img,
    description:
      "Lorem ipsum ap dor un ideal a izquierda es maximal si no existe ideal propio que lo contenga estrictamente",
  },
  {
    id: 3,
    name: "Project 3",
    img: img,
    description:
      "Lorem ipsum ap dor un ideal a izquierda es maximal si no existe ideal propio que lo contenga estrictamente",
  },
  {
    id: 4,
    name: "Project 4",
    img: img,
    description:
      "Lorem ipsum ap dor un ideal a izquierda es maximal si no existe ideal propio que lo contenga estrictamente",
  },
];

export default function Projects() {
  return (
    <div className="w-[80%] max-w-[1400px] h-full flex items-start flex-col justify-center">
      <TypedTitle>Recent projects</TypedTitle>
      <div className="grid grid-cols-12 grid-rows-6 gap-4 w-full h-full max-h-[700px]">
        <div className="row-span-6 col-span-5">
          <FadeIn delay={0} from="top" className="h-full w-full">
            <ProjectCard
              id={projects[0].id}
              name={projects[0].name}
              img={projects[0].img}
              description={projects[0].description}
              big
            />
          </FadeIn>
        </div>

        <div className="row-span-3 col-span-4">
          <FadeIn delay={50} from="top" className="h-full w-full">
            <ProjectCard
              id={projects[1].id}
              name={projects[1].name}
              img={projects[1].img}
              description={projects[1].description}
            />
          </FadeIn>
        </div>

        <div className="row-span-3 col-span-3">
          <FadeIn delay={100} from="top" className="h-full w-full">
            <ProjectCard
              id={projects[2].id}
              name={projects[2].name}
              img={projects[2].img}
              description={projects[2].description}
            />
          </FadeIn>
        </div>

        <div className="row-span-3 col-span-6">
          <FadeIn delay={150} from="right" className="h-full w-full">
            <ProjectCard
              id={projects[3].id}
              name={projects[3].name}
              img={projects[3].img}
              description={projects[3].description}
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
