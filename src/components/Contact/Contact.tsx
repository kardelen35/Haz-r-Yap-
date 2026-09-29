import { company, contacts } from '../../data/content';
import Eyebrow from '../ui/Eyebrow';
import { PhoneIcon } from '../ui/Icons';
import './Contact.css';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.3067152460794!2d28.715481200000003!3d41.0841447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7b58d3a4603%3A0x3537bbdc2d11d468!2zxZ5haGludGVwZSwgxLBsZXJpIFNrLiBObzoxOSBEOjEsIDM0NDk0IEJhxZ9ha8WfZWhpci_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1790673173101!5m2!1sen!2str';

export default function Contact() {
  return (
    <section id="iletisim" className="contact grid-12">
      <div className="contact__intro reveal">
        <Eyebrow>İletişim</Eyebrow>
        <h2 className="contact__title">Projeniz için görüşelim.</h2>
        <p className="contact__text">
          Keşif ve teklif talepleriniz için bizi arayabilir, WhatsApp üzerinden yazabilir veya e-posta
          gönderebilirsiniz.
        </p>
        <div className="contact__info">
          <a href={`mailto:${company.email}`} className="contact__email">
            {company.email}
          </a>
          <span>{company.address}</span>
          <span>{company.hours}</span>
        </div>

        <div className="contact__map">
          <iframe
            title="Hazır Yapı İnşaat konumu — Şahintepe Mah. İleri Sk. No: 19/1, Başakşehir"
            src={MAP_SRC}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      <div className="contact__cards stagger">
        {contacts.map((c) => (
          <div key={c.name} className="contact__card reveal">
            <div className="contact__person">
              <div className="contact__role">Firma Yetkilisi</div>
              <div className="contact__name">{c.name}</div>
            </div>
            <div className="contact__actions">
              <a href={c.tel} className="contact__btn contact__btn--phone pill">
                <PhoneIcon />
                {c.phone}
              </a>
              <a href={c.wa} className="contact__btn contact__btn--wa pill" target="_blank" rel="noopener noreferrer">
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

