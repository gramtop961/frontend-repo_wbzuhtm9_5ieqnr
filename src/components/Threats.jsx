import React from 'react';
import { Shield } from 'lucide-react';

const threats = [
  {
    name: 'Phishing & Social Engineering',
    detail:
      'Deceptive emails and messages that trick users into sharing credentials or installing malware.',
    gradient: 'from-emerald-400/20 to-cyan-400/10',
  },
  {
    name: 'Ransomware',
    detail:
      'Malicious software encrypts files and demands payment. Backups and segmentation are critical.',
    gradient: 'from-fuchsia-400/20 to-rose-400/10',
  },
  {
    name: 'DDoS Attacks',
    detail:
      'Flooding services with traffic to disrupt availability. Mitigate with rate limiting and scrubbing.',
    gradient: 'from-amber-400/20 to-orange-400/10',
  },
  {
    name: 'Insider Risks',
    detail:
      'Compromised or careless users cause data leaks. Monitor behavior and limit access by default.',
    gradient: 'from-sky-400/20 to-blue-400/10',
  },
];

export default function Threats() {
  return (
    <section id="threats" className="relative mx-auto max-w-6xl px-6 pb-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Understand today’s threat landscape
        </h2>
        <p className="mt-3 text-white/70">
          Visualize common attack vectors and how layered defenses reduce risk.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {threats.map((t) => (
          <div
            key={t.name}
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur-md"
          >
            <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${t.gradient} blur-2xl`} />

            <div className="relative z-10 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-white/70">{t.detail}</p>
              </div>
            </div>

            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                Prevention
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                Detection
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                Response
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
