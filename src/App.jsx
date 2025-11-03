import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Threats from './components/Threats';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(16,185,129,0.15),transparent),radial-gradient(1000px_500px_at_10%_10%,rgba(59,130,246,0.12),transparent)] text-white">
      {/* Floating glass navbar */}
      <header className="sticky top-0 z-50 mx-auto w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="text-sm font-semibold tracking-wide text-white/90">Sentinel Glass</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#threats" className="hover:text-white">Threats</a>
            <a href="#" className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md hover:bg-white/20">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Threats />

        {/* Call to action section */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-md sm:p-14">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-sky-400/20 blur-2xl" />
            <h3 className="bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
              Ready to harden your perimeter?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              Start with a guided assessment and deploy best-practice controls in minutes.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-xl bg-emerald-500/90 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-500 hover:shadow-emerald-500/40"
              >
                Get a Security Audit
              </a>
              <a
                href="#features"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
