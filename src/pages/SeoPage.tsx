import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { EnquiryForm } from '@/components/EnquiryForm';
import { getSeoPage, seoPages } from '@/data/seoPages';

export function SeoPage() {
    const { slug } = useParams();
    const page = slug ? getSeoPage(slug) : undefined;

    if (!page) return <Navigate to="/" replace />;

    const relatedPages = seoPages.filter((p) => p.id !== page.id).slice(0, 4);

    return (
        <>
            <PageHero
                eyebrow={page.keyword}
                title={page.headline}
                subtitle={page.metaDescription}
                image={page.heroImage}
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: page.headline }]}
            >
                <div className="flex flex-col gap-3 sm:flex-row">
                    <Link to="/contact" className="btn-primary">
                        <Phone className="h-4 w-4" /> {page.ctaText}
                    </Link>
                    <a
                        href="https://wa.me/995555123456"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                    >
                        <MessageCircle className="h-4 w-4" /> WhatsApp Us
                    </a>
                </div>
            </PageHero>

            {/* Intro */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <p className="text-lg leading-relaxed text-slate-600">{page.intro}</p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <section className="pb-16 lg:pb-24">
                <div className="container-page">
                    <div className="mx-auto max-w-3xl space-y-12">
                        {page.sections.map((s, i) => (
                            <Reveal key={i} delay={i * 80}>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">{s.heading}</h2>
                                    <p className="mt-4 leading-relaxed text-slate-600">{s.body}</p>
                                    {s.points && (
                                        <ul className="mt-5 space-y-3">
                                            {s.points.map((p) => (
                                                <li key={p} className="flex items-start gap-3">
                                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                                                    <span className="text-slate-700">{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
                    <Reveal>
                        <span className="section-eyebrow">{page.keyword}</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                            {page.ctaText}
                        </h2>
                        <p className="mt-4 text-slate-600">
                            Book a free, no-obligation consultation. Our experts will answer your questions and create a personalised
                            plan for your study-abroad journey.
                        </p>
                        <div className="mt-8 space-y-3">
                            {[
                                'Personalised advice based on your goals',
                                'No obligation, no pressure',
                                'Response within 24 hours',
                            ].map((p) => (
                                <div key={p} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                                    <span className="text-sm text-slate-700">{p}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <EnquiryForm leadType="consultation" compact title={page.ctaText} />
                    </Reveal>
                </div>
            </section>

            {/* Related SEO pages */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <h2 className="mb-8 text-2xl font-bold text-slate-900">Explore more guides</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {relatedPages.map((p) => (
                            <Link
                                key={p.id}
                                to={`/seo/${p.slug}`}
                                className="card group flex items-center justify-between p-5"
                            >
                                <div>
                                    <h3 className="font-bold text-slate-900 group-hover:text-brand-700">{p.headline}</h3>
                                    <p className="mt-1 text-sm text-slate-500 line-clamp-1">{p.metaDescription}</p>
                                </div>
                                <ArrowRight className="h-5 w-5 shrink-0 text-brand-500 transition-all group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
