import { TypedTitle } from "/components/typed-title";
import { FadeIn } from "/components/fade-in";
import typescript from "/assets/images/typescript.svg";
import nodejs from "/assets/images/nodejs.svg";
import nestjs from "/assets/images/nestjs.svg";
import postgresql from "/assets/images/postgresql.svg";
import redis from "/assets/images/redis.svg";
import react from "/assets/images/react.svg";
import html from "/assets/images/html.svg";
import css from "/assets/images/css.svg";
import tailwind from "/assets/images/tailwind.svg";
import web3 from "/assets/images/web3.svg";

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
export const Skills = () => {
  return (
    <div className="w-full max-w-300">
      <TypedTitle title="Core Skills" />
      <ul className="list-unstyled grid w-full grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 min-[400px]:grid-cols-5 sm:gap-x-16 sm:gap-y-8">
        {skillsData.map(({ name, img }, index) => (
          <FadeIn
            key={index}
            delay={50 * (index % 5) + (index < 5 ? 0 : 100)}
            duration={800}
            className="flex"
          >
            <li className="flex min-w-0 shrink flex-col items-center justify-between gap-2">
              <img
                className="aspect-square w-full max-w-16 object-contain sm:max-w-20"
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
};
