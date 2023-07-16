import "./about.scss";
import me from "../../assets/me.jpeg";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="about container mb-16 px-12 flex items-center justify-between">
        <img src={me} alt="myself" className="w-2/6 rounded-full" />

        <div className="w-3/6">
          <h1 className="section-title mb-4">
            Julian Alvarez <br className="mb-2" />
            {"{ Poi }"}
          </h1>

          <p>
            Hi there! <br />
            I am a Web3 full stack developer with 1.5 years of experience in
            building scalable, user-friendly interfaces using Typescript, React,
            Web3, Angular, and Node.
            <br />
            I am also completing a Math licentiate degree, which has sharpened
            my critical thinking and problem-solving skills. This blend of
            mathematical background and development expertise allows me to
            approach challenges from multiple angles and find creative
            solutions.
            <br />I thrive in collaborative team environments, continuously
            learning from my colleagues while delivering work of the highest
            standard
          </p>
        </div>
      </div>

      <button className="get-in-touch-btn">Get in touch</button>
    </div>
  );
}
