import { Mail, Github } from 'lucide-react'
import Section from './Section'
import { profile as p } from '../data/resumeData'

export default function Contact() {
  const rows = [['Email', <a href={`mailto:${p.email}`}>{p.email}</a>], ['Phone', p.phone], ['Location', p.location], ['GitHub', <a href={p.github} target="_blank" rel="noreferrer">{p.github}</a>]]
  return (
    <Section id="contact" label="06 / CONTACT" title="Let's work together" alt>
      <p className="lead">Interested in discussing an entry-level IT or software development opportunity?</p>
      <dl className="panel contact-panel">
        {rows.map(([k, v]) => <div key={k}><dt className="mono">{k.toUpperCase()}</dt><dd>{v}</dd></div>)}
      </dl>
      <div className="btn-row">
        <a className="btn primary" href={`mailto:${p.email}`}><Mail size={16} aria-hidden="true" /> Email me</a>
        <a className="btn" href={p.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> View GitHub</a>
      </div>
    </Section>
  )
}
