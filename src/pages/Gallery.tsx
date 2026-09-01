import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Users } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Reveal, StaggerGroup, StaggerItem, fadeInUp, scaleIn } from '@/lib/motion';

interface GalleryEvent {
    id: string;
    title: string;
    date: string;
    location: string;
    attendees: string;
    cover: string;
    description: string;
    images: string[];
}

const events: GalleryEvent[] = [
    {
        id: 'education-fair-2025',
        title: 'International Education Fair 2025',
        date: 'March 15, 2025',
        location: 'Tbilisi, Georgia',
        attendees: '500+',
        cover: 'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=1920',
        description: 'Our flagship education fair bringing together prospective students and partner universities under one roof. Over 500 attendees explored study opportunities across Georgia, Uzbekistan, Canada, and the UK.',
        images: [
            'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/11329863/pexels-photo-11329863.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
    },
    {
        id: 'pre-departure-briefing',
        title: 'Pre-Departure Briefing Session',
        date: 'February 8, 2025',
        location: 'Future Factory Office, Tbilisi',
        attendees: '120+',
        cover: 'https://images.pexels.com/photos/26202153/pexels-photo-26202153.jpeg?auto=compress&cs=tinysrgb&w=1920',
        description: 'A comprehensive briefing for students about to depart for their studies. We covered travel arrangements, accommodation tips, cultural orientation, and what to expect in their first weeks abroad.',
        images: [
            'https://images.pexels.com/photos/26202153/pexels-photo-26202153.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/15141493/pexels-photo-15141493.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/4623520/pexels-photo-4623520.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/7710139/pexels-photo-7710139.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
    },
    {
        id: 'student-sendoff-2024',
        title: 'Student Send-Off Ceremony 2024',
        date: 'August 30, 2024',
        location: 'Tbilisi, Georgia',
        attendees: '200+',
        cover: 'https://images.pexels.com/photos/29275615/pexels-photo-29275615.jpeg?auto=compress&cs=tinysrgb&w=1920',
        description: 'Celebrating the latest batch of students heading off to their universities. An evening of inspiration, networking, and sending our students off with confidence and community.',
        images: [
            'https://images.pexels.com/photos/29275615/pexels-photo-29275615.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/30562665/pexels-photo-30562665.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/39192294/pexels-photo-39192294.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/7944181/pexels-photo-7944181.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
    },
    {
        id: 'visa-workshop',
        title: 'Visa Documentation Workshop',
        date: 'January 20, 2025',
        location: 'Online Webinar',
        attendees: '300+',
        cover: 'https://images.pexels.com/photos/18999302/pexels-photo-18999302.jpeg?auto=compress&cs=tinysrgb&w=1920',
        description: 'A hands-on workshop walking students through the complete visa documentation process for Georgia, Uzbekistan, Canada, and the UK. Our team provided personalised document reviews and submission guidance.',
        images: [
            'https://images.pexels.com/photos/18999302/pexels-photo-18999302.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/15141493/pexels-photo-15141493.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/4623520/pexels-photo-4623520.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/26202153/pexels-photo-26202153.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
    },
    {
        id: 'campus-tour-2024',
        title: 'Partner University Campus Tour',
        date: 'November 12, 2024',
        location: 'Multiple Cities, Georgia',
        attendees: '80+',
        cover: 'https://images.pexels.com/photos/5554257/pexels-photo-5554257.jpeg?auto=compress&cs=tinysrgb&w=1920',
        description: 'We took prospective students on guided tours of our partner university campuses in Tbilisi. Students got to see the facilities, meet faculty, and experience campus life firsthand.',
        images: [
            'https://images.pexels.com/photos/5554257/pexels-photo-5554257.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/31039051/pexels-photo-31039051.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/37762500/pexels-photo-37762500.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/7972526/pexels-photo-7972526.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
    },
    {
        id: 'cultural-orientation',
        title: 'Cultural Orientation Day',
        date: 'September 5, 2024',
        location: 'Tbilisi, Georgia',
        attendees: '150+',
        cover: 'https://images.pexels.com/photos/7973026/pexels-photo-7973026.jpeg?auto=compress&cs=tinysrgb&w=1920',
        description: 'Helping international students settle into Georgian culture. From local cuisine tastings to language basics and city tours, we made sure students felt at home from day one.',
        images: [
            'https://images.pexels.com/photos/7973026/pexels-photo-7973026.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/5538000/pexels-photo-5538000.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/5554257/pexels-photo-5554257.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/7972526/pexels-photo-7972526.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
    },
];

export default function Gallery() {
    const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    return (
        <>
            <PageHero
                label="Our Journey"
                title="Events & Gallery"
                subtitle="Step into the world of Future Factory. Explore the events, workshops, and moments that bring our student community together."
                image="https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]}
            />

            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <StaggerItem key={event.id} variants={scaleIn}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    onClick={() => setSelectedEvent(event)}
                                    className="card overflow-hidden cursor-pointer group h-full flex flex-col"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img src={event.cover} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-box via-dark-box/20 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                                                <Calendar className="w-3 h-3" />
                                                {event.date}
                                            </div>
                                            <h3 className="text-lg font-bold text-white leading-snug">{event.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">{event.description}</p>
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto pt-4 border-t border-gray-800">
                                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                                            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {event.attendees}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedEvent(null)}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 lg:p-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-dark-box rounded-2xl border border-gray-800 max-w-4xl w-full my-8 overflow-hidden"
                        >
                            <div className="relative h-56 lg:h-72 overflow-hidden">
                                <img src={selectedEvent.cover} alt={selectedEvent.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-box to-transparent" />
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6 lg:p-8">
                                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3 flex-wrap">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {selectedEvent.date}</span>
                                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {selectedEvent.location}</span>
                                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {selectedEvent.attendees}</span>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-3">{selectedEvent.title}</h2>
                                <p className="text-gray-400 leading-relaxed mb-6">{selectedEvent.description}</p>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                    {selectedEvent.images.map((img, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.08 }}
                                            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                                            onClick={() => setLightboxImage(img)}
                                        >
                                            <img src={img} alt={`${selectedEvent.title} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxImage(null)}
                        className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
                    >
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            src={lightboxImage}
                            alt="Gallery"
                            className="max-w-full max-h-[85vh] rounded-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
0