import alarko01 from '../assets/images/alarko-01.jpg';
import astay07 from '../assets/images/astay-07.jpg';
import hebil01 from '../assets/images/hebil-01.jpg';
import riva06 from '../assets/images/riva-06.jpg';

export const company = {
  name: 'Hazır Yapı İnşaat',
  email: 'haziryapiinsaat@hotmail.com',
  address: 'Şahintepe Mah. İleri Sk. No: 19/1, Başakşehir / İstanbul',
  addressLines: ['Şahintepe Mah. İleri Sk. No: 19/1', 'Başakşehir / İstanbul'],
  hours: 'Pazartesi – Cumartesi, 07:00 – 19:00',
  mainPhone: { label: '0542 390 02 32', href: 'tel:+905423900232' },
};

export const navLinks = [
  { label: 'Ana Sayfa', href: '#top' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'Makine Parkı', href: '#makine-parki' },
  { label: 'Kurumsal', href: '#kurumsal' },
  { label: 'İletişim', href: '#iletisim' },
];

export const footerLinks = [
  { label: 'Hizmetlerimiz', href: '#hizmetler' },
  { label: 'Projelerimiz', href: '#projeler' },
  { label: 'Makine Parkımız', href: '#makine-parki' },
  { label: 'Kurumsal', href: '#kurumsal' },
  { label: 'İletişim', href: '#iletisim' },
];

export type Stat = { value: string; suffix?: string; label: string; variant: 'light' | 'dark' | 'accent' };
export const stats: Stat[] = [
  { value: '15', suffix: '+', label: 'Yıllık Saha Tecrübesi', variant: 'light' },
  { value: '250', suffix: '+', label: 'Tamamlanan İş', variant: 'dark' },
  { value: '10+', label: 'İş Makinesi', variant: 'accent' },
  { value: '4', label: 'Aktif Şantiye', variant: 'light' },
];

export const projects = [
  { name: 'Alarko Hillside', loc: 'Bodrum / Muğla', scope: 'Altyapı & Hafriyat İşleri', count: 12, img: alarko01, alt: 'Alarko Hillside şantiyesi — altyapı imalatları' },
  { name: 'Astay', loc: 'Bodrum / Muğla', scope: 'Altyapı & Hafriyat İşleri', count: 8, img: astay07, alt: 'Astay şantiyesi — ekskavatörlerle kanal kazısı' },
  { name: 'Hebil Blue', loc: 'Bodrum / Muğla', scope: 'Altyapı & Drenaj İşleri', count: 5, img: hebil01, alt: 'Hebil Blue şantiyesi — drenaj ve altyapı hatları' },
  { name: 'Riva Regnum', loc: 'Bodrum / Muğla', scope: 'Altyapı & Hafriyat İşleri', count: 6, img: riva06, alt: 'Riva Regnum şantiyesi — kanal kazısı ve nivelman' },
];

export const services = [
  { no: '01', title: 'Altyapı İşleri', desc: 'Yağmur suyu, kanalizasyon ve içme suyu hatları ile tüm bina altyapı imalatları, projesine uygun ve raporlanabilir şekilde.', items: ['Kanal ve boru hattı imalatı', 'Menfez ve rögar imalatı', 'Dolgu ve zemin sıkıştırma'] },
  { no: '02', title: 'Hafriyat İşleri', desc: 'Her ölçekte kazı, yıkım ve nakliye operasyonu; kendi damperli kamyon ve ekskavatör filomuzla planlanan takvimde.', items: ['Temel ve bodrum kazıları', 'Yıkım ve moloz nakli', 'Arazi tesviye ve reglaj'] },
  { no: '03', title: 'Peyzaj İşleri', desc: 'Site, park ve özel bahçe projelerinde toprak işlerinden sert zemin imalatlarına komple çevre düzenlemesi.', items: ['Çevre düzenleme ve tesviye', 'Bitkisel toprak serimi', 'Bordür ve parke taşı imalatı'] },
];

export const advantages = [
  { t: 'Deneyimli Operatör Kadrosu', d: 'İş güvenliği eğitimli, sahada tecrübeli ekip.' },
  { t: 'Zamanında Teslim', d: 'Planlanan takvime sadık, şeffaf iş takibi.' },
  { t: 'Tek Muhatap', d: 'Kazıdan teslime tüm süreç tek elden yönetilir.' },
  { t: 'Öngörülebilir Maliyet', d: 'Aracı maliyeti olmadan doğrudan firma fiyatı.' },
];

export const machines = [
  { no: '01', t: 'Paletli Ekskavatör', d: 'Temel kazıları, kanal açma ve yıkım işlerinde yüksek kapasiteli kazı gücü.' },
  { no: '02', t: 'Damperli Kamyon', d: 'Hafriyat ve moloz nakliyesinde kesintisiz taşıma kapasitesi.' },
  { no: '03', t: 'Beko Loder', d: 'Dar alanlarda kazı, yükleme ve tesviye işlerinde çok yönlü kullanım.' },
  { no: '04', t: 'Silindir & Kompaktör', d: 'Dolgu ve zemin sıkıştırma imalatlarında proje standardında yoğunluk.' },
];

export const marqueeItems = ['Alarko Hillside', 'Astay', 'Hebil Blue', 'Riva Regnum', 'Altyapı', 'Hafriyat', 'Peyzaj', 'İstanbul', 'Bodrum'];

export const contacts = [
  { name: 'Bektaş Petek', phone: '0542 390 02 32', tel: 'tel:+905423900232', wa: 'https://wa.me/905423900232' },
  { name: 'Rüstem Vural Hazır', phone: '0530 958 74 50', tel: 'tel:+905309587450', wa: 'https://wa.me/905309587450' },
];
