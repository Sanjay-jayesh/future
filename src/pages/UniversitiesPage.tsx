import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowRight, Search } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { universities } from '@/data/universities';

export function UniversitiesPage() {
    const [country, setCountry] = useState('All');
    const [query, setQuery] = useState('');

    const countries = ['All', 'Georgia', 'Uzbekistan', 'Europe', 'UK'];

    const filtered = universities.filter((u) => {
        const matchCountry = country === 'All' || u.country === country;
        const matchQuery =
            u.name.toLowerCase().includes(query.toLowerCase()) ||
            u.city.toLowerCase().includes(query.toLowerCase()) ||
            u.overview.toLowerCase().includes(query.toLowerCase());
        return matchCountry && matchQuery;
    });

    return (
        <>
            <PageHero
                eyebrow="Partner Universities"
                title="Universities we work with"
                subtitle="We partner with over 40 universities across Georgia, Uzbekistan, Europe, and the UK. Explore our featured partners below and find the right fit for your goals."
                image="https://images.pexels.com/photos/7972324/pexels-photo-7972324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Universities' }]}
            />

            {/* Filters */}
            <section className="border-b border-slate-100 py-6">
                <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                        {countries.map((c) => (
                            <button
                                key={c}
                                onClick={() => setCountry(c)}
                                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${country === c
                                        ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                    <div className="relative sm:w-64">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search universities..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                        />
                    </div>
                </div>
            </section>

            {/* University grid */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <div className="mb-6 text-sm text-slate-500">
                        Showing {filtered.length} {filtered.length === 1 ? 'university' : 'universities'}
                    </div>
                    {filtered.length === 0 ? (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 py-16 text-center">
                            <p className="text-slate-500">No universities match your search. Try a different filter.</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((u, i) => (
                                <Reveal key={u.id} delay={(i % 3) * 100}>
                                    <Link to={`/universities/${u.id}`} className="card group flex h-full flex-col overflow-hidden">
                                        <div className="relative h-52 overflow-hidden">
                                            <img
                                                src={u.image}
                                                alt={u.name}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                                            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                                                {u.country}
                                            </span>
                                        </div>
                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                                                <MapPin className="h-3.5 w-3.5" /> {u.city} &middot; Est. {u.established}
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-700">{u.name}</h3>
                                            <div className="mb-3 mt-1 flex items-center gap-1.5">
                                                <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
                                                <span className="text-sm font-semibold text-slate-700">{u.rating}</span>
                                                <span className="text-xs text-slate-400">&middot; {u.students.toLocaleString()} students</span>
                                            </div>
                                            <p className="text-sm text-slate-500 line-clamp-2">{u.overview}</p>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {u.programs.slice(0, 3).map((p) => (
                                                    <span key={p.name} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                                                        {p.name}
                                                    </span>
                                                ))}
                                                {u.programs.length > 3 && (
                                                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                                                        +{u.programs.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
                                                View details <ArrowRight className="h-3.5 w-3.5 transition-all" />
                                            </span>
                                        </div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <CtaSection
                title="Not sure which university is right for you?"
                subtitle="Book a free consultation and we will recommend the best-fit universities based on your budget, grades, and career goals."
            />
        </>
    );
}
