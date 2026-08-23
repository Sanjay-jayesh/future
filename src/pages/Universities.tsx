import { useState } from 'react';
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import { UniversityCard } from '@/components/UniversityCard';
import { universities } from '@/data/content';
import { Reveal, scaleIn } from '@/lib/motion';

const countries = ['All', 'Georgia', 'Uzbekistan', 'UK'];

export default function Universities() {
    const [filter, setFilter] = useState('All');
    const filtered = filter === 'All' ? universities : universities.filter((u) => u.country === filter);

    return (
        <>
            <PageHero
                label="Our Partners"
                title="Universities We Partner With"
                subtitle="Explore our network of trusted universities across Georgia, Uzbekistan, and the UK. Each offers globally recognised programs tailored to international students."
                image="https://images.pexels.com/photos/11932106/pexels-photo-11932106.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Universities' }]}
            />

            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                {filtered.length} {filtered.length === 1 ? 'University' : 'Universities'}
                            </h2>
                            <p className="text-gray-500 text-sm mt-1">Filter by country to narrow your search</p>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter className="w-4 h-4 text-gray-400" />
                            {countries.map((country) => (
                                <motion.button
                                    key={country}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setFilter(country)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${filter === country
                                            ? 'bg-primary-600 text-white shadow-sm shadow-primary-600/30'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {country}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((uni) => (
                                <motion.div
                                    key={uni.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <UniversityCard university={uni} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
