import "./project-card.scss";
import chinardo from "../../assets/chinardo.png";

export default function ProjectCard() {
  return (
    <div className="bg-warning p-2">
      <h4>#project name</h4>
      <img src={chinardo} alt="" className="" />
    </div>
  );
}
