import { company, navLinks } from '../../data/content';
import { ArrowIcon } from '../ui/Icons';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <a href="#top" className="header__logo">
        <span className="header__logo-strong">HAZIR YAPI</span>
        <span className="header__logo-light">İnşaat</span>
      </a>
      <nav className="header__nav" aria-label="Ana menü">
        {navLinks.map((l, i) => (
          <a key={l.href} href={l.href} className={i === 0 ? 'is-active' : undefined}>
            {l.label}
          </a>
        ))}
      </nav>
      <a href={company.mainPhone.href} className="header__cta">
        Teklif Alın
        <ArrowIcon />
      </a>
    </header>
  );
}
