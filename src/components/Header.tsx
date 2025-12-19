"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/img/brillar-logo.png"
              alt="Brillar Hospital"
              className="h-10 w-auto"
            />
            <div className="font-semibold text-sm text-slate-900 hidden sm:block">Brillar Hospital</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              href="/patients" 
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
            >
              Patients
            </Link>
            <Link 
              href="/services" 
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/healthcare-packages" 
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
            >
              Packages
            </Link>
            <Link 
              href="/doctors" 
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
            >
              Doctors
            </Link>
            <Link 
              href="/contact" 
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/room-charges" 
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
            >
              Room Charges
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://patient-portal.atenxion.ai/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold text-sky-600 border border-sky-600 rounded-lg hover:bg-sky-50 transition-colors"
            >
              Portal
            </a>
            <a
              href="https://patient-portal.atenxion.ai/admin/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
            >
              Staff Login
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-1">
              <Link 
                href="/patients" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                Patients & Visitors
              </Link>
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                Centres & Services
              </Link>
              <Link 
                href="/healthcare-packages" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                Healthcare Packages
              </Link>
              <Link 
                href="/doctors" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                Find a Doctor
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/room-charges" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                Room Charges
              </Link>
              <div className="pt-4 border-t border-slate-200 mt-2 space-y-2">
                <a
                  href="https://patient-portal.atenxion.ai/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-semibold text-sky-600 border border-sky-600 rounded-lg hover:bg-sky-50 transition-colors text-center"
                >
                  Patient Portal
                </a>
                <a
                  href="https://patient-portal.atenxion.ai/admin/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-semibold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors text-center"
                >
                  Staff/Doctor Login
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
