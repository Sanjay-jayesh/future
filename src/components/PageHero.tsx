import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PageHeroProps {
    label?: string;
    title: string;
    subtitle?: string;
    image: string;
    breadcrumb?: { label: string; to?: string }[];
}

export default function PageHero({ label, title, subtitle, image, breadcrumb }: PageHeroProps) {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
            >
                <img src={image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-dark-page" />
            </motion.div>

            <div className="container-page relative z-10">
                {breadcrumb && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-2 text-sm text-gray-400 mb-4"
                    >
                        {breadcrumb.map((item, i) => (
                            <span key={i} className="flex items-center gap-2">
                                {item.to ? (
                                    <Link to={item.to} className="hover:text-white transition-colors">{item.label}</Link>
                                ) : (
                                    <span className="text-white">{item.label}</span>
                                )}
                                {i < breadcrumb.length - 1 && <span className="text-gray-600">/</span>}
                            </span>
                        ))}
                    </motion.nav>
                )}
                {label && (
                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="section-label mb-4 inline-flex"
                    >
                        {label}
                    </motion.span>
                )}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-shadow-lg max-w-3xl"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-5 text-lg text-gray-300 text-shadow max-w-2xl leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
}
