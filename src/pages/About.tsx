import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Award, Users, Globe2, HandHeart } from 'lucide-react';
import PageHero from '@/components/PageHero';
import EnquiryForm from '@/components/EnquiryForm';
import { Reveal, StaggerGroup, StaggerItem, motion, fadeInUp, scaleIn, slideInLeft, slideInRight } from '@/lib/motion';

const values = [
    { icon: Heart, title: 'Student-First', description: 'Every decision we make is guided by what\'s best for our students and their families.' },
    { icon: Award, title: 'Excellence', description: 'We maintain the highest standards in every service we provide, from consultation to visa support.' },
    { icon: HandHeart, title: 'Transparency', description: 'No hidden fees, no false promises. We\'re honest about outcomes and costs from day one.' },
    { icon: Globe2, title: 'Global Mindset', description: 'We think beyond borders, opening doors to education opportunities across four continents.' },
];

const milestones = [
    { year: '2018', title: 'Future Factory Founded', description: 'Started with a mission to make international education accessible to all.' },
    { year: '2020', title: '500 Students Placed', description: 'Reached our first major milestone despite global challenges.' },
    { year: '2022', title: 'Expanded to Uzbekistan', description: 'Added Uzbekistan as a destination, offering more affordable options.' },
    { year: '2024', title: '2,500+ Students & Counting', description: 'Grew to 25+ university partnerships across 4 countries.' },
];

export default function About() {
    return (
        <>
            <PageHero
                label="About Us"
                title="Your Trusted Study Abroad Partner"
                subtitle="Future Factory is dedicated to making international education accessible, affordable, and achievable for students worldwide."
                image="https://images.pexels.com/photos/32213217/pexels-photo-32213217.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
            />

            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <Reveal variants={slideInLeft}>
                            <span className="section-label mb-4">Our Mission</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Empowering Students to Learn Without Limits
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                We believe every student deserves access to quality education, regardless of where they're from.
                                Our mission is to break down the barriers — financial, geographic, and informational — that prevent
                                talented students from reaching their full potential.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Since 2018, we've helped over 2,500 students from India, Nigeria, the UAE, Kenya, and beyond
                                find their place at universities in Georgia, Uzbekistan, Canada, and the UK. We don't just place
                                students — we stay with them throughout their journey.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="card p-5">
                                    <Target className="w-8 h-8 text-primary-500 mb-2" />
                                    <h3 className="font-bold text-white mb-1">Our Mission</h3>
                                    <p className="text-sm text-gray-400">Make global education accessible to every aspiring student.</p>
                                </div>
                                <div className="card p-5">
                                    <Eye className="w-8 h-8 text-accent-500 mb-2" />
                                    <h3 className="font-bold text-white mb-1">Our Vision</h3>
                                    <p className="text-sm text-gray-400">Be the world's most trusted study-abroad consultancy.</p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal variants={slideInRight} delay={0.15}>
                            <div className="relative">
                                <motion.img
                                    src="https://images.pexels.com/photos/7972324/pexels-photo-7972324.jpeg?auto=compress&cs=tinysrgb&w=900"
                                    alt="Students on campus"
                                    className="rounded-2xl shadow-xl w-full"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute -bottom-6 -left-6 bg-dark-box rounded-2xl shadow-xl p-6 border border-gray-800 hidden sm:block"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-primary-600 text-white flex items-center justify-center">
                                            <Users className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-white font-display">2,500+</p>
                                            <p className="text-sm text-gray-400">Students Placed</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-black/20">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">What We Stand For</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Core Values</h2>
                        <p className="text-lg text-gray-400">The principles that guide everything we do.</p>
                    </Reveal>
                    <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <StaggerItem key={value.title} variants={scaleIn}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    className="card p-6 text-center group h-full"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary-600/15 text-primary-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                        <value.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">Our Journey</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Milestones</h2>
                        <p className="text-lg text-gray-400">From a small team to a trusted international consultancy.</p>
                    </Reveal>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-600/30 via-primary-600/50 to-accent-500/30" />
                        {milestones.map((m, i) => (
                            <Reveal key={m.year} variants={i % 2 === 0 ? slideInRight : slideInLeft} delay={0.05} amount={0.3}>
                                <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''}`}>
                                    <div className="hidden sm:block sm:w-1/2" />
                                    <motion.div
                                        whileInView={{ scale: [1, 1.3, 1] }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="absolute left-0 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-600/20 z-10"
                                    />
                                    <div className="pl-8 sm:pl-0 sm:w-1/2 sm:pr-10">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                            className="card p-5"
                                        >
                                            <span className="text-primary-400 font-bold text-lg font-display">{m.year}</span>
                                            <h3 className="font-bold text-white mt-1 mb-1">{m.title}</h3>
                                            <p className="text-sm text-gray-400">{m.description}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-dark-stories">
                <div className="container-page text-center">
                    <Reveal>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Want to Be Our Next Success Story?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                            Get in touch today and take the first step toward your international education.
                        </p>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                            <Link to="/contact" className="btn-accent text-base">
                                Book a Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
