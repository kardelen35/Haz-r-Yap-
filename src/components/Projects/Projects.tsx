import { projects } from '../../data/content';
import Eyebrow from '../ui/Eyebrow';
import { ArrowIcon } from '../ui/Icons';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projeler" className="projects">
      <div className="projects__head reveal">
        <div className="projects__heading">
          <Eyebrow>Devam Eden Projeler</Eyebrow>
          <h2 className="section-title">Sahada olduğumuz projeler</h2>
        </div>
        <a href="#projeler" className="projects__all pill">
          Tüm Projeler
          <ArrowIcon />
        </a>
      </div>

      <div className="projects__grid stagger">
        {projects.map((p) => (
          <a key={p.name} href="#projeler" className="pcard reveal">
            <div className="pcard__photo">
              <img src={p.img} alt={p.alt} loading="lazy" />
              <span className="pcard__badge">{p.count} Kare</span>
            </div>
            <div className="pcard__info">
              <div className="pcard__loc">{p.loc}</div>
              <div className="pcard__name">{p.name}</div>
              <div className="pcard__scope">{p.scope}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
