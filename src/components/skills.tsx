import typescript from "assets/typescript.svg";
import react from "assets/react.svg";
import angular from "assets/angular.svg";
import bootstrap from "assets/bootstrap.svg";
import nodejs from "assets/nodejs.svg";
import TypedTitle from "./typed-title/typed-title";

const skillsData = [
  {
    id: 1,
    name: "Typescript",
    img: typescript,
  },
  {
    id: 2,
    name: "React",
    img: react,
  },
  {
    id: 3,
    name: "Angular",
    img: angular,
  },
  {
    id: 3,
    name: "Bootstrap",
    img: bootstrap,
  },
  {
    id: 4,
    name: "Node",
    img: nodejs,
  },
];
export default function Skills() {
  return (
    <div className="w-full">
      <TypedTitle>Core skills</TypedTitle>
      <ul className="w-full flex justify-start list-unstyled gap-16">
        {skillsData.map(({ id, name, img }) => (
          <li key={id} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <img
                className="w-16 aspect-square object-contain"
                src={img}
                alt={name}
              />
              <div className="h-full grow">
                <h5 className="text-center">{name}</h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
