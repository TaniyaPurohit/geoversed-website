import React, { useEffect, useState } from 'react';
import { Award, Pause, Play, X, Calendar, Building2, Hash, Download, ExternalLink } from 'lucide-react';

// =====================================================================
//  APNE CERTIFICATES YAHAN ADD KARO  (sirf yahi list badalni hai)
//  file = photo ka naam (public/certifications/ folder me rakhi hui)
// =====================================================================
interface Certificate {
  title: string;
  issuer: string;
  date: string;          // jaise '26 Sep 2026'
  file: string;          // jaise '/certifications/certificate_1.jpeg'
  certificateId?: string; // optional
}

const CERTIFICATES: Certificate[] = [
  {
    title: 'Resource Person: GIS & Environmental Management Training',
    issuer: 'Manaskhand Science Centre & Soban Singh Jeena University, Almora',
    date: '3 Oct 2026',
    file: '/certifications/certificate_1.jpeg',
  },
  {
    title: 'Azure: Professional Assessment Certification',
    issuer: 'Elevizo Assessment Team',
    date: '5 Oct 2026',
    file: '/certifications/certificate_2.jpeg',
    certificateId: 'ELEV-2026-PQ9ACIWN',
  },
  {
    title: 'Lean Six Sigma Black Belt',
    issuer: 'SkillsMint',
    date: '27 Sep 2026',
    file: '/certifications/certificate_3.jpeg',
    certificateId: 'SM-2026-V7D79UNT',
  },
  {
    title: 'Introduction to ITIL V4',
    issuer: 'Simplilearn SkillUP',
    date: '26 Sep 2026',
    file: '/certifications/certificate_4.jpeg',
    certificateId: '10791232',
  },
  {
    title: 'TCS iON Career Edge - AI Foundation',
    issuer: 'TCS iON (Tata Consultancy Services)',
    date: '25 Sep 2026',
    file: '/certifications/certificate_5.jpeg',
    certificateId: '279243-28295176-1016',
  },
  {
    title: 'Viksit Bharat Young Leaders Dialogue (VBYLD) 2027: Certificate of Participation',
    issuer: 'Ministry of Youth Affairs & Sports (MY Bharat)',
    date: '10 Sep 2026',
    file: '/certifications/certificate_6.jpeg',
  },
  {
    title: 'SQL and Relational Databases 101: Certificate of Completion',
    issuer: 'Cognitive Class (IBM Developer Skills Network)',
    date: '9 Sep 2026',
    file: '/certifications/certificate_7.jpeg',
    certificateId: '8033ab07996044128dffeade55e5d2aa',
  },
  {
    title: 'Data Analytics Job Simulation: Certificate of Completion',
    issuer: 'Deloitte (via Forage)',
    date: '9 Sep 2026',
    file: '/certifications/certificate_8.jpeg',
    certificateId: '68d56eccdcce0b779a2ca5ee',
  },
  {
    title: 'Cybersecurity Analyst Job Simulation: Certificate of Completion',
    issuer: 'Tata (via Forage)',
    date: '18 Aug 2026',
    file: '/certifications/certificate_9.jpeg',
  },
  {
    title: 'Data Analytics with Gen AI: Gold Certificate',
    issuer: 'FutureSkills Prime (NASSCOM IT-ITeS SSC, MeitY)',
    date: '7 Sep 2026',
    file: '/certifications/certificate_10.jpeg',
    certificateId: 'FSP/2026/9/10377332',
  },
];

// Speed: chhota number = tez, bada number = dheema
const SECONDS_PER_CARD = 6;

