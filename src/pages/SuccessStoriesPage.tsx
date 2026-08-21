import { Link } from 'react-router-dom';
import { Quote, ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { studentStories } from '@/data/stories';

export function SuccessStoriesPage() {
    return (
        <>
            <PageHero
                eyebrow="Success Stories"
                title="Real students, real results"
                subtitle="Over 1,200 students have trusted Future Factory to guide them to their dream universities. Here are some of their stories — in their own words."
                image="https://images.pexels.com/photos/36622165/pexels-photo-36622165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Success Stories' }]}
            />

            {/* Stories grid */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {studentStories.map((s, i) => (
                            <Reveal key={s.id} delay={(i % 3) * 100}>
                                <Link
                                    to={`/success-stories/${s.id}`}
                                    className="card group flex h-full flex-col overflow-hidden"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={s.image}
                                            alt={s.name}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                                        <Quote className="absolute bottom-4 left-4 h-8 w-8 text-white/80" />
                                        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                                            {s.country}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="text-lg font-bold text-slate-900">{s.name}</h3>
                                        <p className="text-xs text-slate-500">
                                            {s.course} &middot; {s.origin}
                                        </p>
                                        <p className="mt-3 text-sm italic leading-relaxed text-slate-600 line-clamp-3">
                                            "{s.quote}"
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-400">
                                            <GraduationCap className="h-3.5 w-3.5" /> {s.university}
                                        </div>
                                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
                                            Read full story <ArrowRight className="h-3.5 w-3.5 transition-all" />
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats band */}
            <section className="relative overflow-hidden bg-brand-700 py-16">
                <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
                <div className="container-page relative text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Your story could be next</h2>
                    <p className="mx-auto mt-4 max-w-xl text-brand-100">
                        Every student we have helped started with a free consultation. Book yours today and take the first step.
                    </p>
                    <Link to="/contact" className="btn-accent mt-8">
                        Book a Free Consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
