import { useState } from "react";
import TypedTitle from "./typed-title/typed-title";
import poi from "assets/poi.png";
import { FadeIn } from "./fade-in";

export default function About() {
  const [mainTitleTyped, setMainTitleTyped] = useState(false);

  return (
    <div className="flex items-center justify-between gap-20 w-[55%] max-w-[1000px]">
      <div>
        <TypedTitle
          className="mb-1"
          onFinishTyping={() => setMainTitleTyped(true)}
          caretHidden={mainTitleTyped}
          typingSpeedMs={40}
        >
          Hi there, Julian here!
        </TypedTitle>
        <TypedTitle
          className="mb-6 text-2xl"
          typingSpeedMs={30}
          disabled={!mainTitleTyped}
        >
          Full stack developer & Mathematician
        </TypedTitle>

        <FadeIn delay={150} duration={800}>
          <p className="text-lg">
            More than 3 years of experience building scalable and efficient
            systems using Typescript, NestJS, PostgreSQL and React.
            <br />I have a genuine enthusiasm for continuous learning and I
            thrive in collaborative environments. Known for my meticulous
            attention to detail, I consistently strive to deliver work of the
            highest possible standard.
          </p>
        </FadeIn>
      </div>

      <div className="relative rounded-full bg-lime-100/60 flex w-84 h-84 shrink-0 shadow-lg">
        <img
          className="absolute bottom-3 right-3 rounded-full bg-blue-50 w-84 h-84 object-contain aspect-square shadow-lg"
          src={poi}
        />
      </div>
    </div>
  );
}
