import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.10),transparent_34%)]" />
      </div>
      <div className="relative z-10 w-full max-w-md px-6">
        <Link to="/" className="mb-10 flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-gradient-to-br from-gold-300 to-gold-500 text-primary-foreground shadow-[var(--gold-glow)]">
            <span className="text-2xl font-black">N</span>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-primary/80">Network</div>
            <div className="text-lg font-semibold tracking-wide">Ferramentas</div>
          </div>
        </Link>

        <div className="rounded-[30px] border border-foreground/10 bg-card p-8">
          <h1 className="text-2xl font-black">
            {isSignUp ? "Criar conta" : "Entrar"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {isSignUp
              ? "Preencha seus dados para começar."
              : "Acesse sua conta para usar as ferramentas."}
          </p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {isSignUp && (
              <div>
                <label className="mb-1.5 block text-sm text-muted-foreground">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
                />
              </div>
            )}
            <div>
              <label className="mb-1.5 block text-sm text-muted-foreground">E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-muted-foreground">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/40 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-gold-300 to-gold-500 px-6 py-3 font-semibold text-primary-foreground shadow-[var(--gold-glow)] transition hover:scale-[1.01]"
            >
              {isSignUp ? "Criar conta" : "Entrar"}
            </button>
          </form>

          <div className="mt-5 text-center text-sm text-muted-foreground">
            {isSignUp ? "Já tem uma conta?" : "Ainda não tem conta?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-semibold text-primary hover:underline"
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
