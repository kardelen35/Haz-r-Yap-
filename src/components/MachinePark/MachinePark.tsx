import { advantages, machines } from '../../data/content';
import Eyebrow from '../ui/Eyebrow';
import './MachinePark.css';

export default function MachinePark() {
  return (
    <section id="makine-parki" className="machines">
      <div className="machines__layout grid-12">
        <div className="machines__intro reveal">
          <Eyebrow>Makine Parkımız</Eyebrow>
          <h2 className="machines__title">
            İşlerimizi kiralık ekipmanla değil, <span className="machines__hl">kendi makine parkımızla</span>{' '}
            yapıyoruz.
          </h2>
          <p className="machines__text">
            Projeleriniz beklemeden başlar, taahhüt edilen tarihte teslim edilir. Ekipmanın sahada hazır olması; iş
            programının aksamaması, maliyetin öngörülebilir olması ve tek muhataplı bir süreç demektir.
          </p>
          <div className="machines__advantages">
            {advantages.map((a) => (
              <div key={a.t} className="machines__adv">
                <div className="machines__adv-title">{a.t}</div>
                <div className="machines__adv-text">{a.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="machines__list stagger">
          {machines.map((m) => (
            <div key={m.no} className="mrow reveal">
              <span className="mrow__no">/ {m.no}</span>
              <div className="mrow__body">
                <div className="mrow__title">{m.t}</div>
                <div className="mrow__text">{m.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
