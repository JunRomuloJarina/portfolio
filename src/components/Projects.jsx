import { Github } from "lucide-react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { featuredProject as f, otherProjects } from "../data/resumeData";

export default function Projects() {
  return (
    <Section id="projects" label="04 / PROJECTS" title="Projects" alt>
      <article className="card featured">
        <p className="mono eyebrow">FEATURED PROJECT</p>
        <h3>{f.title.toUpperCase()}</h3>
        <p>{f.description}</p>
        <ul className="tags">
          {f.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="two-col">
          <ul className="check-list">
            {f.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <ol className="flow" aria-label="Architecture flow">
            {f.flow.map((s, i) => (
              <li key={s}>
                <span className="mono">{s}</span>
                {i < f.flow.length - 1 && (
                  <span className="arrow" aria-hidden="true">
                    ↓
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
        {f.repo && (
          <a className="btn" href={f.repo} target="_blank" rel="noreferrer">
            <Github size={16} aria-hidden="true" /> View on GitHub
          </a>
        )}
      </article>
      <h3 className="sub">Other projects</h3>
      <div className="grid-3">
        {otherProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}
