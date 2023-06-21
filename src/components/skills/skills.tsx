import skillsData from "./skills-data";
import "./skills.scss";

export default function Skills() {
  return (
    <div className="mb-5 d-flex justify-content-center">
      <ul className="w-75 d-flex justify-content-around list-unstyled">
        {skillsData.map(({ id, name, img }) => (
          <li key={id} className="">
            <img src={img} alt={name} className="skill-img" />
            <h5 className="text-center">{name}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
