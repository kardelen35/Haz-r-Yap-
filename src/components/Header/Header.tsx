import { useEffect, useState } from 'react';
import { company, navLinks } from '../../data/content';
import { ArrowIcon } from '../ui/Icons';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Menü açıkken arka plan kaymasın, Esc ile kapansın
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Ekran masaüstü boyutuna büyürse menüyü kapat
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1101px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header${open ? ' is-open' : ''}`}>
      <a href="#top" className="header__logo" onClick={close}>
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

      <div className="header__right">
        <a href={company.mainPhone.href} className="header__cta">
          Teklif Alın
          <ArrowIcon />
        </a>
        <button
          type="button"
          className="header__burger"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="mobile-menu__nav" aria-label="Mobil menü">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <a href={company.mainPhone.href} className="mobile-menu__cta" onClick={close}>
            Teklif Alın
            <ArrowIcon />
          </a>
          <a href={company.mainPhone.href} className="mobile-menu__phone">
            {company.mainPhone.label}
          </a>
        </div>
      </div>
    </header>
  );
}