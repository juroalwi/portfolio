import ProjectData from "types/project-data";

export default function ProjectCard({ name, img, desc, id }: ProjectData) {
  return (
    <div className="h-96 shadow-md" key={id}>
      <img
        src={img}
        alt={`Project ${name}`}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
