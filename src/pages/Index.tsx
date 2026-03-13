import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ToolsSection } from "@/components/ToolsSection";
import { BrandMembersSection } from "@/components/BrandMembersSection";
import { FooterCTA } from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,196,0,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,196,0,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.16]" />
      </div>
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ToolsSection />
        <BrandMembersSection />
        <FooterCTA />
      </main>
    </div>
  );
};

export default Index;
