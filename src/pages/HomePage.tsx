import { Link } from 'react-router-dom';
import {
    Phone,
    MessageCircle,
    ArrowRight,
    GraduationCap,
    Plane,
    Home as HomeIcon,
    ShieldCheck,
    Star,
    Quote,
    CheckCircle2,
    MapPin,
    Users,
    Clock,
    Award,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { EnquiryForm } from '@/components/EnquiryForm';
import { AnimatedLineSaver } from '@/components/AnimatedLineSaver';
import { site, stats, countries, faqs } from '@/data/site';
import { universities } from '@/data/universities';
import { studentStories } from '@/data/stories';
import { blogPosts } from '@/data/blog';

export function HomePage() {
    const featuredUniversities = universities.filter((u) => u.featured);
    const topStories = studentStories.slice(0, 3);
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-950 pt-28 pb-20 lg:pt-36 lg:pb-32">
                <div className="absolute inset-0">
                    <img
                        src="/images/WhatsApp_Image_2026-07-30_at_11.56.57.jpeg"
                        alt=""
                        className="h-full w-full object-cover opacity-40"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_85%_10%,rgba(220,38,38,0.18),transparent)]" />
                <AnimatedLineSaver />
                <div className="container-page relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7">
                        <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300 ring-1 ring-inset ring-brand-500/30">
                            <ShieldCheck className="h-3.5 w-3.5" /> Trusted by 1,200+ students worldwide
                        </span>
                        <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                            Study in Georgia with <span className="text-brand-400">Expert Guidance</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                            Future Factory helps you study in Georgia, Uzbekistan, Europe, and the UK. From university selection to
                            visas, accommodation, and student life — we are with you at every step.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to="/contact" className="btn-primary">
                                <Phone className="h-4 w-4" /> Book a Free Consultation
                            </Link>
                            <a
                                href={`https://wa.me/${site.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                            >
                                <MessageCircle className="h-4 w-4" /> WhatsApp Us
                            </a>
                            <Link to="/universities" className="btn-ghost text-slate-300 hover:bg-white/10 hover:text-white">
                                Apply Now <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <div className="text-2xl font-bold text-white lg:text-3xl">{s.value}</div>
                                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                            <EnquiryForm
                                leadType="enquiry"
                                compact
                                title="Quick Enquiry"
                                subtitle="Get a response within 24 hours."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Countries */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">Where we help you study</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Four destinations, one expert team
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                            We specialise in Georgia, Uzbekistan, Europe, and the UK — each with dedicated support for admissions,
                            visas, and student life.
                        </p>
                    </Reveal>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {countries.map((c, i) => (
                            <Reveal key={c.id} delay={i * 100}>
                                <Link
                                    to={c.id === 'georgia' ? '/why-georgia' : '/universities'}
                                    className="group relative block h-72 overflow-hidden rounded-2xl shadow-lg"
                                >
                                    <img
                                        src={c.image}
                                        alt={c.name}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
                                    <div className="absolute bottom-0 p-5">
                                        <div className="mb-1 text-2xl">{c.flag}</div>
                                        <h3 className="text-xl font-bold text-white">{c.name}</h3>
                                        <p className="mt-1 text-sm text-slate-300 line-clamp-2">{c.blurb}</p>
                                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-300 transition-transform group-hover:gap-2">
                                            Explore <ArrowRight className="h-3.5 w-3.5" />
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services / How we help */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">How we help</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            End-to-end support, every step of the way
                        </h2>
                    </Reveal>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((s, i) => (
                            <Reveal key={s.title} delay={i * 100}>
                                <div className="card h-full p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                        <s.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                                    <Link
                                        to={s.link}
                                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:gap-2"
                                    >
                                        Learn more <ArrowRight className="h-3.5 w-3.5 transition-all" />
                                    </Link>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured universities */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 flex flex-col items-end justify-between gap-4 sm:flex-row">
                        <div>
                            <span className="section-eyebrow">Universities we partner with</span>
                            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                                Featured universities
                            </h2>
                        </div>
                        <Link to="/universities" className="btn-secondary">
                            View all universities <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {featuredUniversities.map((u, i) => (
                            <Reveal key={u.id} delay={i * 100}>
                                <Link to={`/universities/${u.id}`} className="card group block overflow-hidden">
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={u.image}
                                            alt={u.name}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                                            {u.country} &middot; {u.city}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-2 flex items-center gap-2">
                                            <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
                                            <span className="text-sm font-semibold text-slate-700">{u.rating}</span>
                                            <span className="text-xs text-slate-400">&middot; Est. {u.established}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900">{u.name}</h3>
                                        <p className="mt-2 text-sm text-slate-500 line-clamp-2">{u.overview}</p>
                                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
                                            View university <ArrowRight className="h-3.5 w-3.5 transition-all" />
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why choose us */}
            <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
                <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_20%,rgba(167,31,44,0.15),transparent)]" />
                <div className="container-page relative">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <Reveal>
                            <span className="section-eyebrow bg-brand-500/15 text-brand-300">Why Future Factory</span>
                            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                                We do not just advise. We deliver.
                            </h2>
                            <p className="mt-5 text-lg text-slate-300">
                                Most agencies stop at handing you an admission letter. We stay with you from your first question to your
                                first day on campus — and beyond.
                            </p>
                            <div className="mt-8 space-y-4">
                                {whyChooseUs.map((w) => (
                                    <div key={w.title} className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">{w.title}</h3>
                                            <p className="mt-0.5 text-sm text-slate-400">{w.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <div className="grid grid-cols-2 gap-4">
                                {statCards.map((s, i) => (
                                    <div
                                        key={s.label}
                                        className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur ${i === 0 || i === 3 ? 'sm:translate-y-6' : ''
                                            }`}
                                    >
                                        <s.icon className="mb-3 h-8 w-8 text-brand-400" />
                                        <div className="text-3xl font-bold text-white">{s.value}</div>
                                        <div className="mt-1 text-sm text-slate-400">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">Success stories</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Hear from our students
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                            Real students, real universities, real results. These are the people we are proud to have helped.
                        </p>
                    </Reveal>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {topStories.map((s, i) => (
                            <Reveal key={s.id} delay={i * 100}>
                                <Link
                                    to={`/success-stories/${s.id}`}
                                    className="card group flex h-full flex-col overflow-hidden"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={s.image}
                                            alt={s.name}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                                        <Quote className="absolute bottom-4 left-4 h-8 w-8 text-white/80" />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <p className="text-sm italic leading-relaxed text-slate-600">"{s.quote}"</p>
                                        <div className="mt-4 border-t border-slate-100 pt-4">
                                            <h3 className="font-bold text-slate-900">{s.name}</h3>
                                            <p className="text-xs text-slate-500">
                                                {s.course} &middot; {s.origin}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link to="/success-stories" className="btn-secondary">
                            Read all success stories <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Latest blog posts */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 flex flex-col items-end justify-between gap-4 sm:flex-row">
                        <div>
                            <span className="section-eyebrow">Blog &amp; resources</span>
                            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                                Latest from our blog
                            </h2>
                        </div>
                        <Link to="/blog" className="btn-secondary">
                            All articles <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {latestPosts.map((p, i) => (
                            <Reveal key={p.id} delay={i * 100}>
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
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ preview */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">FAQs</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Questions? We have answers.
                        </h2>
                    </Reveal>
                    <div className="mx-auto max-w-3xl space-y-4">
                        {faqs.slice(0, 4).map((f, i) => (
                            <Reveal key={i} delay={i * 80}>
                                <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-slate-900 marker:hidden">
                                        {f.q}
                                        <span className="shrink-0 text-brand-500 transition-transform group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                                </details>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link to="/faqs" className="btn-secondary">
                            See all FAQs <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}

const services = [
    {
        title: 'University Admissions',
        desc: 'We shortlist the best-fit universities, prepare your documents, and submit your applications — with a 98% success rate.',
        icon: GraduationCap,
        link: '/universities',
    },
    {
        title: 'Visa Assistance',
        desc: 'Complete visa support: document checklists, application filing, embassy appointments, and post-arrival permits.',
        icon: Plane,
        link: '/visa-assistance',
    },
    {
        title: 'Accommodation Support',
        desc: 'We arrange university hostels or private apartments before you arrive — inspected, safe, and close to campus.',
        icon: HomeIcon,
        link: '/accommodation',
    },
    {
        title: 'Student Life Guidance',
        desc: 'From SIM cards to bank accounts and cultural tips, we help you settle in and thrive in your new city.',
        icon: ShieldCheck,
        link: '/student-life',
    },
];

const whyChooseUs = [
    {
        title: '98% visa success rate',
        desc: 'We pre-screen every application to eliminate the common rejection reasons.',
    },
    {
        title: 'On-the-ground team in Tbilisi',
        desc: 'We have staff in Georgia who inspect accommodations and support you after arrival.',
    },
    {
        title: 'Transparent pricing, no hidden fees',
        desc: 'You know the full cost upfront — our packages are clear and tailored to your destination.',
    },
    {
        title: 'Support that does not stop at admission',
        desc: 'We stay in touch throughout your studies — career advice, licensing exam guidance, and more.',
    },
];

const statCards = [
    { label: 'Students placed', value: '1,200+', icon: Users },
    { label: 'Visa success rate', value: '98%', icon: ShieldCheck },
    { label: 'Partner universities', value: '40+', icon: Award },
    { label: 'Years of experience', value: '10+', icon: Clock },
];

function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
