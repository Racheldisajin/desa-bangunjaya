'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email === 'admin@bangunjaya.desa.id' && password === 'admin123') {
        localStorage.setItem('admin_logged_in', 'true');
        router.push('/admin');
      } else {
        setError('Email atau Password salah!');
        setLoading(false);
      }
    }, 800);
  };

  const handleFillCredentials = () => {
    setEmail('admin@bangunjaya.desa.id');
    setPassword('admin123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/40 via-background to-emerald-50/40 flex flex-col justify-between text-foreground">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-md bg-card border border-border rounded-3xl shadow-card p-8 lg:p-10 relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center mb-8 relative z-10">
            <h1 className="text-3xl font-headline font-bold text-primary mb-2">
              Login Admin
            </h1>
            <p className="text-sm text-muted-foreground font-body">
              Desa Bangunjaya • Jaya Karsa Makarya Praja
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            {error && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm p-4 rounded-xl flex items-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2 font-body">
                Alamat Email
              </label>
              <input
                type="email"
                required
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm font-body"
                placeholder="admin@bangunjaya.desa.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2 font-body">
                Kata Sandi
              </label>
              <input
                type="password"
                required
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm font-body"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm shadow-subtle disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Mencoba masuk...</span>
                </>
              ) : (
                'Masuk ke Dashboard'
              )}
            </button>
          </form>

          {/* Quick Credential Fill */}
          <div className="mt-8 border-t border-border pt-6 text-center relative z-10">
            <p className="text-xs text-muted-foreground mb-3 font-body">
              Gunakan akun demo berikut untuk masuk cepat:
            </p>
            <button
              onClick={handleFillCredentials}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-background hover:bg-slate-800 border border-border rounded-full text-xs font-semibold text-slate-300 transition-colors duration-200"
            >
              <svg
                className="w-3.5 h-3.5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              Isi Otomatis Kredensial
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-xs text-muted-foreground border-t border-border bg-slate-900/50">
        &copy; {new Date().getFullYear()} Desa Bangunjaya. Hak Cipta Dilindungi.
      </footer>
    </div>
  );
}
