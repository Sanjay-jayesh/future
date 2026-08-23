import { Link } from 'react-router-dom';
import {
    ArrowRight, Users, CheckCircle2, Building2, Globe,
    ShieldCheck, Wallet, Languages, FileCheck, Home as HomeIcon, Plane,
    MapPin, GraduationCap, Quote,
} from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import { UniversityCard } from '@/components/UniversityCard';
import EnquiryForm from '@/components/EnquiryForm';
import { StarRating, QuoteCard } from '@/components/Testimonial';
import { universities, successStories, testimonials, stats, WHY_GEORGIA_POINTS, ADMISSION_STEPS } from '@/data/content';
import { Reveal, StaggerGroup, StaggerItem, motion, fadeInUp, scaleIn } from '@/lib/motion';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    users: Users, 'check-circle': CheckCircle2, building: Building2, globe: Globe,
    'badge-check': ShieldCheck, wallet: Wallet, languages: Languages,
    'file-check': FileCheck, home: HomeIcon, plane: Plane,
};

export default function Home() {
    const featuredUniversities = universities.filter((u) => u.featured).slice(0, 4);

    return (
        <>
            <HeroCarousel />

            {/* Stats Bar */}
            <section className="bg-primary-900 -mt-px relative z-20">
                <div className="container-page py-10">
                    <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6" fast>
                        {stats.map((stat) => {
                            const Icon = iconMap[stat.icon] ?? Users;
                            return (
                                <StaggerItem key={stat.label} variants={fadeInUp}>
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0"
                                        >
                                            <Icon className="w-6 h-6" />
                                        </motion.div>
                                        <div>
                                            <p className="text-3xl font-bold text-white font-display">{stat.value}</p>
                                            <p className="text-sm text-white/70">{stat.label}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerGroup>
                </div>
            </section>

            {/* Why Georgia */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">Why Study in Georgia</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Everything You Need to Know
                        </h2>
                        <p className="text-lg text-gray-600">
                            Georgia offers world-class education at affordable prices, with globally recognised degrees and a safe, welcoming environment.
                        </p>
                    </Reveal>
                    <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {WHY_GEORGIA_POINTS.map((point) => {
                            const Icon = iconMap[point.icon] ?? ShieldCheck;
                            return (
                                <StaggerItem key={point.title}>
                                    <motion.div
                                        whileHover={{ y: -6 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                        className="card p-6 group h-full"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerGroup>
                    <Reveal delay={0.2} className="text-center mt-10">
                        <Link to="/why-georgia" className="btn-secondary">
                            Learn More About Studying in Georgia
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* Featured Universities */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="container-page">
                    <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                        <div className="max-w-xl">
                            <span className="section-label mb-4">Our Partners</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Featured Universities
                            </h2>
                            <p className="text-lg text-gray-600">
                                We partner with Georgia's top universities to bring you the best education options.
                            </p>
                        </div>
                        <Link to="/universities" className="btn-secondary shrink-0">
                            View All Universities
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Reveal>
                    <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredUniversities.map((uni) => (
                            <StaggerItem key={uni.id} variants={scaleIn}>
                                <UniversityCard university={uni} />
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">Simple & Transparent</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Your Admission Journey
                        </h2>
                        <p className="text-lg text-gray-600">
                            From your first consultation to landing in Georgia — we guide you through every step.
                        </p>
                    </Reveal>
                    <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ADMISSION_STEPS.map((step) => (
                            <StaggerItem key={step.step}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    className="relative card p-6 group h-full"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-4xl font-bold text-primary-100 font-display group-hover:text-primary-200 transition-colors">
                                            {step.step}
                                        </span>
                                        <div className="h-px flex-1 bg-gradient-to-r from-primary-100 to-transparent" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 lg:py-28 bg-gray-950 relative overflow-hidden">
                <motion.div
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    className="absolute inset-0 opacity-10"
                >
                    <img src="https://images.pexels.com/photos/32998602/pexels-photo-32998602.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
                </motion.div>
                <div className="container-page relative z-10">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4">
                            Real Students, Real Results
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Success Stories
                        </h2>
                        <p className="text-lg text-white/70">
                            Meet students who turned their dreams into reality with Future Factory.
                        </p>
                    </Reveal>
                    <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {successStories.slice(0, 3).map((story) => (
                            <StaggerItem key={story.id} variants={scaleIn}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300 h-full"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img src={story.image} alt={story.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-xl font-bold text-white">{story.name}</h3>
                                            <p className="text-sm text-white/70 flex items-center gap-1">
                                                <MapPin className="w-3 h-3" /> {story.origin}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <GraduationCap className="w-4 h-4 text-secondary-400" />
                                            <span className="text-sm text-white/90 font-medium">{story.course}</span>
                                        </div>
                                        <p className="text-sm text-white/70 line-clamp-3 mb-4">{story.quote}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-white/50">{story.university}</span>
                                            <StarRating rating={story.rating} size={14} />
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                    <Reveal delay={0.15} className="text-center mt-10">
                        <Link to="/success-stories" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50">
                            Read All Success Stories
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">What People Say</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Trusted by Students & Parents
                        </h2>
                    </Reveal>
                    <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t) => (
                            <StaggerItem key={t.id} variants={fadeInUp}>
                                <QuoteCard {...t} />
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            {/* Quick Enquiry */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-white to-accent-50">
                <div className="container-page">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <Reveal variants={fadeInUp}>
                            <span className="section-label mb-4">Get Started Today</span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                Have Questions? Send Us an Enquiry
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Fill out the form and one of our expert consultants will get back to you within 24 hours.
                                It's free, confidential, and there's no obligation.
                            </p>
                            <StaggerGroup className="space-y-4" fast>
                                {[
                                    'Free, no-obligation consultation',
                                    'Personalised university recommendations',
                                    'Complete visa & application support',
                                    'Accommodation assistance included',
                                ].map((item) => (
                                    <StaggerItem key={item} variants={fadeInUp}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-success-600" />
                                            </div>
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerGroup>
                        </Reveal>
                        <Reveal variants={scaleIn} delay={0.15}>
                            <EnquiryForm
                                title="Quick Enquiry"
                                subtitle="Fill in your details and we'll be in touch within 24 hours."
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 bg-primary-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-accent-800" />
                <div className="container-page relative z-10 text-center">
                    <Reveal>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Ready to Start Your Study Abroad Journey?
                        </h2>
                        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                            Join 2,500+ students who trusted Future Factory to guide them to their dream education.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link to="/contact" className="btn-accent text-base">
                                Book Your Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a href="https://wa.me/995555123456" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                                Chat on WhatsApp
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
