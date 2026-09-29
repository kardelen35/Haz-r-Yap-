# Hazır Yapı İnşaat — Web Sitesi

Vite + React + TypeScript ile hazırlanmış tek sayfalık kurumsal site.

## Kurulum

```bash
npm install
npm run dev        # http://localhost:5173
```

`npm run dev` ve `npm run build` çalışmadan önce `scripts/fetch-assets.mjs` otomatik çalışır ve
eksik görsel/videoları `src/assets` altına indirir. Dosyalar bir kez indikten sonra tekrar indirilmez;
repoya commit etmeniz önerilir, böylece deploy sırasında internetten çekilmez.

```bash
npm run assets              # eksik olanları indir
npm run assets -- --force   # hepsini yeniden indir
```

İndirme başarısız olursa script hangi dosyanın hangi adresten alınacağını yazar; dosyayı elle indirip
aynı isimle `src/assets/...` altına koymanız yeterli.

## Build & Deploy

```bash
npm run build      # çıktı: dist/
npm run preview    # build'i lokalde test et
```

`dist/` klasörü statik bir sitedir; herhangi bir statik hosting'e yüklenebilir:

- **Vercel / Netlify:** Build komutu `npm run build`, çıktı klasörü `dist`.
- **Kendi sunucunuz (Nginx/Apache/cPanel):** `dist/` içeriğini sitenin kök klasörüne kopyalayın.

## Yapı

```
src/
  assets/
    fonts/      Bricolage Grotesque + Manrope (woff2, kendi sunucudan)
    images/     hero-poster, şantiye fotoğrafları
    videos/     hero.mp4
  components/   Her bölüm için ayrı bileşen + CSS
    Header/  Hero/  About/  Projects/  Services/  MachinePark/
    ProjectSpotlight/  Marquee/  Contact/  Footer/  ui/
  data/content.ts         Tüm metinler, projeler, hizmetler, iletişim bilgileri
  hooks/useScrollReveal.ts Kaydırınca beliren animasyonlar
  styles/global.css        Renk değişkenleri ve ortak stiller
  styles/fonts.css         @font-face tanımları
```

- **Metin / proje / telefon değiştirmek:** `src/data/content.ts`
- **Vurgu rengini değiştirmek:** `src/styles/global.css` içindeki `--accent` ve `--accent-dark`
- **Hero karartma oranı:** `--hero-overlay` (0 = yok, 0.8 = çok koyu)

## Animasyonlar

- Hero bölümü bilerek animasyonsuzdur.
- Diğer bölümlerde başlık ve kartlar ekrana girince aşağıdan yukarı belirir (`.reveal`), büyük
  fotoğraflar açılarak gelir (`.imgrv`), `.stagger` içindekiler sırayla gelir.
- Turuncu bant sürekli kayar, üzerine gelince durur.
- Kullanıcının işletim sisteminde "hareketi azalt" açıksa animasyonlar kapatılır.

## Not

Sayfa masaüstü için tasarlanmıştır (en az 1200 px genişlik). Daha dar ekranlarda yatay kaydırma çıkar;
mobil uyumluluk ayrıca eklenmelidir.
