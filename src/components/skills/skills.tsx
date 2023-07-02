import skillsData from "./skills-data";
import "./skills.scss";

export default function Skills() {
  return (
    <div className="section skills">
      <h1 className="section-title">Core skills</h1>
      <ul className="w-100 align-self-center d-flex justify-content-around list-unstyled">
        {skillsData.map(({ id, name, img }) => (
          <li key={id} className="d-flex align-items-end">
            <div className="d-flex flex-column align-items-center d-flex flex-column align-items-center">
              <img src={img} alt={name} />
              <h5 className="text-center">{name}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
