import skillsData from "./skills-data";
import "./skills.css";

export default function Skills() {
  return (
    <div className="section skills">
      <h1 className="section-title">Core skills</h1>
      <ul className="w-full flex justify-around list-unstyled">
        {skillsData.map(({ id, name, img }) => (
          <li key={id} className="flex items-end">
            <div className="flex flex-col items-center">
              <img src={img} alt={name} />
              <h5 className="text-center">{name}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
