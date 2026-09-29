import { company, contacts, footerLinks } from '../../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top grid-12">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-strong">HAZIR YAPI</span>
            <span>İnşaat</span>
          </div>
          <p className="footer__about">
            Kendi iş makinesi parkımızla İstanbul, Bodrum ve Türkiye genelinde altyapı, hafriyat ve peyzaj işlerinde
            güvenilir çözüm ortağınız.
          </p>
        </div>

        <div className="footer__col footer__col--sitemap">
          <div className="footer__heading">Site Haritası</div>
          {footerLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="footer__col footer__col--office">
          <div className="footer__heading">Merkez Ofis</div>
          <span className="footer__address">
            {company.addressLines[0]}
            <br />
            {company.addressLines[1]}
          </span>
          {contacts.map((c) => (
            <a key={c.tel} href={c.tel}>
              {c.phone}
            </a>
          ))}
        </div>

        <div className="footer__col footer__col--quote">
          <div className="footer__heading">Teklif</div>
          <span className="footer__muted">Keşif mi planlıyorsunuz?</span>
          <a href={company.mainPhone.href} className="footer__cta">
            Teklif Alın
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__wordmark reveal" aria-hidden="true">
          HAZIR YAPI
        </div>
        <div className="footer__legal">
          <span>© Hazır Yapı İnşaat. Tüm hakları saklıdır.</span>
          <a href="#top">Başa Dön ↑</a>
        </div>
      </div>
    </footer>
  );
}
