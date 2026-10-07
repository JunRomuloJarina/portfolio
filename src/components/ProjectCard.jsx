export default function ProjectCard({ title, tag, description }) {
  return (
    <article className="card hoverable">
      <p className="mono eyebrow">{tag.toUpperCase()}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
