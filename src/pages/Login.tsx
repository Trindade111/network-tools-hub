import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,hsl(var(--primary)/0.07),transparent_60%)]" />
      </div>
      <div className="relative z-10 w-full max-w-sm px-6 animate-scale-in">
        <Link to="/" className="mb-12 flex flex-col items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-primary-foreground shadow-[var(--gold-glow)]">
            <span className="text-lg font-black">N</span>
          </div>
          <span className="text-sm font-semibold tracking-tight">Networking Ferramentas</span>
        </Link>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h1 className="text-center text-lg font-semibold tracking-tight">
            {isSignUp ? "Criar conta" : "Entrar na sua conta"}
          </h1>
          <p className="mt-1 text-center text-[13px] text-muted-foreground">
            {isSignUp
              ? "Preencha seus dados para começar."
              : "Use seu e-mail e senha para acessar."}
          </p>

          <form className="mt-6 space-y-3.5" onSubmit={(e) => e.preventDefault()}>
            {isSignUp && (
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/20 transition-all duration-150 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                />
              </div>
            )}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/20 transition-all duration-150 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
              />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-xs font-medium text-muted-foreground">Senha</label>
                {!isSignUp && (
                  <button type="button" className="text-[11px] text-primary transition hover:underline">
                    Esqueceu?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 pr-10 text-sm text-foreground placeholder:text-foreground/20 transition-all duration-150 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--gold-glow)] active:scale-[0.99]"
            >
              {isSignUp ? "Criar conta" : "Entrar"}
            </button>
          </form>

          <div className="mt-5 text-center text-[13px] text-muted-foreground">
            {isSignUp ? "Já tem uma conta?" : "Não tem conta?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-medium text-primary transition hover:underline"
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
