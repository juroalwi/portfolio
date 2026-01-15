import "./project-card.css";
import ProjectData from "types/project-data";

export default function ProjectCard({ name, img, desc }: ProjectData) {
  return (
    <div className="card-container">
      <img src={img} alt="" className="" />
    </div>
  );
}

//   <h4>{name}</h4>
//   <img src={img} alt="" className="" />
//   <p>{desc}</p>