const isPdf = (path: string) => /\.pdf($|\?|#)/i.test(path);

export const CertificationsMarquee: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<Certificate | null>(null);

  // Screen bharne ke liye list ko repeat karo, phir poori row 2 baar dikhao (seamless loop)
  const repeats = Math.max(1, Math.ceil(6 / Math.max(CERTIFICATES.length, 1)));
  const half = Array.from({ length: repeats }, () => CERTIFICATES).flat();
  const duration = Math.max(20, half.length * SECONDS_PER_CARD);

  // Esc dabane par popup band + page scroll lock
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = old;
    };
  }, [selected]);

  const renderRow = (prefix: string, hidden: boolean) => (
    <div className="flex gap-6 pr-6 shrink-0" aria-hidden={hidden || undefined}>
      {half.map((c, i) => (
        <button
          key={`${prefix}-${i}`}
          type="button"
          onClick={() => setSelected(c)}
          className="group w-[280px] sm:w-[330px] shrink-0 text-left bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-400/60 transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
            {isPdf(c.file) ? (
              <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm font-semibold">
                PDF Certificate
              </div>
            ) : (
              <img
                src={c.file}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>
          <div className="p-4">
            <h3 className="text-sm sm:text-base font-bold text-[#0F2042] line-clamp-2 leading-snug mb-1.5 group-hover:text-blue-600 transition-colors">
              {c.title}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-1">{c.issuer}</p>
            <p className="text-xs text-blue-600 font-semibold mt-1.5">{c.date}</p>
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <section
      id="certifications"
      className="relative py-20 bg-gradient-to-b from-white via-slate-50/70 to-white overflow-hidden border-t border-slate-100 scroll-mt-20"
    >
      <style>{`
        @keyframes cert-move-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .cert-track { animation: cert-move-right var(--cert-duration, 60s) linear infinite; will-change: transform; }
        .cert-wrap:hover .cert-track,
        .cert-wrap.cert-paused .cert-track { animation-play-state: paused; }
        .cert-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
                  mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .cert-track { animation: none; }
          .cert-fade { overflow-x: auto; }
        }
      `}</style>

      <div className="max-w-3xl mx-auto px-4 text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-semibold mb-3.5">
          <Award className="w-3.5 h-3.5" />
          <span>Trust &amp; Compliance</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2042] tracking-tight font-['Poppins'] mb-3">
          Our Certifications
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Certifications, trainings and recognitions. Click any certificate to view it in full.
        </p>
      </div>

      {/* Ek hi row, left se right chalti hui */}
      <div
        className={`cert-wrap cert-fade overflow-hidden py-6 ${paused ? 'cert-paused' : ''}`}
        style={{ ['--cert-duration' as string]: `${duration}s` }}
      >
        <div className="cert-track flex w-max">
          {renderRow('a', false)}
          {renderRow('b', true)}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-2 px-4">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-semibold border border-slate-200 shadow-sm transition-all cursor-pointer"
        >
          {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          {paused ? 'Play' : 'Pause'}
        </button>
        <span className="text-xs text-slate-500">{CERTIFICATES.length} certificates · hover to pause</span>
      </div>

      {/* Click karne par bada dikhne wala popup */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-slate-200 text-slate-700 flex items-center justify-center shadow cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="bg-slate-100 p-3 sm:p-5 flex justify-center">
              {isPdf(selected.file) ? (
                <iframe
                  src={selected.file}
                  title={selected.title}
                  className="w-full h-[60vh] rounded-lg bg-white"
                />
              ) : (
                <img
                  src={selected.file}
                  alt={selected.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow"
                />
              )}
            </div>

            <div className="p-5 sm:p-7 text-left">
              <h3 className="text-lg sm:text-2xl font-extrabold text-[#0F2042] font-['Poppins'] mb-3">
                {selected.title}
              </h3>
              <div className="space-y-1.5 text-sm text-slate-600 mb-5">
                <p className="flex items-center gap-2"><Building2 className="w-4 h-4 text-blue-600" />{selected.issuer}</p>
                <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-600" />{selected.date}</p>
                {selected.certificateId && (
                  <p className="flex items-center gap-2"><Hash className="w-4 h-4 text-blue-600" />{selected.certificateId}</p>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={selected.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
                >
                  <ExternalLink className="w-4 h-4" /> Open
                </a>
                <a
                  href={selected.file}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 text-sm font-semibold"
                >
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};