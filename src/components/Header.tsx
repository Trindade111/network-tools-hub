import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Users } from "lucide-react";

const NETWORKING_CORTES_URL = "https://networkingcortes.com";

const navItems = [
  { label: "Ferramentas", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Planos", to: "/planos" },
  { label: "Conta", to: "/membros" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold-300 to-gold-500 text-primary-foreground shadow-[0_0_12px_rgba(250,204,21,0.15)]">
            <span className="text-sm font-black tracking-tight">N</span>
          </div>
          <span className="text-sm font-semibold tracking-tight">
            Networking{" "}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              Cortes
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-md px-3 py-1.5 text-[13px] transition-all duration-150 ${
                  isActive
                    ? "bg-foreground/[0.08] font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-2 h-4 w-px bg-border" />
          <a
            href={NETWORKING_CORTES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-all duration-200 hover:bg-surface-hover hover:text-foreground"
          >
            <Users size={13} />
            Comunidade gratuita
          </a>
          <Link
            to="/login"
            className="ml-2 rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-3.5 py-1.5 text-[13px] font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)]"
          >
            Entrar
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-muted-foreground transition hover:text-foreground"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/98 backdrop-blur-2xl md:hidden animate-fade-in">
          <div className="space-y-0.5 px-4 py-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-foreground/[0.08] font-medium text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={NETWORKING_CORTES_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground"
            >
              <Users size={14} />
              Comunidade gratuita
            </a>
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Entrar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
