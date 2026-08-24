import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Wallet, Languages, FileCheck, Home as HomeIcon, Plane, GraduationCap, Heart, Building } from 'lucide-react';
import PageHero from '@/components/PageHero';
import EnquiryForm from '@/components/EnquiryForm';
import { WHY_GEORGIA_POINTS } from '@/data/content';
import { Reveal, StaggerGroup, StaggerItem, motion, fadeInUp, scaleIn, slideInLeft, slideInRight } from '@/lib/motion';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'badge-check': ShieldCheck, wallet: Wallet, languages: Languages,
    'file-check': FileCheck, home: HomeIcon, plane: Plane,
};

const comparisonData = [
    { feature: 'Average Tuition (Medicine)', georgia: '$5,000/yr', uk: '$40,000/yr', usa: '$55,000/yr' },
    { feature: 'Monthly Living Cost', georgia: '$300-500', uk: '$1,200-1,800', usa: '$1,000-2,000' },
    { feature: 'Visa Difficulty', georgia: 'Low', uk: 'Medium', usa: 'High' },
    { feature: 'English-Taught Programs', georgia: 'Yes', uk: 'Yes', usa: 'Yes' },
    { feature: 'WHO Recognition (Medical)', georgia: 'Yes', uk: 'Yes', usa: 'Yes' },
    { feature: 'Part-time Work Allowed', georgia: 'Yes', uk: 'Yes (20hrs)', usa: 'Yes (20hrs)' },
];

const lifeInGeorgia = [
    { icon: Heart, title: 'Famous Hospitality', description: 'Georgians are known worldwide for their warmth and generosity toward guests and foreigners.' },
    { icon: Building, title: 'Affordable Capital', description: 'Tbilisi offers European-style living at a fraction of Western European costs.' },
    { icon: GraduationCap, title: 'Vibrant Student Life', description: 'A growing international student community with events, clubs, and cultural exchanges.' },
    { icon: Plane, title: 'Easy Travel Access', description: 'Direct flights to most European and Asian cities. Schengen visa-free for many nationalities.' },
];

const galleryImages = [
    { src: 'https://images.pexels.com/photos/7539985/pexels-photo-7539985.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tbilisi', offset: '' },
    { src: 'https://images.pexels.com/photos/1876587/pexels-photo-1876587.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Georgia street', offset: 'mt-8' },
    { src: 'https://images.pexels.com/photos/32998602/pexels-photo-32998602.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tbilisi landscape', offset: '-mt-4' },
    { src: 'https://images.pexels.com/photos/36785172/pexels-photo-36785172.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tbilisi architecture', offset: 'mt-4' },
];

export default function WhyGeorgia() {
    return (
        <>
            <PageHero
                label="Study Destination"
                title="Why Study in Georgia?"
                subtitle="Affordable tuition, globally recognised degrees, and a safe, welcoming environment — Georgia has it all."
                image="https://images.pexels.com/photos/36785172/pexels-photo-36785172.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Why Georgia' }]}
            />

            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">The Advantages</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Six Reasons to Choose Georgia
                        </h2>
                        <p className="text-lg text-gray-400">
                            Georgia is quickly becoming one of the most popular study-abroad destinations. Here's why.
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
                                        <div className="w-12 h-12 rounded-xl bg-primary-600/15 text-primary-400 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerGroup>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-black/20">
                <div className="container-page">
                    <Reveal className="text-center max-w-2xl mx-auto mb-14">
                        <span className="section-label mb-4">See the Difference</span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Georgia vs. Other Destinations
                        </h2>
                        <p className="text-lg text-gray-400">
                            A side-by-side comparison of costs and key factors.
                        </p>
                    </Reveal>
                    <Reveal variants={scaleIn}>
                        <div className="overflow-x-auto">
                            <table className="w-full max-w-4xl mx-auto bg-dark-box rounded-2xl shadow-sm border border-gray-800 overflow-hidden">
                                <thead>
                                    <tr className="bg-black/20 border-b border-gray-800">
                                        <th className="text-left p-4 font-semibold text-gray-300">Feature</th>
                                        <th className="text-center p-4 font-semibold text-primary-400 bg-primary-600/10">Georgia</th>
                                        <th className="text-center p-4 font-semibold text-gray-500">UK</th>
                                        <th className="text-center p-4 font-semibold text-gray-500">USA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <motion.tr
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 }}
                                            className="border-b border-gray-800/50 last:border-0"
                                        >
                                            <td className="p-4 text-gray-300 font-medium">{row.feature}</td>
                                            <td className="p-4 text-center font-semibold text-primary-400 bg-primary-600/5">{row.georgia}</td>
                                            <td className="p-4 text-center text-gray-500">{row.uk}</td>
                                            <td className="p-4 text-center text-gray-500">{row.usa}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <Reveal variants={slideInLeft}>
                            <span className="section-label mb-4">Student Life</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Life in Georgia
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Georgia isn't just about studying — it's about living. From the cobbled streets of Old Tbilisi
                                to the Caucasus mountains, Georgia offers a rich cultural experience alongside your education.
                            </p>
                            <StaggerGroup className="space-y-5" fast>
                                {lifeInGeorgia.map((item) => (
                                    <StaggerItem key={item.title} variants={fadeInUp}>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-accent-500/15 text-accent-400 flex items-center justify-center shrink-0">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                                <p className="text-sm text-gray-400">{item.description}</p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerGroup>
                        </Reveal>
                        <Reveal variants={slideInRight} delay={0.15}>
                            <div className="grid grid-cols-2 gap-4">
                                {galleryImages.map((img, i) => (
                                    <motion.img
                                        key={i}
                                        src={img.src}
                                        alt={img.alt}
                                        className={`rounded-2xl shadow-lg w-full h-64 object-cover ${img.offset}`}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    />
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-black/20">
                <div className="container-page">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <Reveal variants={slideInLeft}>
                            <span className="section-label mb-4">Ready to Go?</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Start Your Georgia Journey
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Tell us about your goals and we'll help you find the perfect university and program in Georgia.
                            </p>
                            <Link to="/universities" className="btn-secondary">
                                Explore Universities
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Reveal>
                        <Reveal variants={scaleIn} delay={0.15}>
                            <EnquiryForm title="Get Free Guidance" subtitle="We'll respond within 24 hours." />
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    );
}
