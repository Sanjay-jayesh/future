import { Link } from 'react-router-dom';
import {
    Quote, ArrowRight, Target, Eye, Heart, Award, Users, Globe2,
    GraduationCap, Lightbulb, Handshake, TrendingUp, Calendar,
    Linkedin, Mail, Phone,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Reveal, StaggerGroup, StaggerItem, motion, fadeInUp } from '@/lib/motion';

const founders = [
    {
        name: 'Thabsheer (Thabshi Machan)',
        role: 'Founder & CEO',
        image: '/assets/images/Founder.jpg',
        bio: [
            'When I set out to study abroad over a decade ago, the process was overwhelming. Endless paperwork, confusing visa requirements, universities I had never heard of, and no one to turn to for honest advice. I made it through — but I realised thousands of talented students were giving up on their dreams simply because they did not have the right guidance.',
            'That is why I founded Future Factory. Not as a business, but as a mission — to make quality international education accessible to every student, regardless of their background or budget. We started small, with a single office in Tbilisi and three university partners. Today, we have four offices across the globe and have helped over 2,500 students achieve their dreams.',
        ],
        quote: 'Education is the only investment that guarantees a return — not just in careers, but in lives changed, horizons broadened, and futures rewritten. Every student we help is a family we empower.',
    },
    {
        name: 'Afsal Pun',
        role: 'Co-Founder',
        image: '/assets/images/CoFounder.jpg',
        bio: [
            'I have always believed that talent is evenly distributed across the world, but opportunity is not. Growing up, I saw brilliant classmates abandon their ambitions simply because they could not navigate the complexities of applying abroad. That inequality stayed with me and eventually became the driving force behind co-founding Future Factory.',
            'Together with Thabsheer, we built Future Factory to be the guide we wished we had — transparent, genuinely student-first, and committed for the long haul. From building university partnerships to ensuring every student feels supported on day one, my focus is on making sure no aspiring student ever has to settle for less than their potential.',
        ],
        quote: 'Talent is everywhere, but opportunity is not. Our job is to bridge that gap — one student, one family, one dream at a time.',
    },
];

const milestones = [
    { year: '2015', title: 'The Spark', desc: 'After years of helping friends navigate study abroad, the idea for Future Factory was born — a consultancy that puts students first.' },
    { year: '2017', title: 'First Office in Tbilisi', desc: 'Opened the first Future Factory office in Tbilisi, Georgia, partnering with three Georgian universities.' },
    { year: '2019', title: '500 Students Placed', desc: 'Crossed the milestone of 500 students successfully placed across Georgian universities.' },
    { year: '2021', title: 'Expansion to Uzbekistan', desc: 'Expanded operations to Samarkand, Uzbekistan, opening new pathways for affordable medical education.' },
    { year: '2023', title: 'Global Presence', desc: 'Opened offices in Toronto and London, bringing the total to four international offices.' },
    { year: '2025', title: '2,500+ Students & Counting', desc: 'Surpassed 2,500 students placed with a 98% visa success rate, becoming a trusted name in international education.' },
];

const values = [
    { icon: Heart, title: 'Student-First Approach', desc: 'Every decision we make starts with one question: what is best for the student? Our services are free because your success is our success.' },
    { icon: Handshake, title: 'Transparency & Trust', desc: 'No hidden fees, no false promises. We tell you exactly what to expect — the good and the challenges — so you can make informed decisions.' },
    { icon: Globe2, title: 'Global Perspective', desc: 'Having studied and worked across multiple countries, we understand the nuances of each education system and help you choose the right fit.' },
    { icon: Award, title: 'Excellence in Everything', desc: 'From the first consultation to your first day on campus, we hold ourselves to the highest standard of service and support.' },
];

const achievements = [
    { icon: Users, value: '2,500+', label: 'Students Placed' },
    { icon: GraduationCap, value: '25+', label: 'Partner Universities' },
    { icon: Globe2, value: '4', label: 'Global Offices' },
    { icon: TrendingUp, value: '98%', label: 'Visa Success Rate' },
];

