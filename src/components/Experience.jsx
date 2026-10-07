import Section from "./Section";
import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <Section id="experience" label="03 / EXPERIENCE" title="Experience">
      <ol className="timeline">
        {experience.map((e, i) => (
          <li key={e.title} className={`t-item${e.primary ? " primary" : ""}`}>
            <p className="mono eyebrow">
              EXPERIENCE {String(i + 1).padStart(2, "0")} · {e.date}
            </p>
            <h3>{e.title}</h3>
            <p className="org">{e.org}</p>
            <ul>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
