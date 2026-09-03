import { Link } from 'react-router-dom';
import { Stethoscope, HeartPulse, CheckCircle2, ArrowRight, GraduationCap, Globe2, Award, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Reveal, StaggerGroup, StaggerItem, motion } from '@/lib/motion';

interface MbbsProgram {
    university: string;
    location: string;
    tuition: string;
    duration: string;
    recognition: string[];
    intake: string;
    medium: string;
}

interface NursingProgram {
    university: string;
    location: string;
    tuition: string;
    duration: string;
    recognition: string[];
    intake: string;
    medium: string;
}

const mbbsPrograms: MbbsProgram[] = [
    {
        university: 'Tbilisi State Medical University (TSMU)',
        location: 'Tbilisi, Georgia',
        tuition: '$5,000 – $7,000 / year',
        duration: '6 Years (MD)',
        recognition: ['WHO', 'ECFMG', 'NMC India'],
        intake: 'Fall (September) & Spring (February)',
        medium: 'English',
    },
    {
        university: 'David Tvildiani Medical University (DTMU)',
        location: 'Tbilisi, Georgia',
        tuition: '$4,500 – $6,000 / year',
        duration: '6 Years (MD)',
        recognition: ['WHO', 'ECFMG', 'NMC India'],
        intake: 'Fall (September)',
        medium: 'English',
    },
    {
        university: 'University of Georgia',
        location: 'Tbilisi, Georgia',
        tuition: '$3,500 – $5,500 / year',
        duration: '6 Years (MD)',
        recognition: ['WHO', 'ECFMG'],
        intake: 'Fall (September) & Spring (February)',
        medium: 'English',
    },
    {
        university: 'Georgian National University (SEU)',
        location: 'Tbilisi, Georgia',
        tuition: '$4,000 – $6,500 / year',
        duration: '6 Years (MD)',
        recognition: ['WHO', 'ECFMG', 'NMC India'],
        intake: 'Fall (September) & Spring (February)',
        medium: 'English',
    },
    {
        university: 'Caucasus University',
        location: 'Tbilisi, Georgia',
        tuition: '$4,000 – $5,500 / year',
        duration: '6 Years (MD)',
        recognition: ['WHO', 'ECFMG'],
        intake: 'Fall (September)',
        medium: 'English',
    },
];

const nursingPrograms: NursingProgram[] = [
    {
        university: 'Tbilisi State Medical University (TSMU)',
        location: 'Tbilisi, Georgia',
        tuition: '$3,000 – $4,500 / year',
        duration: '4 Years (BSc Nursing)',
        recognition: ['WHO', 'ICN (Intl. Council of Nurses)'],
        intake: 'Fall (September)',
        medium: 'English',
    },
    {
        university: 'Georgian National University (SEU)',
        location: 'Tbilisi, Georgia',
        tuition: '$2,800 – $4,000 / year',
        duration: '4 Years (BSc Nursing)',
        recognition: ['WHO', 'National Nursing Associations'],
        intake: 'Fall (September) & Spring (February)',
        medium: 'English',
    },
    {
        university: 'David Tvildiani Medical University (DTMU)',
        location: 'Tbilisi, Georgia',
        tuition: '$3,200 – $4,500 / year',
        duration: '4 Years (BSc Nursing)',
        recognition: ['WHO', 'ECFMG'],
        intake: 'Fall (September)',
        medium: 'English',
    },
    {
        university: 'University of Georgia',
        location: 'Tbilisi, Georgia',
        tuition: '$3,000 – $4,200 / year',
        duration: '4 Years (BSc Nursing)',
        recognition: ['WHO', 'Intl. Nursing Bodies'],
        intake: 'Fall (September) & Spring (February)',
        medium: 'English',
    },
];

const whyMedicine = [
    { icon: Globe2, title: 'Globally Recognised', desc: 'Degrees recognised by WHO, ECFMG, NMC, and medical councils worldwide — practise in India, UK, USA, and beyond.' },
    { icon: Award, title: 'High Quality Education', desc: 'Modern simulation labs, experienced faculty, and clinical rotations at top Georgian hospitals.' },
    { icon: Clock, title: 'No Entrance Exam', desc: 'Admission based on 12th-grade marks. No NEET required for most Georgian medical programs.' },
    { icon: GraduationCap, title: 'English-Medium', desc: 'All programs taught entirely in English — no language barrier for international students.' },
];

