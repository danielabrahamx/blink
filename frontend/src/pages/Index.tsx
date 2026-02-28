import React, { useState } from "react";
import { Zap, Shield, TrendingUp, ArrowRight, Laptop, Building2 } from "lucide-react";
import InsuracleDashboard from '@/InsuracleDashboard';
import InsuracleDashboardAdmin from '@/InsuracleDashboardAdmin';

const Index = () => {
  const [userType, setUserType] = useState<"individual" | "company" | null>(null);

  if (userType === "individual") {
    return <InsuracleDashboard setUserType={setUserType as unknown as (userType: string) => void} />;
  }

  if (userType === "company") {
    return <InsuracleDashboardAdmin setUserType={setUserType as unknown as (userType: string) => void} />;
  }

  return (
    <div className="min-h-screen bg-[#080808] text-[#f0f0f0]">

      {/* Nav */}
      <nav className="border-b border-[#1a1a1a] px-8 py-4 flex items-center justify-between">
        <span className="font-bebas text-2xl text-[#f0f0f0] tracking-widest">BLINK</span>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#e8a020] blink-pulse" />
          <span className="text-xs text-[#666666] uppercase tracking-widest ml-1">Arc Testnet</span>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-8 pt-20 pb-16">
        <div className="mb-3">
          <span className="text-xs uppercase tracking-widest text-[#e8a020] font-dm-mono border border-[#e8a020]/30 px-3 py-1">
            x402 · Gasless · Per-Second
          </span>
        </div>

        <h1 className="font-bebas text-[clamp(80px,16vw,160px)] leading-none text-[#f0f0f0] mb-6 tracking-wide">
          BLINK
        </h1>

        <p className="text-[#888888] text-xl max-w-xl mb-2 leading-relaxed">
          Per-second laptop micro-insurance powered by gasless USDC micropayments.
        </p>
        <p className="text-[#555555] text-base mb-12">
          Insure your device by the second — pay only when you need coverage.
        </p>

        {/* Access cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-20">

          {/* User card */}
          <button
            onClick={() => setUserType("individual")}
            className="group text-left bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#e8a020] p-8 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-2 bg-[#141414] border border-[#1e1e1e] group-hover:border-[#e8a020]/30 transition-colors">
                <Laptop className="h-5 w-5 text-[#e8a020]" />
              </div>
              <ArrowRight className="h-4 w-4 text-[#444444] group-hover:text-[#e8a020] group-hover:translate-x-1 transition-all duration-200" />
            </div>
            <h2 className="font-bebas text-3xl tracking-widest mb-2 text-[#f0f0f0]">GET COVERAGE</h2>
            <p className="text-[#666666] text-sm leading-relaxed">
              Deposit USDC to Gateway. Configure your policy. Watch real x402 micropayments settle per second.
            </p>
            <div className="mt-6 pt-4 border-t border-[#1a1a1a]">
              <span className="font-dm-mono text-xs text-[#444444]">From $0.0005 / second</span>
            </div>
          </button>

          {/* Admin card */}
          <button
            onClick={() => setUserType("company")}
            className="group text-left bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#888888] p-8 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-2 bg-[#141414] border border-[#1e1e1e] group-hover:border-[#666666]/30 transition-colors">
                <Building2 className="h-5 w-5 text-[#888888]" />
              </div>
              <ArrowRight className="h-4 w-4 text-[#444444] group-hover:text-[#888888] group-hover:translate-x-1 transition-all duration-200" />
            </div>
            <h2 className="font-bebas text-3xl tracking-widest mb-2 text-[#f0f0f0]">
              ADMIN PORTAL
              <span className="ml-3 text-sm font-dm-sans border border-[#444444] text-[#888888] px-2 py-0.5 align-middle">
                INSURER
              </span>
            </h2>
            <p className="text-[#666666] text-sm leading-relaxed">
              Manage reserves, deposit USYC collateral, and trigger claim payouts from the insurance pool.
            </p>
            <div className="mt-6 pt-4 border-t border-[#1a1a1a]">
              <span className="font-dm-mono text-xs text-[#444444]">Circle Dev Wallet · USYC Reserve</span>
            </div>
          </button>

        </div>

        {/* Features row */}
        <div className="border-t border-[#1a1a1a] pt-12">
          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-4 w-4 text-[#e8a020]" />
                <span className="text-xs uppercase tracking-widest text-[#888888]">Per-Second Premiums</span>
              </div>
              <p className="text-[#555555] text-sm leading-relaxed">
                Pay only for the seconds of coverage you use. Real USDC micropayments via x402 protocol.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-4 w-4 text-[#e8a020]" />
                <span className="text-xs uppercase tracking-widest text-[#888888]">Two Coverage Modes</span>
              </div>
              <p className="text-[#555555] text-sm leading-relaxed">
                Active use or idle storage — different rates to match your laptop's real-time risk profile.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-[#e8a020]" />
                <span className="text-xs uppercase tracking-widest text-[#888888]">Gasless Settlement</span>
              </div>
              <p className="text-[#555555] text-sm leading-relaxed">
                Circle Gateway batches payments off-chain. No gas fees, instant coverage activation.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] px-8 py-6 flex items-center justify-between">
        <span className="font-bebas text-lg text-[#333333] tracking-widest">BLINK</span>
        <p className="text-xs text-[#333333] font-dm-mono">© 2026 Blink. Per-second laptop micro-insurance.</p>
        <div className="text-xs text-[#333333] font-dm-mono uppercase tracking-widest">Arc Testnet</div>
      </footer>

    </div>
  );
};

export default Index;
