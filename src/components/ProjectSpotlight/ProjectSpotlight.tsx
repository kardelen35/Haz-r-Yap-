import spotlightImage from '../../assets/images/astay-01.jpg';
import Eyebrow from '../ui/Eyebrow';
import { ArrowIcon } from '../ui/Icons';
import './ProjectSpotlight.css';

const details = [
  { label: 'Konum', value: 'Bodrum / Muğla' },
  { label: 'Kapsam', value: 'Altyapı & Hafriyat' },
  { label: 'Durum', value: 'Devam ediyor' },
];

export default function ProjectSpotlight() {
  return (
    <section className="spotlight">
      <div className="spotlight__frame imgrv zoomwrap">
        <img className="spotlight__img" src={spotlightImage} alt="Astay şantiyesi" loading="lazy" />
        <div className="spotlight__overlay" />
        <div className="spotlight__label">
          <Eyebrow tone="white">Şantiyeden</Eyebrow>
        </div>

        <div className="spotlight__card">
          <div className="spotlight__kicker">Proje Odağı</div>
          <div className="spotlight__name">Astay</div>
          <div className="spotlight__details">
            {details.map((d) => (
              <div key={d.label} className="spotlight__row">
                <span className="spotlight__row-label">{d.label}</span>
                <span className="spotlight__row-value">{d.value}</span>
              </div>
            ))}
          </div>
          <a href="#projeler" className="spotlight__btn pill">
            Galeriyi Gör
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
