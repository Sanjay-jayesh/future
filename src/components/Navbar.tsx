import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, ChevronDown } from 'lucide-react';
import { site, navLinks } from '@/data/site';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setMobileAboutOpen(false);
    }, [location.pathname]);

    const isHome = location.pathname === '/';

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || !isHome
                        ? 'glass border-b border-slate-200/70 shadow-sm'
                        : 'border-b border-transparent bg-transparent'
                    }`}
            >
                <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
                    <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Future Factory home">
                        <Logo scrolled={scrolled || !isHome} />
                    </Link>

                    <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
                        {navLinks.slice(0, 7).map((link) => (
                            <NavLink key={link.path} to={link.path} label={link.label} active={location.pathname === link.path} />
                        ))}
                        <div className="group relative">
                            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100">
                                More <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                            </button>
                            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                                <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-300/40">
                                    {navLinks.slice(7).map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${location.pathname === link.path
                                                    ? 'bg-brand-50 text-brand-700'
                                                    : 'text-slate-700 hover:bg-slate-50'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="flex items-center gap-2">
                        <a
                            href={`https://wa.me/${site.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden items-center gap-2 rounded-full bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-teal-700 hover:-translate-y-0.5 sm:inline-flex"
                        >
                            <MessageCircle className="h-4 w-4" /> WhatsApp
                        </a>
                        <Link to="/contact" className="btn-primary hidden lg:inline-flex">
                            <Phone className="h-4 w-4" /> Book a Free Call
                        </Link>
                        <button
                            onClick={() => setMobileOpen((v) => !v)}
                            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 xl:hidden"
                            aria-label="Toggle menu"
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {mobileOpen && (
                <div className="fixed inset-0 z-40 xl:hidden">
                    <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
                    <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-6 pt-24 shadow-2xl">
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${location.pathname === link.path
                                            ? 'bg-brand-50 text-brand-700'
                                            : 'text-slate-700 hover:bg-slate-50'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <div className="mt-6 flex flex-col gap-3">
                            <Link to="/contact" className="btn-primary w-full">
                                <Phone className="h-4 w-4" /> Book a Free Call
                            </Link>
                            <a
                                href={`https://wa.me/${site.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary w-full"
                            >
                                <MessageCircle className="h-4 w-4" /> WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
    return (
        <Link
            to={to}
            className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${active ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-100'
                }`}
        >
            {label}
        </Link>
    );
}

function Logo({ scrolled }: { scrolled: boolean }) {
    return (
        <div className="flex items-center gap-2.5">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-600/30">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
                    <path d="M12 2L3 7v6c0 5 3.8 9.5 9 11 5.2-1.5 9-6 9-11V7l-9-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="flex flex-col leading-none">
                <span className={`font-display text-lg font-bold ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                    Future Factory
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-600">
                    Study Abroad Experts
                </span>
            </div>
        </div>
    );
}
