import { useEffect, useRef } from "react";

export default function Section({ id, label, title, children, alt }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      el?.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section
      id={id}
      className={`section reveal${alt ? " alt" : ""}`}
      ref={ref}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <p className="mono eyebrow">{label}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}
