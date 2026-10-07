import Section from "./Section";
import { skills } from "../data/resumeData";

export default function Skills() {
  return (
    <Section id="skills" label="02 / SKILLS" title="Skills" alt>
      <div className="grid-3">
        {skills.map((g) => (
          <div className="card" key={g.title}>
            <h3 className="mono">{g.title.toUpperCase()}</h3>
            <ul className="tags">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
