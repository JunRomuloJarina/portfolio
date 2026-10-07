import { certifications } from "../data/resumeData";

export default function Certifications() {
  return (
    <div>
      <h3 className="mono">CERTIFICATIONS</h3>
      <ul className="certs">
        {certifications.map((c) => (
          <li key={c} className="card">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
