import { profile as p } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p>© 2026 {p.name}</p>
          <p className="mono small">{p.roles}</p>
        </div>
        <p>
          <a href={p.github} target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          · <a href={`mailto:${p.email}`}>Email</a>
        </p>
      </div>
    </footer>
  );
}
