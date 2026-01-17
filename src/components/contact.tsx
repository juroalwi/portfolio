import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FadeIn } from "./fade-in";
import TypedTitle from "./typed-title/typed-title";

export default function Contact() {
  return (
    <div className="w-[60%] max-w-[1000px]">
      <TypedTitle className="mb-12">Want to know more? Reach out!</TypedTitle>

      <FadeIn delay={100}>
        <form className="flex flex-col gap-8">
          <div className="flex gap-8">
            <FormField id="name" label="Name" type="text" />
            <FormField id="email" label="Email" type="email" />
          </div>

          <FormField id="subject" label="Subject" type="text" />

          <FormField id="message" label="Message" type="textarea" />

          <button
            type="submit"
            className="px-10 py-3 ml-auto mt-2 bg-dark text-light rounded-full font-medium transition-all duration-200 hover:bg-dark/90 cursor-pointer outline-none"
          >
            Send
          </button>
        </form>
      </FadeIn>
    </div>
  );
}

const FormField = ({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setHasValue(e.target.value.length > 0);
  };

  const borderClasses = [
    "border-b  w-full relative",
    isFocused || hasValue
      ? "border-secondary/90"
      : "border-dark/20 hover:border-dark/40",
  ];
  const labelClasses = [
    "absolute left-0 h-auto transition-all duration-300 pointer-events-none",
    isFocused || hasValue
      ? "translate-y-[-30px] text-sm text-secondary/90"
      : "translate-y-0 text-base text-dark/60",
  ];

  if (type === "textarea") {
    return (
      <div className={twMerge(borderClasses)}>
        <label htmlFor={id} className={twMerge("top-3", labelClasses)}>
          {label}
        </label>
        <textarea
          id={id}
          name={id}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          rows={6}
          className={twMerge("resize-none w-full focus:outline-none")}
        />
      </div>
    );
  }

  return (
    <div className={twMerge("h-10", borderClasses)}>
      <label htmlFor={id} className={twMerge("bottom-1", labelClasses)}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        className="h-full w-full focus:outline-none transition-all duration-300"
      />
    </div>
  );
};
