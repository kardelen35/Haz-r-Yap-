import { useEffect, useRef } from 'react';
import heroVideo from '../../assets/videos/hero.mp4';
import heroPoster from '../../assets/images/hero-poster.jpg';
import { company } from '../../data/content';
import Header from '../Header/Header';
import { ArrowIcon } from '../ui/Icons';
import './Hero.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // React "muted" özelliğini DOM'a her zaman yazmadığı için otomatik oynatmayı garantiye alıyoruz
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play()?.catch(() => {});
  }, []);

  return (
    <section className="hero">
      <img className="hero__media" src={heroPoster} alt="" />
      <video
        ref={videoRef}
        className="hero__media"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero__overlay" />

      <Header />

      <div className="hero__content">
        <div className="hero__main">
          <div className="hero__kicker">
            <span className="hero__kicker-line" />
            Altyapı — Hafriyat — Peyzaj
          </div>
          <h1 className="hero__title">
            Sağlam yapılar,
            <br />
            sağlam zeminle başlar.
          </h1>
          <p className="hero__lead">
            Kendi makine parkımız ve deneyimli saha kadromuzla, 15+ yıldır güvenilir çözüm ortağınız.
          </p>
          <div className="hero__actions">
            <a href={company.mainPhone.href} className="hero__btn hero__btn--solid">
              Teklif Alın
              <ArrowIcon />
            </a>
            <a href="#projeler" className="hero__btn hero__btn--ghost">
              Projelerimiz
            </a>
          </div>
        </div>
        <div className="hero__side">
          <span>Başakşehir / İstanbul</span>
          <span>İstanbul · Bodrum · Türkiye geneli</span>
        </div>
      </div>
    </section>
  );
}
