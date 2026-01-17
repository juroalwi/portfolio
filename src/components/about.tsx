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

        <FadeIn delay={200}>
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

      <FadeIn delay={100}>
        <div className="relative w-84 h-84 shrink-0">
          <div
            className="absolute inset-0 rounded-full bg-primary/40 shadow-lg"
            style={{
              maskImage:
                "radial-gradient(circle 168px at calc(50% - 12px) calc(50% - 12px), transparent 168px, black 169px)",
              WebkitMaskImage:
                "radial-gradient(circle 168px at calc(50% - 12px) calc(50% - 12px), transparent 168px, black 169px)",
            }}
          />
          <img
            className="absolute bottom-3 right-3 rounded-full w-84 bg-secondary/40 h-84 object-contain aspect-square z-10 shadow-lg"
            src={poi}
          />
        </div>
      </FadeIn>
    </div>
  );
}
