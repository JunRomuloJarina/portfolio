import Section from "./Section";
import Certifications from "./Certifications";
import { education, recognition } from "../data/resumeData";

export default function Education() {
  return (
    <Section
      id="education"
      label="05 / EDUCATION"
      title="Education & certifications"
    >
      <div className="two-col">
        <div className="card">
          <p className="mono eyebrow">{education.year.toUpperCase()}</p>
          <h3>{education.degree.toUpperCase()}</h3>
          <p>{education.school}</p>
          <div className="highlight">
            <strong className="mono">{recognition.title.toUpperCase()}</strong>
            <p>{recognition.text}</p>
          </div>
        </div>
        <Certifications />
      </div>
    </Section>
  );
}
