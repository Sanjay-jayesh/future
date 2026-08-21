import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, GraduationCap, Wallet, ShieldCheck, Globe2, HeartPulse, Building2 } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { EnquiryForm } from '@/components/EnquiryForm';

export function WhyGeorgiaPage() {
    return (
        <>
            <PageHero
                eyebrow="Why Georgia"
                title="Why Georgia is the smart choice for studying abroad"
                subtitle="Globally recognised degrees, affordable tuition, a safe environment, and no IELTS requirement — Georgia offers everything international students need at a fraction of Western costs."
                image="https://images.pexels.com/photos/36314350/pexels-photo-36314350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Why Georgia' }]}
            />

            {/* Key reasons */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">The advantages</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Six reasons students choose Georgia
                        </h2>
                    </Reveal>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {reasons.map((r, i) => (
                            <Reveal key={r.title} delay={i * 100}>
                                <div className="card h-full p-7">
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                                        <r.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">{r.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{r.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cost comparison */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <Reveal>
                            <span className="section-eyebrow">Affordable education</span>
                            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                                How Georgia compares on cost
                            </h2>
                            <p className="mt-4 text-slate-600">
                                Georgia offers globally recognised degrees at a fraction of what you would pay in the West — without
                                compromising on quality. Here is how the numbers stack up.
                            </p>
                            <div className="mt-8 space-y-3">
                                {[
                                    'Tuition from $3,000/year — vs $25,000+ in the UK or US',
                                    'Living costs of $300–$500/month — vs $1,500+ in Western Europe',
                                    'No IELTS or expensive entrance exams required',
                                    'Part-time work allowed to help offset costs',
                                ].map((p) => (
                                    <div key={p} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                                        <span className="text-sm text-slate-700">{p}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/universities" className="btn-primary mt-8">
                                Explore universities <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Reveal>
                        <Reveal delay={150}>
                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-50 text-left">
                                        <tr>
                                            <th className="px-5 py-4 font-semibold text-slate-700">Country</th>
                                            <th className="px-5 py-4 font-semibold text-slate-700">Tuition/yr</th>
                                            <th className="px-5 py-4 font-semibold text-slate-700">Living/mo</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {costComparison.map((row) => (
                                            <tr key={row.country} className={row.highlight ? 'bg-brand-50' : ''}>
                                                <td className="px-5 py-4 font-medium text-slate-800">
                                                    {row.country}
                                                    {row.highlight && (
                                                        <span className="ml-2 rounded-full bg-brand-600 px-2 py-0.5 text-xs text-white">Best value</span>
                                                    )}
                                                </td>
                                                <td className="px-5 py-4 text-slate-600">{row.tuition}</td>
                                                <td className="px-5 py-4 text-slate-600">{row.living}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Safety & lifestyle */}
            <section className="py-20 lg:py-28">
                <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
                    <Reveal>
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="https://images.pexels.com/photos/32998602/pexels-photo-32998602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                alt="Tbilisi old town"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <span className="section-eyebrow">Safe &amp; welcoming</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                            One of the safest countries in the region
                        </h2>
                        <p className="mt-4 text-slate-600">
                            Georgia is ranked among the safest countries in Europe for international visitors and students. Violent
                            crime is rare, and students regularly walk home late at night without concern.
                        </p>
                        <div className="mt-6 space-y-4">
                            {lifestylePoints.map((p) => (
                                <div key={p.title} className="flex items-start gap-4">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">{p.title}</h3>
                                        <p className="mt-0.5 text-sm text-slate-500">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/student-life" className="btn-secondary mt-8">
                            Learn about student life <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* Enquiry */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
                    <Reveal>
                        <span className="section-eyebrow">Ready to explore?</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                            See if Georgia is right for you
                        </h2>
                        <p className="mt-4 text-slate-600">
                            Tell us about your goals and our team will recommend the best universities and programs for your budget and
                            aspirations. No obligation, no pressure.
                        </p>
                        <div className="mt-8 space-y-3">
                            {[
                                'Personalised university shortlist based on your budget and grades',
                                'Full breakdown of tuition, living costs, and visa requirements',
                                'Step-by-step roadmap from application to arrival',
                            ].map((p) => (
                                <div key={p} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                                    <span className="text-sm text-slate-700">{p}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <EnquiryForm leadType="enquiry" />
                    </Reveal>
                </div>
            </section>

            <CtaSection />
        </>
    );
}

const reasons = [
    {
        title: 'Globally recognised degrees',
        desc: 'Georgian universities are WHO-listed and recognised by the Medical Council of India, ECFMG, and medical bodies across the Gulf and Europe.',
        icon: GraduationCap,
    },
    {
        title: 'Affordable tuition',
        desc: 'Annual fees range from $3,000 to $7,000 — a fraction of what you would pay in the UK, US, or Western Europe, with the same quality of education.',
        icon: Wallet,
    },
    {
        title: 'No IELTS required',
        desc: 'Most Georgian universities do not require IELTS or TOEFL. Programs are taught in English, with a simple interview at some institutions.',
        icon: Globe2,
    },
    {
        title: 'Safe and welcoming',
        desc: 'Georgia is one of the safest countries in the region. The locals are hospitable and the international student community is growing fast.',
        icon: ShieldCheck,
    },
    {
        title: 'WHO-recognised medical degrees',
        desc: 'Georgian medical schools produce graduates eligible for licensing exams in India (FMGE/NExT), the UK (PLAB), and the USA (USMLE).',
        icon: HeartPulse,
    },
    {
        title: 'Modern infrastructure',
        desc: 'Universities have modern labs, digital libraries, and well-equipped clinical facilities. Tbilisi itself has fast internet and a growing tech scene.',
        icon: Building2,
    },
];

const costComparison = [
    { country: 'Georgia', tuition: '$3,000–$7,000', living: '$300–$500', highlight: true },
    { country: 'Uzbekistan', tuition: '$3,500–$4,500', living: '$250–$400', highlight: false },
    { country: 'UK', tuition: '£14,000–£20,000', living: '£1,000–£1,500', highlight: false },
    { country: 'USA', tuition: '$25,000–$50,000', living: '$1,200–$2,000', highlight: false },
    { country: 'Western Europe', tuition: '€8,000–€15,000', living: '€800–€1,200', highlight: false },
];

const lifestylePoints = [
    {
        title: 'Low crime rate',
        desc: 'Georgia ranks among the safest countries in Europe. Students feel secure walking around Tbilisi at any hour.',
    },
    {
        title: 'Affordable lifestyle',
        desc: 'A comfortable student life costs $300–$500/month including rent, food, transport, and entertainment.',
    },
    {
        title: 'Rich culture and nature',
        desc: 'From the Old Town of Tbilisi to the Caucasus mountains and Black Sea coast, Georgia offers an incredible quality of life.',
    },
    {
        title: 'Growing international community',
        desc: 'With students from 80+ countries, you will find cultural events, places of worship, and communities from home.',
    },
];
