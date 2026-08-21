import { Target, Eye, Heart, Award, Users, Globe, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { stats } from '@/data/site';

export function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="About Us"
                title="We turn study-abroad dreams into reality"
                subtitle="Future Factory is an international education consultancy built on one principle: we stay with our students from their first question to their first day on campus — and beyond."
                image="https://images.pexels.com/photos/19063133/pexels-photo-19063133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
            />

            {/* Story */}
            <section className="py-20 lg:py-28">
                <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
                    <Reveal>
                        <span className="section-eyebrow">Our Story</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                            Founded by people who have been there
                        </h2>
                        <div className="mt-5 space-y-4 text-slate-600">
                            <p>
                                Future Factory was started by a team that personally experienced the confusion and stress of applying to
                                universities abroad. We remember the unanswered emails, the unclear visa requirements, and the anxiety of
                                arriving in a new country alone.
                            </p>
                            <p>
                                We built Future Factory to be the consultancy we wished we had — one that answers every question, handles
                                the paperwork, and has a real person waiting for you when you land. Today, we have placed over 1,200
                                students across Georgia, Uzbekistan, Europe, and the UK.
                            </p>
                            <p>
                                Our team in Tbilisi means we are not just advising from afar — we are on the ground, inspecting
                                accommodations, meeting university partners, and supporting students long after they arrive.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((s, i) => (
                                <div
                                    key={s.label}
                                    className={`rounded-2xl bg-slate-50 p-8 text-center ${i % 2 === 1 ? 'sm:translate-y-6' : ''}`}
                                >
                                    <div className="text-3xl font-bold text-brand-600 lg:text-4xl">{s.value}</div>
                                    <div className="mt-2 text-sm font-medium text-slate-500">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Mission / Vision / Values */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {values.map((v, i) => (
                            <Reveal key={v.title} delay={i * 100}>
                                <div className="card h-full p-8">
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                                        <v.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-500">{v.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team values */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">What drives us</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Our core principles
                        </h2>
                    </Reveal>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {principles.map((p, i) => (
                            <Reveal key={p.title} delay={i * 100}>
                                <div className="rounded-2xl border border-slate-200 p-6 text-center">
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                                        <p.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-bold text-slate-900">{p.title}</h3>
                                    <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats band */}
            <section className="relative overflow-hidden bg-brand-700 py-16">
                <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_50%,rgba(255,255,255,0.1),transparent)]" />
                <div className="container-page relative">
                    <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
                        {[
                            { icon: Users, value: '1,200+', label: 'Students placed' },
                            { icon: Globe, value: '4', label: 'Countries served' },
                            { icon: Award, value: '40+', label: 'Partner universities' },
                            { icon: Briefcase, value: '10+', label: 'Years of experience' },
                        ].map((s) => (
                            <div key={s.label}>
                                <s.icon className="mx-auto mb-3 h-8 w-8 text-brand-200" />
                                <div className="text-3xl font-bold text-white lg:text-4xl">{s.value}</div>
                                <div className="mt-1 text-sm text-brand-100">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                title="Want to know if we are the right fit?"
                subtitle="Book a free, no-obligation consultation. We will answer your questions honestly — even if that means recommending a path we do not offer."
            />
        </>
    );
}

const values = [
    {
        title: 'Our Mission',
        desc: 'To make quality international education accessible to every student — regardless of background — by removing the complexity, cost, and confusion from the application process.',
        icon: Target,
    },
    {
        title: 'Our Vision',
        desc: 'To be the most trusted study-abroad consultancy for Georgia and beyond — known for honesty, transparency, and genuine student outcomes rather than just sales numbers.',
        icon: Eye,
    },
    {
        title: 'Our Promise',
        desc: 'We treat every student as we would our own family. No hidden fees, no false promises, and no disappearing after you have paid. We are with you for the long haul.',
        icon: Heart,
    },
];

const principles = [
    {
        title: 'Honesty first',
        desc: 'If a destination or program is not right for you, we say so — even if it means losing a sale.',
        icon: Heart,
    },
    {
        title: 'Full transparency',
        desc: 'Every fee, every timeline, every requirement is shared upfront. No surprises.',
        icon: Award,
    },
    {
        title: 'On-the-ground presence',
        desc: 'We have a real team in Tbilisi, not just a website. We inspect, we meet, we verify.',
        icon: Globe,
    },
    {
        title: 'Lifelong support',
        desc: 'Our help does not end at admission. We advise on careers, licensing, and life long after.',
        icon: Users,
    },
];
