import { Link } from 'react-router-dom';
import {
    ArrowRight, FileText, Calendar, Clock, CheckCircle2, AlertCircle,
    Plane, Building, Stamp, FileCheck, Globe2, UserCheck,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import EnquiryForm from '@/components/EnquiryForm';
import { Reveal, StaggerGroup, StaggerItem, motion, fadeInUp, scaleIn, slideInLeft, slideInRight } from '@/lib/motion';

interface VisaType {
    country: string;
    flag: string;
    visaName: string;
    duration: string;
    processing: string;
    cost: string;
    workRights: string;
    stayBack: string;
    color: string;
}

const visaTypes: VisaType[] = [
    {
        country: 'Georgia',
        flag: '🇬🇪',
        visaName: 'D3 Student Visa / Residence Permit',
        duration: '1 year (renewable)',
        processing: '10–15 working days',
        cost: '~$50 visa fee',
        workRights: 'Part-time allowed',
        stayBack: 'Residence permit renewable during studies',
        color: 'primary',
    },
    {
        country: 'Uzbekistan',
        flag: '🇺🇿',
        visaName: 'Student Visa (E-Visa)',
        duration: '1 academic year',
        processing: '5–10 working days',
        cost: '~$40 visa fee',
        workRights: 'Limited',
        stayBack: 'Visa renewal per academic year',
        color: 'accent',
    },
    {
        country: 'Canada',
        flag: '🇨🇦',
        visaName: 'Study Permit',
        duration: 'Duration of program',
        processing: '4–8 weeks',
        cost: '~CAD $150',
        workRights: 'Up to 24 hrs/week off-campus',
        stayBack: 'Post-Graduation Work Permit (up to 3 years)',
        color: 'secondary',
    },
    {
        country: 'United Kingdom',
        flag: '🇬🇧',
        visaName: 'Student Visa (Tier 4)',
        duration: 'Duration of program + buffer',
        processing: '3–15 working days',
        cost: '~£490',
        workRights: 'Up to 20 hrs/week during term',
        stayBack: 'Graduate Route visa (2 years)',
        color: 'success',
    },
];

const colorClassMap: Record<string, { bg: string; text: string; border: string }> = {
    primary: { bg: 'bg-primary-600/15', text: 'text-primary-400', border: 'border-primary-600/30' },
    accent: { bg: 'bg-accent-500/15', text: 'text-accent-400', border: 'border-accent-500/30' },
    secondary: { bg: 'bg-secondary-500/15', text: 'text-secondary-400', border: 'border-secondary-500/30' },
    success: { bg: 'bg-success-500/15', text: 'text-success-400', border: 'border-success-500/30' },
};

const visaSteps = [
    {
        step: '01',
        title: 'Receive Acceptance Letter',
        description: 'After your university application is approved, you\'ll receive an official acceptance letter — the foundational document for your visa application.',
        icon: FileText,
    },
    {
        step: '02',
        title: 'Document Preparation',
        description: 'We help you gather and prepare all required documents: passport, acceptance letter, financial proof, medical certificate, photos, and completed visa forms.',
        icon: FileCheck,
    },
    {
        step: '03',
        title: 'Visa Application Submission',
        description: 'We submit your visa application to the appropriate embassy or consulate, ensuring every form is correctly filled and every document is in order.',
        icon: Stamp,
    },
    {
        step: '04',
        title: 'Embassy Processing',
        description: 'The embassy reviews your application. Processing times vary by country — from 5 days to 8 weeks. We track your application status throughout.',
        icon: Clock,
    },
    {
        step: '05',
        title: 'Visa Approval & Collection',
        description: 'Once approved, we coordinate visa collection or delivery. For countries requiring biometrics, we schedule your appointment at the nearest center.',
        icon: CheckCircle2,
    },
    {
        step: '06',
        title: 'Travel & Registration',
        description: 'With your visa in hand, we arrange your travel and ensure you register at your university and local authorities within the required timeframe.',
        icon: Plane,
    },
];

const requiredDocuments = [
    'Valid passport (18+ months validity)',
    'Official university acceptance letter',
    'Completed visa application form',
    'Passport-size photographs (per embassy specs)',
    'Proof of financial means (bank statements)',
    'Sponsorship letter (if applicable)',
    'Medical fitness certificate',
    'Police clearance certificate',
    'Travel insurance proof',
    'Academic transcripts & certificates',
];

const faqs = [
    {
        question: 'What if my visa is rejected?',
        answer: 'Visa rejections are rare with our guidance — our approval rate is 98%. If a rejection does occur, we analyze the reason, address the gap, and re-apply immediately. Most re-applications succeed on the second attempt.',
    },
    {
        question: 'Do I need to visit the embassy in person?',
        answer: 'It depends on the country. Georgia and Uzbekistan often process visas without an in-person visit. Canada and the UK require biometrics appointments at a Visa Application Center. We schedule these for you.',
    },
    {
        question: 'How much money do I need to show for financial proof?',
        answer: 'Requirements vary by destination. Georgia typically requires proof of ~$3,000 in your account. Canada requires proof of funds covering tuition plus $10,000 CAD for living expenses. We provide exact figures during your consultation.',
    },
    {
        question: 'Can my family accompany me?',
        answer: 'Most countries allow dependent visas for spouses and children. Georgia, Canada, and the UK all have dependent visa pathways. We can guide your family through the process alongside your application.',
    },
];

export default function Visa() {
    return (
        <>
            <PageHero
                label="Visa & Immigration"
                title="Student Visa Guide"
                subtitle="Everything you need to know about the visa process for each destination. We handle the paperwork, submissions, and embassy follow-ups — so you can focus on preparing for your journey."
                image="https://images.pexels.com/photos/4922356/pexels-photo-4922356.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Visa Guide' }]}
            />

            {/* Visa Types by Country */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">Visa Types</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Visa Structure by Country
                        </h2>
                        <p className="text-gray-400">
                            Each destination has its own visa type, requirements, and processing timeline. Here's a clear breakdown.
                        </p>
                    </Reveal>

                    <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {visaTypes.map((visa) => {
                            const c = colorClassMap[visa.color];
                            return (
                                <StaggerItem key={visa.country} variants={fadeInUp}>
                                    <motion.div
                                        whileHover={{ y: -4 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                        className={`card p-6 border-l-4 ${c.border}`}
                                    >
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl">{visa.flag}</span>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">{visa.country}</h3>
                                                    <p className={`text-sm font-medium ${c.text}`}>{visa.visaName}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-500 uppercase tracking-wider">Duration</p>
                                                <p className="text-sm text-gray-300">{visa.duration}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-500 uppercase tracking-wider">Processing</p>
                                                <p className="text-sm text-gray-300">{visa.processing}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-500 uppercase tracking-wider">Fee</p>
                                                <p className="text-sm text-gray-300">{visa.cost}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-xs text-gray-500 uppercase tracking-wider">Work Rights</p>
                                                <p className="text-sm text-gray-300">{visa.workRights}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-800">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Post-Study Stay</p>
                                            <p className={`text-sm font-medium ${c.text}`}>{visa.stayBack}</p>
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerGroup>
                </div>
            </section>

            {/* Visa Process Steps */}
            <section className="py-20 lg:py-28 bg-black/20">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">Step by Step</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            The Visa Process
                        </h2>
                        <p className="text-gray-400">
                            From acceptance letter to landing in your destination country — here's how we guide you through every stage.
                        </p>
                    </Reveal>

                    <div className="relative">
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2" />
                        <StaggerGroup className="space-y-8">
                            {visaSteps.map((step, i) => (
                                <StaggerItem key={step.step} variants={fadeInUp}>
                                    <div className={`relative flex flex-col lg:flex-row gap-6 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                        <div className="lg:w-1/2">
                                            <motion.div
                                                whileHover={{ y: -4 }}
                                                className="card p-6 group"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-14 h-14 rounded-2xl bg-primary-600/15 text-primary-400 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300`}>
                                                        <step.icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">Step {step.step}</span>
                                                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 text-sm leading-relaxed mt-4">{step.description}</p>
                                            </motion.div>
                                        </div>
                                        <div className="hidden lg:flex w-14 h-14 rounded-full bg-dark-box border-2 border-primary-600/40 items-center justify-center shrink-0 z-10">
                                            <span className="text-sm font-bold text-primary-400">{step.step}</span>
                                        </div>
                                        <div className="hidden lg:block lg:w-1/2" />
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerGroup>
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <Reveal variants={slideInLeft}>
                            <span className="section-label mb-4">Be Prepared</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Required Documents
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Having your documents ready speeds up the visa process significantly. We provide a
                                personalised checklist during your consultation and help with translations and
                                attestations where needed.
                            </p>
                            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3" fast>
                                {requiredDocuments.map((doc, i) => (
                                    <StaggerItem key={i} variants={fadeInUp}>
                                        <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-800/40">
                                            <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-300">{doc}</span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerGroup>
                        </Reveal>
                        <Reveal variants={slideInRight} delay={0.15}>
                            <div className="card p-8 bg-gradient-to-br from-primary-900/20 to-accent-800/10 border-primary-600/20">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-primary-600/20 text-primary-400 flex items-center justify-center">
                                        <Globe2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">98% Visa Success Rate</h3>
                                        <p className="text-sm text-gray-400">Across all destinations</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Our team has processed thousands of student visa applications. We know exactly what
                                    each embassy looks for and prepare your application to maximise approval chances.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="text-center p-4 rounded-xl bg-gray-800/50">
                                        <p className="text-2xl font-bold text-white font-display">2,500+</p>
                                        <p className="text-xs text-gray-500 mt-1">Visas Processed</p>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-gray-800/50">
                                        <p className="text-2xl font-bold text-white font-display">10–15</p>
                                        <p className="text-xs text-gray-500 mt-1">Avg. Processing Days</p>
                                    </div>
                                </div>
                                <Link to="/contact" className="btn-primary w-full">
                                    Start Your Visa Process
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Visa FAQ */}
            <section className="py-16 lg:py-24 bg-black/20">
                <div className="container-page max-w-3xl">
                    <Reveal className="text-center mb-12">
                        <span className="section-label mb-4">Common Questions</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Visa FAQs
                        </h2>
                        <p className="text-gray-400">
                            Straight answers to the most common visa-related questions.
                        </p>
                    </Reveal>
                    <StaggerGroup className="space-y-4" fast>
                        {faqs.map((faq, i) => (
                            <StaggerItem key={i} variants={fadeInUp}>
                                <div className="card p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent-500/15 text-accent-400 flex items-center justify-center shrink-0">
                                            <AlertCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <Reveal variants={slideInLeft}>
                            <span className="section-label mb-4">We've Got You</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Let Us Handle Your Visa
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Don't let visa stress hold you back. Our experienced team manages the entire process —
                                from document preparation to embassy submission — so you can focus on packing.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Complete document checklist & preparation',
                                    'Embassy appointment scheduling',
                                    'Application tracking & follow-up',
                                    'Post-arrival registration guidance',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <UserCheck className="w-5 h-5 text-success-500 shrink-0" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                        <Reveal variants={scaleIn} delay={0.15}>
                            <EnquiryForm title="Visa Enquiry" subtitle="Tell us your destination and we'll guide you through the visa process." />
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    );
}
