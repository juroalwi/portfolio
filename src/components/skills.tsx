import typescript from "assets/typescript.svg";
import nodejs from "assets/nodejs.svg";
import nestjs from "assets/nestjs.svg";
import postgresql from "assets/postgresql.svg";
import redis from "assets/redis.svg";
import react from "assets/react.svg";
import html from "assets/html.svg";
import css from "assets/css.svg";
import tailwind from "assets/tailwind.svg";
import web3 from "assets/web3.svg";
import TypedTitle from "./typed-title/typed-title";
import { FadeIn } from "./fade-in";

const skillsData = [
  {
    name: "Typescript",
    img: typescript,
  },
  {
    name: "NodeJS",
    img: nodejs,
  },
  {
    name: "NestJS",
    img: nestjs,
  },
  {
    name: "PostgreSQL",
    img: postgresql,
  },
  {
    name: "Redis",
    img: redis,
  },
  {
    name: "React",
    img: react,
  },
  {
    name: "HTML",
    img: html,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "Tailwind",
    img: tailwind,
  },
  {
    name: "Web3",
    img: web3,
  },
];
export default function Skills() {
  return (
    <div className="max-w-[1200px] w-[60%]">
      <TypedTitle className="mb-16">Core skills</TypedTitle>
      <ul className="w-full grid grid-cols-5 grid-rows-2 list-unstyled gap-x-16 gap-y-8">
        {skillsData.map(({ name, img }, index) => (
          <FadeIn
            delay={50 * (index % 5) + (index < 5 ? 0 : 100)}
            duration={800}
          >
            <li key={index} className="flex items-center">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="w-20 h-20 aspect-square object-contain"
                  src={img}
                  alt={name}
                />
                <div className="h-full grow">
                  <h5 className="text-center">{name}</h5>
                </div>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}
