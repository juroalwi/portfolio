import { twMerge } from "tailwind-merge";

type ProjectCardProps = {
  id: number;
  img: string;
  name: string;
  description: string;
  textClassName?: string;
  big?: boolean;
};

export default function ProjectCard({
  id,
  name,
  img,
  description,
  textClassName,
  big,
}: ProjectCardProps) {
  return (
    <div
      className="h-full w-full relative group rounded-xl shadow-lg overflow-hidden bg-light hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      key={id}
    >
      <div className="absolute inset-0">
        <img
          src={img}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          alt={name}
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-dark/40 to-transparent" />
      </div>

      <div
        className={twMerge(
          "absolute bottom-0 left-0 right-0 flex flex-col gap-2 text-light p-6",
          textClassName
        )}
      >
        <h3
          className={twMerge(
            "text-2xl font-bold font-[Bebas_Neue] uppercase tracking-wider",
            big && "text-5xl scale-y-110"
          )}
        >
          {name}
        </h3>
        <p
          className={twMerge(
            "text-sm leading-relaxed opacity-90 line-clamp-3",
            big && "text-lg"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
