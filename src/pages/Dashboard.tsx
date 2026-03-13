import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { tools } from "@/lib/tools";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_34%)]" />
      </div>
      <Header />
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black">Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">Suas ferramentas disponíveis</p>
          </div>
          <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            Online
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              to={`/ferramenta/${tool.slug}`}
              className="group flex flex-col justify-between rounded-[28px] border border-foreground/10 bg-foreground/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.06]"
            >
              <div>
                <h3 className="text-lg font-bold">{tool.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {tool.description}
                </p>
              </div>
              <div className="mt-5 inline-flex items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition group-hover:bg-primary/20">
                Abrir
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
