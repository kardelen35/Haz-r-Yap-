import { services } from '../../data/content';
import Eyebrow from '../ui/Eyebrow';
import { ArrowIcon } from '../ui/Icons';
import './Services.css';

export default function Services() {
  return (
    <section id="hizmetler" className="services">
      <div className="services__head grid-12 reveal">
        <div className="services__heading">
          <Eyebrow tone="light">Hizmetlerimiz</Eyebrow>
          <h2 className="section-title">Kazıdan teslime, uçtan uca saha çözümleri</h2>
        </div>
        <p className="services__intro">
          Projenin altyapısından çevre düzenlemesine kadar tüm saha süreçlerini tek elden, kendi ekipmanımızla
          yönetiyoruz.
        </p>
      </div>

      <div className="services__grid stagger">
        {services.map((s) => (
          <div key={s.no} className="scard reveal">
            <div className="scard__top">
              <span className="scard__no">/ {s.no}</span>
              <span className="scard__icon">
                <ArrowIcon color="#FFFFFF" />
              </span>
            </div>
            <h3 className="scard__title">{s.title}</h3>
            <p className="scard__desc">{s.desc}</p>
            <div className="scard__list">
              {s.items.map((it) => (
                <div key={it} className="scard__item">
                  <span className="scard__bullet" />
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
