import { Download, Github } from "lucide-react";
import { profile } from "../data/resumeData";

export default function Hero() {
  const rows = [
    ["Location", profile.location],
    ["Focus", profile.focus],
    ["Education", profile.education],
    ["Status", profile.status],
  ];
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="badge mono">
            <span className="dot" aria-hidden="true" /> AVAILABLE FOR
            OPPORTUNITIES
          </p>
          <h1>{profile.name.toUpperCase()}</h1>
          <p className="roles mono">{profile.roles.toUpperCase()}</p>
          <p className="lead">{profile.summary}</p>
          <div className="btn-row">
            <a className="btn primary" href="#projects">
              View my projects
            </a>
            <a
              className="btn"
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
            >
              <Download size={16} aria-hidden="true" /> Download resume
            </a>
            <a
              className="link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} aria-hidden="true" /> GitHub
            </a>
          </div>
        </div>
        <dl className="panel">
          {rows.map(([k, v]) => (
            <div key={k}>
              <dt className="mono">{k.toUpperCase()}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
