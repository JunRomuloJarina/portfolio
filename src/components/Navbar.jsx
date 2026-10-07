import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/resumeData";

const links = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      el && io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="navbar">
      <nav className="container nav-inner" aria-label="Main navigation">
        <a href="#top" className="brand">
          {profile.name.toUpperCase()}
        </a>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={active === l.toLowerCase() ? "active" : ""}
                aria-current={active === l.toLowerCase() ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
