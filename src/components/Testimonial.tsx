import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={size}
                    className={i < rating ? 'fill-secondary-400 text-secondary-400' : 'fill-gray-200 text-gray-200'}
                />
            ))}
        </div>
    );
}

export function QuoteCard({
    text,
    name,
    role,
    avatar,
    rating,
}: {
    text: string;
    name: string;
    role: string;
    avatar?: string;
    rating: number;
}) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="card p-6 h-full flex flex-col"
        >
            <Quote className="w-8 h-8 text-primary-200 mb-3" />
            <p className="text-gray-700 leading-relaxed flex-1">{text}</p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
                {avatar ? (
                    <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
                        {name.charAt(0)}
                    </div>
                )}
                <div className="flex-1">
                    <p className="font-semibold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
                <StarRating rating={rating} />
            </div>
        </motion.div>
    );
}
