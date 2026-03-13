import { useState } from "react";
import { TypedTitle } from "components/typed-title/typed-title";
import { FadeIn } from "components/fade-in";
import poi from "assets/images/poi.webp";

export const About = () => {
  const [mainTitleTyped, setMainTitleTyped] = useState(false);

  return (
    <div className="flex w-full max-w-250 flex-col-reverse items-center justify-between gap-0 lg:flex-row lg:gap-20">
      <div>
        <TypedTitle
          className="mb-0 text-center lg:mb-1 lg:text-left"
          onFinishTyping={() => setMainTitleTyped(true)}
          caretHidden={mainTitleTyped}
          typingSpeedMs={40}
        >
          Hi there, this is Julian
        </TypedTitle>
        <TypedTitle
          className="mb-4 text-center lg:mb-6 lg:text-left"
          typingSpeedMs={30}
          small
          disabled={!mainTitleTyped}
        >
          Full stack engineer & Mathematician
        </TypedTitle>

        <FadeIn delay={200}>
          <p className="w-full p-4 text-left text-base lg:p-0 lg:text-lg">
            Four years of experience building scalable and efficient systems
            using Typescript, NestJS, PostgreSQL and React.
            <br />I have a genuine enthusiasm for continuous learning and I
            thrive in collaborative environments. Known for my meticulous
            attention to detail, I consistently strive to deliver work of the
            highest possible standard.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={100}>
        <div className="relative size-0.5 h-84 w-84 shrink-0 scale-75 lg:scale-none">
          <div
            className="bg-primary/40 absolute inset-0 rounded-full shadow-lg"
            style={{
              maskImage:
                "radial-gradient(circle 168px at calc(50% - 12px) calc(50% - 12px), transparent 168px, black 169px)",
              WebkitMaskImage:
                "radial-gradient(circle 168px at calc(50% - 12px) calc(50% - 12px), transparent 168px, black 169px)",
            }}
          />
          <img
            className="bg-secondary/40 absolute right-3 bottom-3 z-10 aspect-square h-84 w-84 rounded-full object-contain shadow-lg"
            src={poi}
          />
        </div>
      </FadeIn>
    </div>
  );
};
