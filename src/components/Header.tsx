import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Ferramentas", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Planos", to: "/planos" },
  { label: "Minha conta", to: "/membros" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-primary/40 bg-gradient-to-br from-gold-300 to-gold-500 text-primary-foreground shadow-[var(--gold-glow)]">
            <span className="text-xl font-black">N</span>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-primary/80">Network</div>
            <div className="text-base font-semibold tracking-wide">Ferramentas</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-lg px-3.5 py-2 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-primary/15 font-semibold text-primary"
                    : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/login"
            className="ml-2 rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:scale-[1.02]"
          >
            Entrar
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground/80 transition hover:text-foreground"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-foreground/10 bg-background/95 backdrop-blur-xl md:hidden animate-fade-in">
          <div className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-sm transition ${
                    isActive
                      ? "bg-primary/15 font-semibold text-primary"
                      : "text-foreground/60 hover:bg-foreground/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Entrar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