function ProgramTable({ programs, type }: { programs: MbbsProgram[] | NursingProgram[]; type: 'MBBS' | 'Nursing' }) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-dark-card">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-primary-600/10 border-b border-gray-800">
                        <th className="px-4 py-4 text-left font-bold text-white whitespace-nowrap">University</th>
                        <th className="px-4 py-4 text-left font-bold text-white whitespace-nowrap">Location</th>
                        <th className="px-4 py-4 text-left font-bold text-white whitespace-nowrap">Tuition / Year</th>
                        <th className="px-4 py-4 text-left font-bold text-white whitespace-nowrap">Duration</th>
                        <th className="px-4 py-4 text-left font-bold text-white whitespace-nowrap">Recognition</th>
                        <th className="px-4 py-4 text-left font-bold text-white whitespace-nowrap">Intake</th>
                        <th className="px-4 py-4 text-left font-bold text-white whitespace-nowrap">Medium</th>
                    </tr>
                </thead>
                <tbody>
                    {programs.map((prog, i) => (
                        <tr
                            key={prog.university}
                            className={`border-b border-gray-800/50 transition-colors hover:bg-primary-600/5 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.015]'}`}
                        >
                            <td className="px-4 py-4 font-semibold text-white whitespace-nowrap">{prog.university}</td>
                            <td className="px-4 py-4 text-gray-400 whitespace-nowrap">{prog.location}</td>
                            <td className="px-4 py-4 text-primary-400 font-medium whitespace-nowrap">{prog.tuition}</td>
                            <td className="px-4 py-4 text-gray-300 whitespace-nowrap">{prog.duration}</td>
                            <td className="px-4 py-4">
                                <div className="flex flex-wrap gap-1">
                                    {prog.recognition.map((r) => (
                                        <span key={r} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-success-500/10 text-success-400 text-xs font-medium whitespace-nowrap">
                                            <CheckCircle2 className="w-3 h-3" />
                                            {r}
                                        </span>
                                    ))}
                                </div>
                            </td>
                            <td className="px-4 py-4 text-gray-400 whitespace-nowrap">{prog.intake}</td>
                            <td className="px-4 py-4 text-gray-300 whitespace-nowrap">{prog.medium}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function MbbsNursing() {
    return (
        <>
            <PageHero
                label="Medical & Health Programs"
                title="MBBS & Nursing in Georgia"
                subtitle="Explore medical and nursing programs at Georgia's top universities — globally recognised degrees, affordable tuition, and English-medium instruction."
                image="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'MBBS & Nursing' }]}
            />

            {/* Why Medicine section */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">Why Study Medicine in Georgia</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            A Pathway to a Medical Career
                        </h2>
                        <p className="text-lg text-gray-400">
                            Georgian medical universities offer globally recognised programs at a fraction of the cost compared to many other countries.
                        </p>
                    </Reveal>

                    <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyMedicine.map((item) => (
                            <StaggerItem key={item.title}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    className="card p-6 group h-full"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary-600/15 text-primary-400 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            {/* MBBS Table */}
            <section className="py-16 lg:py-24 bg-black/20">
                <div className="container-page">
                    <Reveal className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-primary-600/15 text-primary-400 flex items-center justify-center">
                                <Stethoscope className="w-7 h-7" />
                            </div>
                            <div>
                                <span className="section-label mb-1">Doctor of Medicine</span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white">MBBS / MD Programs</h2>
                            </div>
                        </div>
                        <p className="text-gray-400 max-w-3xl leading-relaxed">
                            Compare MBBS (MD) programs across our partner universities. All programs are taught in English and recognised by major medical bodies worldwide.
                        </p>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <ProgramTable programs={mbbsPrograms} type="MBBS" />
                    </Reveal>
                </div>
            </section>

            {/* Nursing Table */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <Reveal className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-secondary-500/15 text-secondary-400 flex items-center justify-center">
                                <HeartPulse className="w-7 h-7" />
                            </div>
                            <div>
                                <span className="section-label mb-1">Bachelor of Science</span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white">Nursing Programs</h2>
                            </div>
                        </div>
                        <p className="text-gray-400 max-w-3xl leading-relaxed">
                            BSc Nursing programs at our partner universities — affordable, internationally aligned, and taught entirely in English.
                        </p>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <ProgramTable programs={nursingPrograms} type="Nursing" />
                    </Reveal>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-dark-stories relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-dark-stories via-dark-navbar to-dark-stories" />
                <div className="container-page relative z-10 text-center">
                    <Reveal>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Ready to Pursue a Career in Medicine?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                            Book a free consultation and get expert guidance on choosing the right medical or nursing program.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link to="/contact" className="btn-accent text-base">
                                Book Your Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/universities" className="btn-secondary text-base">
                                View All Universities
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
