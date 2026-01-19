import { twMerge } from "tailwind-merge";
import { FadeIn } from "./fade-in";

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
          "px-6 py-2 rounded text-light",
          type === "info"
            ? "bg-secondary"
            : type === "success"
            ? "bg-green-600"
            : "bg-red-600",
          className
        )}
      >
        <p>{message}</p>
      </div>
    </FadeIn>
  );
};
