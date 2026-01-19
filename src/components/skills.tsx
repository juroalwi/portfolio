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
    name: "Node",
    img: nodejs,
  },
  {
    name: "Nest",
    img: nestjs,
  },
  {
    name: "Postgres",
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
    <div className="max-w-[1200px] w-full">
      <TypedTitle>Core skills</TypedTitle>
      <ul className="w-full grid grid-cols-4 min-[400px]:grid-cols-5 grid-rows-2 list-unstyled gap-x-8 gap-y-4 sm:gap-x-16 sm:gap-y-8">
        {skillsData.map(({ name, img }, index) => (
          <FadeIn
            key={index}
            delay={50 * (index % 5) + (index < 5 ? 0 : 100)}
            duration={800}
            className="flex"
          >
            <li className="flex flex-col items-center gap-2 shrink justify-between min-w-0">
              <img
                className="max-w-16 sm:max-w-20 w-full aspect-square object-contain"
                src={img}
                alt={name}
              />
              <h5 className="text-center text-xs sm:text-base">{name}</h5>
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}
