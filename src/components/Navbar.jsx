import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'How It Works', href: '#how' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-emerald-500 to-teal-600" />
            <span className="font-semibold text-slate-900 tracking-tight text-lg">Dominion</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a href="#login" className="px-4 py-2 text-sm rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 transition">Login</a>
            <a href="#early-access" className="px-4 py-2 text-sm rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">Request Early Access</a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <a href="#login" className="flex-1 px-4 py-2 text-sm rounded-md border border-slate-300 text-slate-700 text-center hover:bg-slate-50 transition">Login</a>
                <a href="#early-access" className="flex-1 px-4 py-2 text-sm rounded-md bg-emerald-600 text-white text-center hover:bg-emerald-700 transition">Request</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
