import { CheckCircle, Brain, Zap, LineChart, Building2, Users, Landmark, Mail, Settings, BookOpen } from 'lucide-react'

export function ContextStrip() {
  return (
    <section className="bg-white border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">Built by UF engineers for serious investors and developers</p>
        <div className="flex items-center gap-6 opacity-70">
          {['Developers','Investors','Municipalities'].map((l) => (
            <div key={l} className="h-6 flex items-center text-slate-500">
              <div className="h-4 w-4 rounded-sm bg-slate-200 mr-2" />
              <span className="text-sm">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Problem() {
  const left = [
    '200+ hours of fragmented research',
    '$5K–$15K per deal',
    '3–6 months to validate a site',
  ]
  const right = [
    'One autonomous agent',
    'Hours, not months',
    'Continuous monitoring instead of one-off reports',
  ]
  return (
    <section id="product" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">The Problem</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg bg-white p-6 border border-slate-200">
            <ul className="space-y-3">
              {left.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-emerald-50 p-6 border border-emerald-200">
            <ul className="space-y-3">
              {right.map((item) => (
                <li key={item} className="flex items-start gap-3 text-emerald-800">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const steps = [
    { title: 'Monitor', icon: Landmark, desc: 'Watches permits, zoning changes, council agendas, and sales.' },
    { title: 'Analyze', icon: Brain, desc: 'Scores zoning fit, timelines, friction, and returns.' },
    { title: 'Decide', icon: Settings, desc: 'Outputs GO / NO-GO / CONDITIONAL with max safe offer price.' },
    { title: 'Act', icon: Mail, desc: 'Drafts pre-app emails, utility requests, and due diligence checklists.' },
    { title: 'Learn', icon: BookOpen, desc: 'Improves predictions from outcomes and user feedback.' },
  ]
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-10">From raw data to defended decisions.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-lg border border-slate-200 p-5 bg-gradient-to-br from-white to-slate-50">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="h-5 w-5 text-emerald-600" />
                <div className="font-medium text-slate-800">{title}</div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Features() {
  const items = [
    { title: 'Opportunity Radar', desc: '24/7 alerts on hot corridors, new LLCs, and zoning changes.', icon: Zap },
    { title: '48-Hour Decision Memos', desc: 'Detailed GO / NO-GO memos with timelines, risks, and land value ranges.', icon: LineChart },
    { title: 'Dominion Actions', desc: 'One-click drafts for outreach to planners, utilities, and vendors.', icon: Mail },
    { title: 'Intelligence Benchmarks', desc: 'Permit timelines, friction scores, and contractor stats by jurisdiction.', icon: Building2 },
  ]
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
              <Icon className="h-5 w-5 text-emerald-600 mb-3" />
              <div className="font-medium text-slate-800 mb-1">{title}</div>
              <p className="text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function UseCases() {
  const cases = [
    { title: 'For Developers', desc: 'Faster site selection, fewer dead deals, and clearer entitlement paths.' , icon: Building2},
    { title: 'For Investors', desc: 'Better underwriting with defended assumptions and risk-adjusted targets.', icon: Users },
    { title: 'For Municipalities', desc: 'Focus on feasible projects and align public-private decisions earlier.', icon: Landmark },
  ]
  return (
    <section id="use-cases" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
              <Icon className="h-5 w-5 text-emerald-600 mb-3" />
              <div className="font-medium text-slate-800 mb-1">{title}</div>
              <p className="text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const tiers = [
    { name: 'Starter', who: 'Solo investor or small team', bullets: ['Monitor 1–2 jurisdictions', 'Pay-per-memo'] },
    { name: 'Pro', who: 'Active developer/operator', bullets: ['Multiple memos per month', 'Actions included'] },
    { name: 'Enterprise', who: 'Funds & institutions', bullets: ['Custom data', 'APIs & SLAs'] },
  ]
  return (
    <section id="pricing" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">Start with the markets that matter most.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="text-slate-900 font-medium mb-1">{t.name}</div>
              <div className="text-sm text-slate-600 mb-4">{t.who}</div>
              <ul className="space-y-2 text-sm text-slate-700">
                {t.bullets.map((b)=>(
                  <li key={b} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600" /> {b}</li>
                ))}
              </ul>
              <a href="#early-access" className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">Join the Early Access List</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WorkflowCTA() {
  const steps = [
    'Tell Dominion your buy box.',
    'Get opportunity alerts and decision memos.',
    'Approve suggested actions and move faster on the best deals.',
  ]
  return (
    <section className="bg-emerald-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-6 items-center">
          <div className="text-white text-xl font-medium">Your faster workflow</div>
          <div className="md:col-span-2 grid gap-3">
            {steps.map((s, i) => (
              <div key={s} className="flex items-start gap-3 text-emerald-50">
                <div className="mt-1 h-5 w-5 rounded-full bg-emerald-400 text-emerald-900 grid place-items-center text-xs font-semibold">
                  {i + 1}
                </div>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <div className="flex md:justify-end">
            <a href="#resources" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-emerald-700 hover:bg-emerald-50 transition">See a Sample Workflow</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const faqs = [
    { q: 'Where does Dominion get its data?', a: 'Public permit portals, council agendas, zoning ordinances, assessor and recorder data, and vetted commercial data sources.' },
    { q: 'How accurate are the approval probability and timeline estimates?', a: 'Benchmarked continuously against outcomes and backtested on historical cases; accuracy improves with usage.' },
    { q: 'Can I customize Dominion to my investment criteria?', a: 'Yes. You can define buy boxes, required yields, timeline thresholds, and exclusions at the market or deal level.' },
    { q: 'Does Dominion replace my analyst team?', a: 'It augments your team by automating the grind and standardizing memos so analysts focus on judgment and relationships.' },
    { q: 'Which markets do you support first?', a: 'We’re starting with select Sun Belt metros and expanding based on demand.' },
    { q: 'How do I join the pilot?', a: 'Request early access and we’ll reach out with onboarding details and qualification steps.' },
  ]
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-lg border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50">
              <div className="font-medium text-slate-800 mb-1">{q}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-emerald-500 to-teal-600" />
            <span className="font-semibold tracking-tight">Dominion</span>
          </div>
          <p className="text-sm text-slate-400 max-w-md">Dominion is an AI-powered real estate intelligence platform built by engineers and investors.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-sm font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-sm text-slate-400">
              {['About','Careers','Privacy','Terms','Contact'].map((l)=>(
                <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Newsletter</div>
            <form className="flex gap-2">
              <input type="email" placeholder="Founders’ update email" className="flex-1 rounded-md bg-slate-800 text-slate-100 placeholder:text-slate-500 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 text-sm">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Dominion. All rights reserved.</div>
    </footer>
  )
}
