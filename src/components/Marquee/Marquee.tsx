import { marqueeItems } from '../../data/content';
import './Marquee.css';

export default function Marquee() {
  // Kesintisiz kayma için liste iki kez basılır; animasyon -50% kaydırır
  return (
    <section className="marquee" aria-label="Aktif şantiyeler ve hizmetler">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee__group" aria-hidden={copy === 1 || undefined}>
            {marqueeItems.map((w) => (
              <div key={w} className="marquee__item">
                <span>{w}</span>
                <span className="marquee__diamond" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
