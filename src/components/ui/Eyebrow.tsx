import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  /** light: koyu zemin üstünde soluk beyaz, white: fotoğraf üstünde beyaz */
  tone?: 'default' | 'light' | 'white';
};

export default function Eyebrow({ children, tone = 'default' }: EyebrowProps) {
  const cls = tone === 'default' ? 'eyebrow' : `eyebrow eyebrow--${tone}`;
  return (
    <div className={cls}>
      <span className="eyebrow__dot" />
      {children}
    </div>
  );
}
