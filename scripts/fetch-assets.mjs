// Görsel ve videoları src/assets altına indirir.
// Dosya zaten varsa tekrar indirmez. `npm run dev` ve `npm run build` öncesi otomatik çalışır.
// Elle çalıştırmak için: npm run assets   (zorla yeniden indirmek için: npm run assets -- --force)
import { mkdir, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');
const force = process.argv.includes('--force');

const SANTIYE = 'https://haziryapiinsaat.com.tr/assets/santiye';
const WIX_ID = '84770f_89484cd5eab5434989d37e7fa53caae1';

const ASSETS = [
  {
    file: 'videos/hero.mp4',
    url: `https://video.wixstatic.com/video/${WIX_ID}/1080p/mp4/file.mp4`,
    kind: 'video',
  },
  {
    file: 'images/hero-poster.jpg',
    // enc_avif parametresi olmadan istenir ki gerçekten JPEG gelsin
    url: `https://static.wixstatic.com/media/${WIX_ID}f000.jpg/v1/fill/w_1920,h_1200,fp_0.60_0.20,q_85/${WIX_ID}f000.jpg`,
    kind: 'image',
  },
  { file: 'images/alarko-01.jpg', url: `${SANTIYE}/alarko-01.jpg`, kind: 'image' },
  { file: 'images/alarko-02.jpg', url: `${SANTIYE}/alarko-02.jpg`, kind: 'image' },
  { file: 'images/astay-01.jpg', url: `${SANTIYE}/astay-01.jpg`, kind: 'image' },
  { file: 'images/astay-07.jpg', url: `${SANTIYE}/astay-07.jpg`, kind: 'image' },
  { file: 'images/hebil-01.jpg', url: `${SANTIYE}/hebil-01.jpg`, kind: 'image' },
  { file: 'images/riva-06.jpg', url: `${SANTIYE}/riva-06.jpg`, kind: 'image' },
];

async function exists(path) {
  try {
    const s = await stat(path);
    return s.size > 0;
  } catch {
    return false;
  }
}

let failed = 0;
for (const a of ASSETS) {
  const dest = join(root, a.file);
  if (!force && (await exists(dest))) continue;
  try {
    const res = await fetch(a.url, {
      headers: { Accept: a.kind === 'video' ? 'video/mp4,*/*' : 'image/jpeg,image/*;q=0.8' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const type = res.headers.get('content-type') || '';
    if (!type.startsWith(a.kind)) throw new Error(`beklenmeyen içerik türü: ${type}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`✓ ${a.file}  (${(buf.length / 1024 / 1024).toFixed(2)} MB)`);
  } catch (err) {
    failed++;
    console.error(`✗ ${a.file} indirilemedi — ${err.message}\n   Kaynak: ${a.url}`);
  }
}

if (failed) {
  console.error(
    `\n${failed} dosya indirilemedi. Dosyaları yukarıdaki adreslerden elle indirip ` +
      `src/assets altındaki aynı isimlerle kaydedebilirsiniz.`,
  );
  process.exit(1);
}
