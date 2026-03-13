import { twMerge } from "tailwind-merge";
import { FadeIn } from "components/fade-in";

type Props = {
  message: string;
  type?: "info" | "success" | "error";
  className?: string;
};

export const Popup = ({ message, type = "info", className }: Props) => {
  return (
    <FadeIn from="top">
      <div
        className={twMerge(
          "text-light rounded px-6 py-2",
          type === "info"
            ? "bg-secondary"
            : type === "success"
              ? "bg-green-600"
              : "bg-red-600",
          className,
        )}
      >
        <p>{message}</p>
      </div>
    </FadeIn>
  );
};
