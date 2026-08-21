import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { blogPosts } from '@/data/blog';

const categories = ['All', 'Visa Guides', 'Scholarships', 'Cost of Living', 'Student Life', 'Admissions', 'Career'];

export function BlogPage() {
    const featured = blogPosts[0];
    const rest = blogPosts.slice(1);

    return (
        <>
            <PageHero
                eyebrow="Blog & Resources"
                title="Guides, tips, and insights for studying abroad"
                subtitle="Everything from visa guides and scholarship tips to cost-of-living breakdowns and packing checklists. We share what we have learned from placing 1,200+ students."
                image="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Blog' }]}
            />

            {/* Featured post */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <Reveal>
                        <Link
                            to={`/blog/${featured.id}`}
                            className="card group grid overflow-hidden lg:grid-cols-2"
                        >
                            <div className="relative h-64 overflow-hidden lg:h-full">
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                                    Featured · {featured.category}
                                </span>
                            </div>
                            <div className="flex flex-col justify-center p-8 lg:p-12">
                                <div className="mb-3 flex items-center gap-3 text-xs text-slate-400">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold leading-snug text-slate-900 group-hover:text-brand-700 lg:text-3xl">
                                    {featured.title}
                                </h2>
                                <p className="mt-4 text-slate-500">{featured.excerpt}</p>
                                <span className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-600 group-hover:gap-2">
                                    Read article <ArrowRight className="h-4 w-4 transition-all" />
                                </span>
                            </div>
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* Categories */}
            <section className="border-b border-slate-100 py-6">
                <div className="container-page flex flex-wrap gap-2">
                    {categories.map((c) => (
                        <span
                            key={c}
                            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600"
                        >
                            {c}
                        </span>
                    ))}
                </div>
            </section>

            {/* Blog grid */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {rest.map((p, i) => (
                            <Reveal key={p.id} delay={(i % 3) * 100}>
                                <Link to={`/blog/${p.id}`} className="card group flex h-full flex-col overflow-hidden">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                                            {p.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="mb-2 flex items-center gap-3 text-xs text-slate-400">
                                            <span>{formatDate(p.date)}</span>
                                            <span>&middot;</span>
                                            <span>{p.readTime}</span>
                                        </div>
                                        <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-brand-700">
                                            {p.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-500 line-clamp-2">{p.excerpt}</p>
                                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
                                            Read more <ArrowRight className="h-3.5 w-3.5 transition-all" />
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                title="Have a topic you'd like us to cover?"
                subtitle="We are always writing new guides. Send us your questions and we might turn them into our next article."
            />
        </>
    );
}

function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
