import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { faqItems } from '@/data/content';
import { Reveal, fadeInUp } from '@/lib/motion';

const categories = ['All', 'General', 'Medical Studies', 'Fees & Costs', 'Visa', 'Admissions', 'Our Services'];

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

    const filtered = activeCategory === 'All' ? faqItems : faqItems.filter((f) => f.category === activeCategory);

    return (
        <>
            <PageHero
                label="Questions & Answers"
                title="Frequently Asked Questions"
                subtitle="Find answers to the most common questions about studying abroad with Future Factory. Can't find what you're looking for? Reach out to us directly."
                image="https://images.pexels.com/photos/6549355/pexels-photo-6549355.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'FAQs' }]}
            />

            <section className="py-16 lg:py-24">
                <div className="container-page max-w-4xl">
                    <Reveal className="flex items-center gap-2 flex-wrap justify-center mb-10">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => { setActiveCategory(cat); setOpenId(null); }}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeCategory === cat
                                        ? 'bg-primary-600 text-white shadow-sm shadow-primary-600/30'
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </Reveal>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-3"
                        >
                            {filtered.map((faq, i) => {
                                const isOpen = openId === faq.id;
                                return (
                                    <motion.div
                                        key={faq.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                        className={`bg-dark-box rounded-2xl border transition-colors duration-300 overflow-hidden ${isOpen ? 'border-primary-600/40 shadow-md' : 'border-gray-800 hover:border-gray-700'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setOpenId(isOpen ? null : faq.id)}
                                            className="w-full flex items-center justify-between gap-4 p-5 text-left"
                                        >
                                            <div className="flex items-center gap-3">
                                                <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-primary-500' : 'text-gray-500'}`} />
                                                <span className="font-semibold text-white">{faq.question}</span>
                                            </div>
                                            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                                <ChevronDown className={`w-5 h-5 shrink-0 ${isOpen ? 'text-primary-500' : 'text-gray-500'}`} />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="px-5 pb-5 text-gray-400 leading-relaxed text-sm ml-8">{faq.answer}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    <Reveal delay={0.1} className="mt-12 text-center bg-dark-box rounded-2xl p-8 border border-gray-800">
                        <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
                        <p className="text-gray-400 mb-6">Our team is ready to help. Get in touch — it's free.</p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link to="/contact" className="btn-primary">
                                Contact Us
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a href="https://wa.me/995555123456" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Us
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