export default function Founder() {
    return (
        <>
            <PageHero
                label="Leadership"
                title="Meet Our Founders"
                subtitle="The vision and passion behind Future Factory — a journey of turning dreams of studying abroad into reality for thousands of students."
                image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Founders' }]}
            />

            {/* Founder profiles */}
            <section className="py-16 lg:py-24">
                <div className="container-page space-y-20 lg:space-y-28">
                    {founders.map((person, idx) => (
                        <div key={person.name} className="grid lg:grid-cols-5 gap-12 items-center">
                            <Reveal className={`lg:col-span-2 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-primary-600/20 to-accent-500/20 rounded-3xl blur-2xl opacity-50" />
                                    <div className="relative rounded-2xl overflow-hidden border border-gray-800 aspect-[3/4]">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-5 -right-5 bg-gray-900/95 backdrop-blur-md border border-gray-700/80 rounded-xl px-5 py-3 shadow-2xl z-10">
                                        <p className="text-primary-400 font-extrabold font-display text-lg tracking-wide drop-shadow-sm">
                                            {person.role}
                                        </p>
                                        <p className="text-gray-200 font-medium text-xs tracking-wider uppercase mt-0.5">
                                            {person.name}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal className={`lg:col-span-3 ${idx % 2 === 1 ? 'lg:order-1' : ''}`} delay={0.15}>
                                <span className="section-label mb-4">
                                    {idx === 0 ? 'The Story Behind Future Factory' : 'Building the Bridge'}
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                                    {person.name}
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed">
                                    {person.bio.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 mt-8">
                                    {[Linkedin, Mail, Phone].map((Icon, i) => (
                                        <motion.a
                                            key={i}
                                            href="#"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quote banner */}
            <section className="py-16 bg-dark-stories relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-dark-stories via-dark-navbar to-dark-stories" />
                <div className="container-page relative z-10">
                    <Reveal className="max-w-4xl mx-auto text-center">
                        <Quote className="w-12 h-12 text-primary-500/40 mx-auto mb-6" />
                        <p className="text-2xl lg:text-3xl font-display text-white leading-relaxed mb-6">
                            "Talent is everywhere, but opportunity is not. Our job is to bridge that gap — one student,
                            one family, one dream at a time."
                        </p>
                        <p className="text-primary-400 font-semibold text-lg">— Afsal Pun, Co-Founder</p>
                    </Reveal>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <StaggerGroup className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Target, title: 'Our Mission', desc: 'To provide honest, accessible, and comprehensive guidance that empowers students to make informed decisions about their international education.', iconBg: 'bg-primary-600/15', iconText: 'text-primary-400', hoverBg: 'group-hover:bg-primary-600', hoverText: 'group-hover:text-white' },
                            { icon: Eye, title: 'Our Vision', desc: 'To become the most trusted study-abroad consultancy worldwide, known for transparency, student-first values, and life-changing outcomes.', iconBg: 'bg-accent-500/15', iconText: 'text-accent-400', hoverBg: 'group-hover:bg-accent-500', hoverText: 'group-hover:text-white' },
                            { icon: Lightbulb, title: 'Our Promise', desc: 'Free consultations, no hidden fees, and unwavering support — from your first question to your first day on campus and beyond.', iconBg: 'bg-secondary-500/15', iconText: 'text-secondary-400', hoverBg: 'group-hover:bg-secondary-500', hoverText: 'group-hover:text-white' },
                        ].map((item) => (
                            <StaggerItem key={item.title} variants={fadeInUp}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    className="card p-8 h-full group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} ${item.iconText} flex items-center justify-center mb-5 ${item.hoverBg} ${item.hoverText} transition-all duration-300`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 lg:py-24 bg-black/20">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">What We Stand For</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-400">
                            The principles that guide every interaction, every recommendation, and every decision at Future Factory.
                        </p>
                    </Reveal>

                    <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {values.map((value) => (
                            <StaggerItem key={value.title} variants={fadeInUp}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    className="card p-6 flex gap-5 group h-full"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary-600/15 text-primary-400 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                        <value.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            {/* Journey timeline */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">The Road So Far</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Our Journey
                        </h2>
                        <p className="text-lg text-gray-400">
                            From a single office to a global presence — every milestone shaped who we are today.
                        </p>
                    </Reveal>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2" />
                        <StaggerGroup className="space-y-8">
                            {milestones.map((m, i) => (
                                <StaggerItem key={m.year} variants={fadeInUp}>
                                    <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''}`}>
                                        <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-page -translate-x-1/2 mt-2 z-10" />
                                        <div className="hidden sm:block sm:flex-1" />
                                        <div className="flex-1 pl-12 sm:pl-0">
                                            <motion.div
                                                whileHover={{ y: -4 }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                                className="card p-6"
                                            >
                                                <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                                                    <Calendar className="w-4 h-4 text-primary-400" />
                                                    <span className="text-primary-400 font-bold font-display text-lg">{m.year}</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                                                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerGroup>
                    </div>
                </div>
            </section>

            {/* Achievement stats */}
            <section className="py-16 bg-dark-navbar border-y border-gray-800">
                <div className="container-page">
                    <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6" fast>
                        {achievements.map((a) => (
                            <StaggerItem key={a.label} variants={fadeInUp}>
                                <div className="text-center">
                                    <div className="w-14 h-14 rounded-xl bg-primary-600/15 text-primary-400 flex items-center justify-center mx-auto mb-4">
                                        <a.icon className="w-7 h-7" />
                                    </div>
                                    <p className="text-3xl lg:text-4xl font-bold text-white font-display">{a.value}</p>
                                    <p className="text-sm text-gray-400 mt-1">{a.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-dark-stories relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-dark-stories via-dark-navbar to-dark-stories" />
                <div className="container-page relative z-10 text-center">
                    <Reveal>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Let's Build Your Future Together
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                            Book a free consultation today and take the first step toward your international education journey.
                        </p>
                        <Link to="/contact" className="btn-accent text-base">
                            Book Your Free Consultation
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
