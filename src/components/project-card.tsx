import { twMerge } from "tailwind-merge";

type ProjectCardProps = {
  id: string;
  img: string;
  name: string;
  url: string;
  description: string;
  textClassName?: string;
  big?: boolean;
};

export const ProjectCard = ({
  id,
  name,
  img,
  url,
  description,
  textClassName,
  big,
}: ProjectCardProps) => {
  return (
    <div
      className="group bg-secondary/3 relative h-full min-h-[250px] w-full min-w-[200px] cursor-pointer overflow-hidden rounded-xl shadow-lg"
      key={id}
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      <div className="absolute inset-0">
        <img
          src={img}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          alt={name}
        />
        <div className="from-dark/80 via-dark/40 absolute inset-0 bg-linear-to-t to-transparent" />
      </div>

      <div
        className={twMerge(
          "text-light absolute right-0 bottom-0 left-0 flex flex-col gap-2 p-6",
          textClassName,
        )}
      >
        <h3
          className={twMerge(
            "font-[Bebas_Neue] text-2xl font-bold tracking-wider uppercase",
            big && "scale-y-110 text-5xl",
          )}
        >
          {name}
        </h3>
        <p
          className={twMerge(
            "line-clamp-3 text-sm leading-relaxed opacity-90",
            big && "text-lg",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
