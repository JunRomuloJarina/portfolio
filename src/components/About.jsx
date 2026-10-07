import Section from "./Section";
import { aboutText, attributes } from "../data/resumeData";

export default function About() {
  return (
    <Section id="about" label="01 / ABOUT" title="About me">
      <div className="two-col">
        <div className="prose">
          {aboutText.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <div>
          <h3>Professional attributes</h3>
          <ul className="check-list">
            {attributes.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
