import "./about.scss";
import me from "../../assets/me.jpeg";

export default function About() {
  return (
    <div className="about p-5 d-flex align-items-center justify-content-between">
      <img src={me} alt="myself" />
      <div>
        <h1>Julian Alvarez</h1>

        <p>
          Hi there! I am a Full Stack Developer with experience in Typescript,
          Web3, Angular, React and NodeJS. I am also currently finishing my Math
          licentiate degree. By being a Mathematician I can learn new difficult
          stuff with ease, and thinking outside of the box doesn’t mean an
          obstacle for me. However, abstract Mathematical sciences don’t always
          get the chance to be applied to real world problems. That’s why diving
          into the IT field has been one of the best decisions that I’ve made,
          since now I can make use of my logical and analytical abilities into
          concrete challenges from the computer science domain.
        </p>
      </div>
    </div>
  );
}
