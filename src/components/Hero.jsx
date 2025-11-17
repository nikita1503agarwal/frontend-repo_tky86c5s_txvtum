import { ArrowRight, Map, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 text-xs mb-6">
              <ShieldCheck className="h-4 w-4" /> UF-built, investor-tuned
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Your unfair advantage in real estate.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Dominion is an autonomous research agent that monitors permits, zoning, and market data 24/7, then tells you which deals to pursue — with receipts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#early-access" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm">
                Request Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#resources" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 transition">
                View Sample Deal Memo
              </a>
            </div>

            <div className="mt-8 text-sm text-slate-500">Built by UF engineers for serious investors and developers</div>
          </div>

          <div>
            <div className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-100 blur-3xl opacity-70" />

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-lg bg-slate-900 text-white p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-300">Approval Probability</span>
                    <span className="text-sm bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">v0.9</span>
                  </div>
                  <div className="h-2 w-full bg-slate-700 rounded">
                    <div className="h-2 bg-emerald-500 rounded" style={{ width: '78%' }} />
                  </div>
                  <div className="mt-2 text-xs text-slate-400">Corridor: East Tech Ridge • Zoning fit: High • Friction: Medium</div>
                </div>

                <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-slate-700 font-medium mb-2">
                    <Map className="h-4 w-4 text-emerald-600" /> Hot Corridors
                  </div>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Airport South • LLC spike</li>
                    <li>Old Mill District • Upzoning</li>
                    <li>Riverside • Transit plan</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-slate-700 font-medium">Decision</div>
                      <div className="text-xs text-slate-500">Max safe offer</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-600 font-semibold">GO</div>
                      <div className="text-slate-700">$2.4M</div>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4">
                  <div className="text-sm text-slate-300 mb-2">Timeline Estimate</div>
                  <div className="grid grid-cols-5 gap-2 text-xs">
                    {['Pre-app','Submittal','Review','Hearing','Approval'].map((s,i)=>(
                      <div key={s} className="p-2 rounded bg-slate-700/50 border border-slate-700 text-center">
                        <div className="text-slate-200">{s}</div>
                        <div className="mt-1 text-emerald-300">{[2,4,6,2,1][i]} wk</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
