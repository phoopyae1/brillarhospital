"use client";

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white/70 backdrop-blur border-b border-slate-200 sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/img/brillar-logo.png"
            alt="Brillar Hospital"
            className="h-8 w-auto"
          />
          <div className="font-semibold">Brillar Hospital</div>
        </Link>

        <nav className="flex gap-3 text-sm">
          <Link href="/patients">Patients & Visitors</Link>
          <Link href="/services">Centres & Services</Link>
          <Link href="/doctors">Find a Doctor</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/room-charges">Room Charges</Link>
        </nav>

        <a
          href="https://brillar-emr.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-sky-600 bg-sky-500 text-white hover:brightness-95"
        >
          Staff/Doctor Login
        </a>
      </div>
    </header>
  );
}
