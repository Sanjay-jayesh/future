import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, GraduationCap, Quote } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { StarRating } from '@/components/Testimonial';
import { successStories } from '@/data/content';
import EnquiryForm from '@/components/EnquiryForm';
import { Reveal, StaggerGroup, StaggerItem, motion, scaleIn, slideInLeft, slideInRight } from '@/lib/motion';

export default function SuccessStories() {
    return (
        <>
            <PageHero
                label="Real Stories"
                title="Student Success Stories"
                subtitle="Meet the students who turned their study-abroad dreams into reality. Their journeys are proof that with the right guidance, anything is possible."
                image="https://images.pexels.com/photos/20240506/pexels-photo-20240506.jpeg?auto=compress&cs=tinysrgb&w=1920"
                breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Success Stories' }]}
            />

            <section className="py-20 lg:py-28 bg-dark-stories">
                <div className="container-page">
                    <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {successStories.map((story) => (
                            <StaggerItem key={story.id} variants={scaleIn}>
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    className="bg-dark-storiesBox rounded-2xl border border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="relative h-72 overflow-hidden">
                                        <img src={story.image} alt={story.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-storiesBox to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-xl font-bold text-white">{story.name}</h3>
                                            <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                                                <MapPin className="w-3 h-3" /> {story.origin}
                                            </p>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className="px-2.5 py-1 rounded-full bg-secondary-500 text-white text-xs font-bold">{story.year}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary-600/15 text-primary-400 flex items-center justify-center">
                                                <GraduationCap className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-white">{story.course}</p>
                                                <p className="text-xs text-gray-500">{story.university}</p>
                                            </div>
                                        </div>
                                        <Quote className="w-6 h-6 text-primary-600/40 mb-2" />
                                        <p className="text-gray-400 text-sm leading-relaxed flex-1">{story.quote}</p>
                                        <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
                                            <span className="text-xs text-gray-500">{story.country}</span>
                                            <StarRating rating={story.rating} size={14} />
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            <section className="py-20 lg:py-28 bg-black/20">
                <div className="container-page">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <Reveal variants={slideInLeft}>
                            <span className="section-label mb-4">Your Turn</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Be Our Next Success Story
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Every student you see on this page started exactly where you are now — with a dream and a question.
                                Take the first step today. Our consultation is free, and your story could be the next one we share.
                            </p>
                            <Link to="/contact" className="btn-primary">
                                Start Your Journey
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Reveal>
                        <Reveal variants={scaleIn} delay={0.15}>
                            <EnquiryForm title="Send Your Enquiry" subtitle="We'll help you write your success story." />
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    );
}
