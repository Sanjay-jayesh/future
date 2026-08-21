import { Link } from 'react-router-dom';
import { ClipboardList, FileCheck, Send, Mail, Plane, Home as HomeIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';

export function AdmissionProcessPage() {
    return (
        <>
            <PageHero
                eyebrow="Admission Process"
                title="Your journey from application to arrival"
                subtitle="We have streamlined the admission process into six clear steps. You focus on gathering your documents — we handle the rest, from application to airport pickup."
                image="https://images.pexels.com/photos/7972324/pexels-photo-7972324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Admission Process' }]}
            />

            {/* Steps timeline */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <div className="relative mx-auto max-w-4xl">
                        <div className="absolute left-8 top-0 hidden h-full w-px bg-slate-200 lg:block" />
                        {steps.map((step, i) => (
                            <Reveal key={step.title} delay={i * 80}>
                                <div className="relative mb-12 lg:pl-24">
                                    <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30 lg:flex">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
                                        <div className="mb-3 flex items-center gap-3">
                                            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                                                Step {i + 1}
                                            </span>
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 lg:hidden">
                                                <step.icon className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                                        {step.details && (
                                            <ul className="mt-4 space-y-2">
                                                {step.details.map((d) => (
                                                    <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                                                        {d}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documents needed */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
                    <Reveal>
                        <span className="section-eyebrow">Documents</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                            What you need to get started
                        </h2>
                        <p className="mt-4 text-slate-600">
                            The document set is straightforward. We provide a personalised checklist based on your chosen university
                            and country, and we verify everything before submission to avoid delays.
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {documents.map((d) => (
                                <div key={d} className="flex items-start gap-2 rounded-xl bg-white p-3 shadow-sm">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                                    <span className="text-sm text-slate-700">{d}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/contact" className="btn-primary mt-8">
                            Get your personalised checklist <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className="overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="https://images.pexels.com/photos/5554257/pexels-photo-5554257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                                alt="Students on campus"
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="mb-12 text-center">
                        <span className="section-eyebrow">Timeline</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            How long does it take?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                            We recommend starting 3–4 months before your intended intake. Here is a typical timeline.
                        </p>
                    </Reveal>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {timeline.map((t, i) => (
                            <Reveal key={t.phase} delay={i * 100}>
                                <div className="rounded-2xl border border-slate-200 p-6 text-center">
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                                        {i + 1}
                                    </div>
                                    <div className="text-sm font-bold text-brand-700">{t.duration}</div>
                                    <h3 className="mt-2 font-bold text-slate-900">{t.phase}</h3>
                                    <p className="mt-1 text-xs text-slate-500">{t.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                title="Ready to start your application?"
                subtitle="Book a free consultation and we will map out your personalised application timeline today."
            />
        </>
    );
}

const steps = [
    {
        title: 'Free Consultation',
        desc: 'We start with a no-obligation call to understand your goals, budget, and academic background. Based on this, we recommend the best universities and programs for you.',
        icon: ClipboardList,
        details: ['30-minute call or WhatsApp chat', 'Personalised university shortlist', 'Cost breakdown for your shortlisted options'],
    },
    {
        title: 'Document Preparation',
        desc: 'We provide a personalised document checklist and verify every document before submission. If translations or attestations are needed, we arrange them.',
        icon: FileCheck,
        details: ['Transcripts and certificates verified', 'Translations arranged if needed', 'Passport and photos checked'],
    },
    {
        title: 'Application Submission',
        desc: 'We submit your application to your chosen university and follow up regularly. Most students receive an admission decision within 2–3 weeks.',
        icon: Send,
        details: ['Direct submission to university admissions', 'Regular follow-up on your application status', 'Admission decision in 2–3 weeks'],
    },
    {
        title: 'Receive Admission Letter',
        desc: 'Once approved, you receive your official university invitation letter. This is the key document for your visa application. We verify it meets embassy requirements.',
        icon: Mail,
        details: ['Official invitation letter issued', 'Letter format verified for embassy use', 'Tuition payment guidance provided'],
    },
    {
        title: 'Visa Processing',
        desc: 'We handle your complete visa application — document checklist, form filling, embassy appointment booking, and pre-screening to ensure a 98% success rate.',
        icon: Plane,
        details: ['Complete visa document checklist', 'Embassy appointment booked for you', 'Application pre-screened for rejection risks'],
    },
    {
        title: 'Travel & Arrival',
        desc: 'We arrange your accommodation before you fly and provide airport pickup. Our team in Tbilisi helps you settle in — SIM card, bank account, and university registration.',
        icon: HomeIcon,
        details: ['Accommodation confirmed before you fly', 'Airport pickup arranged', 'Post-arrival support: SIM, bank, registration'],
    },
];

const documents = [
    'Secondary school certificate',
    'Academic transcripts',
    'Valid passport',
    'Passport-size photographs',
    'University application form',
    'Statement of purpose (if required)',
    'Proof of financial means',
    'Medical insurance',
];

const timeline = [
    { phase: 'Consultation', duration: 'Day 1', desc: 'Free call and university shortlist' },
    { phase: 'Documents', duration: 'Week 1–2', desc: 'Gather and verify your documents' },
    { phase: 'Application', duration: 'Week 2–5', desc: 'Submit and receive admission letter' },
    { phase: 'Visa & Travel', duration: 'Week 5–8', desc: 'Visa processing and departure' },
];
