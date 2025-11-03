import React from 'react';
import { Shield, Lock, Bug, AlertTriangle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Zero-Trust Access',
    desc: 'Continuously verifies every request with context-aware policies and micro-segmentation.',
  },
  {
    icon: Lock,
    title: 'Encryption Everywhere',
    desc: 'End-to-end encryption for data in transit and at rest with automatic key rotation.',
  },
  {
    icon: Bug,
    title: 'Threat Detection',
    desc: 'AI-assisted detection surfaces anomalies in real time across endpoints and cloud.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    desc: 'Playbooks and one-click containment to reduce mean time to recovery.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
          Built for modern security teams
        </h2>
        <p className="mt-3 text-white/70">
          Simple, powerful tooling that protects your people, devices, and data — without slowing you down.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md transition hover:bg-white/[0.15]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
