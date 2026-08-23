import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { heroSlides } from '@/data/content';

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), []);
    const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next, isPaused]);

    const slideVariants = {
        enter: { opacity: 0, scale: 1.08 },
        center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const } },
        exit: { opacity: 0, transition: { duration: 1, ease: 'easeInOut' as const } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
        }),
    };

    return (
        <section
            className="relative h-screen min-h-[680px] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence mode="sync">
                <motion.div
                    key={current}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                >
                    <img src={heroSlides[current].image} alt={heroSlides[current].label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/40 to-gray-950/85" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 h-full flex items-center">
                <div className="container-page">
                    <div className="max-w-3xl">
                        <motion.div
                            className="flex items-center gap-3 mb-5"
                            custom={0}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            key={`badge-${current}`}
                        >
                            <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
                                {heroSlides[current].label}
                            </span>
                            <span className="text-white/80 text-sm hidden sm:inline">{heroSlides[current].sublabel}</span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-shadow-lg leading-[1.05]"
                            custom={1}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            key={`title-${current}`}
                        >
                            Study in Georgia with{' '}
                            <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
                                Expert Guidance
                            </span>
                        </motion.h1>

                        <motion.p
                            className="mt-6 text-xl text-white/90 text-shadow max-w-2xl leading-relaxed"
                            custom={2}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            key={`desc-${current}`}
                        >
                            Your gateway to world-class education in Georgia, Uzbekistan, Europe, and the UK.
                            From university selection to visa support — we handle it all, at no cost to you.
                        </motion.p>

                        <motion.div
                            className="mt-8 flex flex-wrap items-center gap-3"
                            custom={3}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            key={`buttons-${current}`}
                        >
                            <Link to="/contact" className="btn-primary text-base">
                                Book a Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a href="https://wa.me/995555123456" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Us
                            </a>
                            <Link to="/universities" className="btn-secondary text-base bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50">
                                Apply Now
                            </Link>
                        </motion.div>

                        <motion.div
                            className="mt-10 flex items-center gap-6"
                            custom={4}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            key={`nav-${current}`}
                        >
                            {heroSlides.map((slide, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`flex flex-col items-start gap-1 transition-all duration-300 ${i === current ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                                        }`}
                                >
                                    <span className={`text-xs font-bold uppercase tracking-wider ${i === current ? 'text-white' : 'text-white/60'}`}>
                                        {slide.label}
                                    </span>
                                    <div className="relative h-0.5 w-16 bg-white/20 rounded-full overflow-hidden">
                                        {i === current && (
                                            <motion.div
                                                className="absolute inset-y-0 left-0 bg-white rounded-full"
                                                initial={{ width: '0%' }}
                                                animate={{ width: isPaused ? '30%' : '100%' }}
                                                transition={{ duration: isPaused ? 0.3 : 6, ease: 'linear' }}
                                            />
                                        )}
                                        {i !== current && (
                                            <div className="absolute inset-y-0 left-0 w-6 bg-white/40 rounded-full" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous"
            >
                <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next"
            >
                <ChevronRight className="w-5 h-5" />
            </motion.button>
        </section>
    );
}
