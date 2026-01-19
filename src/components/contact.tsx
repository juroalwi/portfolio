import { FormEvent, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FadeIn } from "./fade-in";
import TypedTitle from "./typed-title/typed-title";
import { usePopup } from "/hooks/use-popup";
import { Spinner } from "./spinner";

export default function Contact() {
  const { open } = usePopup();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xkoooklq", {
        method: "POST",
        body: JSON.stringify({ name, email, subject, message }),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await res.json();

      if (result.error) {
        if (Array.isArray(result.errors)) {
          if (
            result.errors.some(
              (err: { field: string; message: string }) => err.field === "email"
            )
          ) {
            throw new Error(`Invalid email`);
          }
        }
        throw new Error(result.error);
      }

      open("Message delivered", "success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("Failed to send message", err);
      open("Something went wrong, please try again later", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[1200px] xs:text-sm">
      <TypedTitle>Want to know more? Reach out!</TypedTitle>

      <FadeIn delay={100}>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col xs:flex-row gap-8">
            <FormField
              id="name"
              label="Name"
              value={name}
              onChange={(v) => setName(v)}
            />
            <FormField
              id="email"
              label="Email"
              required
              value={email}
              onChange={(v) => setEmail(v)}
            />
          </div>

          <FormField
            id="subject"
            label="Subject"
            value={subject}
            onChange={(v) => setSubject(v)}
          />

          <FormField
            id="message"
            label="Message"
            required
            isTextArea
            value={message}
            onChange={(v) => setMessage(v)}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={twMerge(
              "ml-auto mt-2 bg-dark text-light rounded-full font-medium transition-all duration-200 outline-none w-28 h-12 items-center flex justify-center",
              isSubmitting
                ? "cursor-not-allowed bg-dark/90"
                : "cursor-pointer hover:bg-dark/90 "
            )}
          >
            {isSubmitting ? <Spinner fill="white" /> : "Send"}
          </button>
        </form>
      </FadeIn>
    </div>
  );
}

const FormField = ({
  id,
  label,
  value,
  onChange,
  required,
  isTextArea,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  isTextArea?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = !!value;

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

  if (isTextArea) {
    return (
      <div className={twMerge(borderClasses)}>
        <label htmlFor={id} className={twMerge("top-3", labelClasses)}>
          {label}
        </label>
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="h-full w-full focus:outline-none transition-all duration-300"
      />
    </div>
  );
};
