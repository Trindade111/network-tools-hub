import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.10),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.2]" />
      </div>
      <div className="relative z-10 w-full max-w-md px-6 animate-scale-in">
        {/* Logo */}
        <Link to="/" className="mb-10 flex flex-col items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/40 bg-gradient-to-br from-gold-300 to-gold-500 text-primary-foreground shadow-[var(--gold-glow-lg)]">
            <span className="text-3xl font-black">N</span>
          </div>
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.4em] text-primary/80">Network</div>
            <div className="text-xl font-bold tracking-wide">Ferramentas</div>
          </div>
        </Link>

        {/* Card */}
        <div className="rounded-[28px] border border-foreground/10 bg-card p-8 shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.08)]">
          <h1 className="text-center text-2xl font-black">
            {isSignUp ? "Criar conta" : "Entrar"}
          </h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {isSignUp
              ? "Preencha seus dados para começar."
              : "Acesse sua conta para usar as ferramentas."}
          </p>

          <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {isSignUp && (
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 transition-colors focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
              </div>
            )}
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                E-mail
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-foreground/25 transition-colors focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 pr-11 text-sm text-foreground placeholder:text-foreground/25 transition-colors focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="text-right">
                <button type="button" className="text-xs text-primary hover:underline">
                  Esqueceu a senha?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 font-semibold text-primary-foreground shadow-[var(--gold-glow)] transition-all duration-300 hover:shadow-[var(--gold-glow-lg)] hover:scale-[1.01] active:scale-[0.99]"
            >
              {isSignUp ? "Criar conta" : "Entrar"}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-foreground/10" />
            <span className="text-xs text-muted-foreground">ou</span>
            <div className="h-px flex-1 bg-foreground/10" />
          </div>

          <div className="mt-5 text-center text-sm text-muted-foreground">
            {isSignUp ? "Já tem uma conta?" : "Ainda não tem conta?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-semibold text-primary transition hover:underline"
            >
              {isSignUp ? "Entrar" : "Criar conta"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
