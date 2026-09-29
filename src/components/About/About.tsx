import aboutImage from '../../assets/images/alarko-02.jpg';
import { stats } from '../../data/content';
import Eyebrow from '../ui/Eyebrow';
import { ArrowIcon } from '../ui/Icons';
import './About.css';

export default function About() {
  return (
    <section id="kurumsal" className="about">
      <div className="about__intro grid-12 reveal">
        <div className="about__label">
          <Eyebrow>Firmamız Hakkında</Eyebrow>
        </div>
        <div className="about__body">
          <h2 className="section-title">
            Kazıdan teslime, sahadaki her imalatı kendi ekipmanımız ve kadromuzla yürütüyoruz.
          </h2>
          <div className="about__text">
            <p>
              Başakşehir / İstanbul merkezli firmamız; İstanbul ve Bodrum başta olmak üzere Türkiye'nin her
              yerinde altyapı, hafriyat ve peyzaj işlerinde hizmet vermektedir.
            </p>
            <p>
              Türkiye'nin önde gelen konut ve villa projelerinin şantiyelerinde, ana yüklenicilerin çözüm ortağı
              olarak çalışıyor; iş programına, iş güvenliğine ve taahhüt ettiğimiz tarihe sadık kalıyoruz.
            </p>
          </div>
          <a href="#iletisim" className="about__btn pill">
            Bizimle Çalışın
            <ArrowIcon />
          </a>
        </div>
      </div>

      <div className="about__visual grid-12">
        <div className="about__image imgrv zoomwrap">
          <img src={aboutImage} alt="Deniz manzaralı şantiyede zemin sıkıştırma çalışması" />
        </div>
        <div className="about__stats stagger">
          {stats.map((s) => (
            <div key={s.label} className={`about__stat about__stat--${s.variant} reveal`}>
              <div className="about__stat-value">
                {s.value}
                {s.suffix && <span className="about__stat-suffix">{s.suffix}</span>}
              </div>
              <div className="about__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
