import React from 'react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/70">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Sentinel Glass — Secure by design.
          </p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#threats" className="hover:text-white">Threats</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
