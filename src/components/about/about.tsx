import "./about.scss";
import me from "../../assets/me.jpeg";

export default function About() {
  return (
    <div className="section about px-5 d-flex align-items-center justify-content-between">
      <img src={me} alt="myself" className="col-4 px-0" />
      <div className="col-1"></div>
      <div className="col-7">
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
          I am also completing a Math licentiate degree, which has sharpened my
          critical thinking and problem-solving skills. This blend of
          mathematical background and development expertise allows me to
          approach challenges from multiple angles and find creative solutions.
          <br />I thrive in collaborative team environments, continuously
          learning from my colleagues while delivering work of the highest
          standard
        </p>
      </div>
    </div>
  );
}
