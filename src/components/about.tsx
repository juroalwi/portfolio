import { TypedTitle } from "components/typed-title/typed-title";
import { FadeIn } from "components/fade-in";
import poi from "assets/images/poi.webp";

export const About = () => {
  return (
    <div className="flex w-full max-w-250 flex-col-reverse items-center justify-between gap-8 lg:flex-row lg:gap-20">
      <div>
        <TypedTitle
          title="Hi there, this is Julian"
          subtitle="Full stack engineer & Mathematician"
          typingSpeedMs={40}
          className="mb-4 flex flex-col text-center lg:mb-4 lg:text-left"
        />

        <FadeIn delay={200}>
          <p className="px-4 text-justify text-sm lg:px-0 lg:text-lg">
            Four years of experience building scalable and efficient systems
            using Typescript, NestJS, PostgreSQL and React.
            <br />I have a genuine enthusiasm for continuous learning and I
            thrive in collaborative environments. Known for my meticulous
            attention to detail, I consistently strive to deliver work of the
            highest possible standard.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={100} className="shrink-0" from="top">
        <div className="relative h-60 w-60 lg:h-80 lg:w-80">
          <div
            className="bg-primary/40 absolute h-full w-full rounded-full"
            style={{
              maskImage:
                "radial-gradient(circle farthest-side at 45% 45%, transparent 90.9%, black 90.9%)",
              WebkitMaskImage:
                "radial-gradient(circle farthest-side at 45% 45%, transparent 90.9%, black 90.9%)",
            }}
          />
          <img
            className="bg-secondary/40 absolute right-[5%] bottom-[5%] h-full w-full rounded-full object-contain shadow-lg"
            src={poi}
          />
        </div>
      </FadeIn>
    </div>
  );
};
