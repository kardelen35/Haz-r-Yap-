import { useEffect } from 'react';

/**
 * `.reveal` ve `.imgrv` sınıflı elemanları, ekrana girdiklerinde animasyonla gösterir.
 * - Sayfa açıldığında zaten ekranda olan elemanlar gizlenmez.
 * - `.stagger` kapsayıcısı içindeki elemanlar sırayla (110 ms arayla) gelir.
 * - "Hareketi azalt" ayarı açıksa hiçbir şey gizlenmez / animasyon oynamaz.
 */
export function useScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window) || !Element.prototype.animate) return;

    const seen = new WeakSet<Element>();
    const done = new WeakSet<Element>();
    const ease = 'cubic-bezier(.2,.7,.2,1)';

    const play = (el: HTMLElement) => {
      done.add(el);
      let delay = 0;
      const parent = el.parentElement;
      if (parent?.classList.contains('stagger')) {
        delay = Math.max(0, Array.prototype.indexOf.call(parent.children, el)) * 110;
      }
      const isImage = el.classList.contains('imgrv');
      const frames: Keyframe[] = isImage
        ? [
            { opacity: 0, clipPath: 'inset(0 0 30% 0 round 28px)', scale: '1.04' },
            { opacity: 1, clipPath: 'inset(0 0 0% 0 round 28px)', scale: '1' },
          ]
        : [
            { opacity: 0, translate: '0 60px' },
            { opacity: 1, translate: '0 0' },
          ];
      const anim = el.animate(frames, {
        duration: isImage ? 1300 : 950,
        delay,
        easing: ease,
        fill: 'backwards',
      });
      el.style.opacity = '';
      anim.onfinish = () => {
        el.style.opacity = '';
      };
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (done.has(el)) return;
          if (!seen.has(el)) {
            seen.add(el);
            if (e.isIntersecting && e.boundingClientRect.top < window.innerHeight * 0.9) {
              done.add(el);
              return;
            }
            el.style.opacity = '0';
            if (!e.isIntersecting) return;
          }
          if (e.isIntersecting) {
            play(el);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.08 },
    );

    const targets = document.querySelectorAll<HTMLElement>('.reveal, .imgrv');
    targets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      targets.forEach((el) => {
        el.style.opacity = '';
      });
    };
  }, []);
}
