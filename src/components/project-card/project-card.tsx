import "./project-card.scss";
import ProjectData from "types/project-data";

export default function ProjectCard({ name, img, desc }: ProjectData) {
  return (
    <div className="bg-warning p-2">
      <h4>{name}</h4>
      <img src={img} alt="" className="" />
      <p>{desc}</p>
    </div>
  );
}
