import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import type { University } from '@/data/content';
import { StarRating } from './Testimonial';

export function UniversityCard({ university }: { university: University }) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="h-full"
        >
            <Link
                to={`/universities/${university.id}`}
                className="card overflow-hidden group flex flex-col h-full"
            >
                <div className="relative h-52 overflow-hidden">
                    <img
                        src={university.image}
                        alt={university.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                            <MapPin className="w-3 h-3" />
                            {university.location}, {university.country}
                        </span>
                    </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors leading-snug">
                            {university.name}
                        </h3>
                        <StarRating rating={Math.round(university.rating)} size={14} />
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">{university.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {university.programs.slice(0, 3).map((program) => (
                            <span key={program} className="px-2 py-1 rounded-md bg-primary-50 text-primary-700 text-xs font-medium">
                                {program}
                            </span>
                        ))}
                        {university.programs.length > 3 && (
                            <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-500 text-xs font-medium">
                                +{university.programs.length - 3} more
                            </span>
                        )}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-sm font-semibold text-gray-900">{university.tuition}</span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                            Details <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
