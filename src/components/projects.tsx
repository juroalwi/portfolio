import { FadeIn } from "./fade-in";
import ProjectCard from "./project-card";
import TypedTitle from "./typed-title/typed-title";
import weatherAppImg from "assets/weather-app.svg";
import cookEmAllImg from "assets/cook-em-all.svg";
import schoolsLicitationImg from "assets/schools-licitationn.png";
import femImg from "assets/fem.png";

type ProjectData = {
  name: string;
  img: any;
  description: string;
  url: string;
};

const projects: ProjectData[] = [
  {
    name: "Cook 'Em All",
    img: cookEmAllImg,
    description:
      "A responsive single-page recipe platform that lets users discover recipes by name, filter and sort results, create custom recipes, and explore detailed recipe views—all in a smooth, fast UI.",
    url: "https://jralvarezwindey-food-app.vercel.app/landing",
  },
  {
    name: "Finite Elements Method",
    img: femImg,
    description:
      "From-scratch FEM implementation in Julia to solve a reaction–diffusion PDE on a unit square using triangular elements.",
    url: "https://github.com/juroalwi/finite-elements-method",
  },
  {
    name: "Schools auction",
    img: schoolsLicitationImg,
    description:
      "Linear programming sandbox reproducing results from a real procurement auction study, showing how dominant coverage and quantity discounts shape optimal allocations.",
    url: "https://github.com/juroalwi/auction-linear-programming",
  },
  {
    name: "Weather App",
    img: weatherAppImg,
    description:
      "A lightweight weather app powered by a third-party API, focused on fast lookup, clean UI, and real-time data display.",
    url: "https://github.com/juroalwi/weather-app",
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
              id="project-0"
              name={projects[0].name}
              img={projects[0].img}
              description={projects[0].description}
              url={projects[0].url}
              big
            />
          </FadeIn>
        </div>

        <div className="row-span-3 col-span-4">
          <FadeIn delay={50} from="top" className="h-full w-full">
            <ProjectCard
              id="project-1"
              name={projects[1].name}
              img={projects[1].img}
              description={projects[1].description}
              url={projects[1].url}
            />
          </FadeIn>
        </div>

        <div className="row-span-3 col-span-3">
          <FadeIn delay={100} from="top" className="h-full w-full">
            <ProjectCard
              id="project-2"
              name={projects[2].name}
              img={projects[2].img}
              description={projects[2].description}
              url={projects[2].url}
            />
          </FadeIn>
        </div>

        <div className="row-span-3 col-span-6">
          <FadeIn delay={150} from="right" className="h-full w-full">
            <ProjectCard
              id="project-3"
              name={projects[3].name}
              img={projects[3].img}
              description={projects[3].description}
              url={projects[3].url}
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
