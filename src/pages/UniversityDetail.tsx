import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Users, CheckCircle2, Star, GraduationCap, Building } from 'lucide-react';
import { universities } from '@/data/content';
import { UniversityCard } from '@/components/UniversityCard';
import EnquiryForm from '@/components/EnquiryForm';
import { StarRating } from '@/components/Testimonial';

export default function UniversityDetail() {
    const { id } = useParams();
    const university = universities.find((u) => u.id === id);

    if (!university) return <Navigate to="/universities" replace />;

    const related = universities.filter((u) => u.id !== university.id && u.country === university.country).slice(0, 3);
    const fallback = universities.filter((u) => u.id !== university.id).slice(0, 3);
    const relatedList = related.length > 0 ? related : fallback;

    return (
        <>
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <img src={university.image} alt={university.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-gray-950/40" />
                <div className="container-page relative z-10 h-full flex flex-col justify-end pb-12">
                    <nav className="flex items-center gap-2 text-sm text-white/70 mb-4">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <span className="text-white/40">/</span>
                        <Link to="/universities" className="hover:text-white">Universities</Link>
                        <span className="text-white/40">/</span>
                        <span className="text-white">{university.name}</span>
                    </nav>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium">
                            <MapPin className="w-3 h-3" /> {university.location}, {university.country}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-500/90 text-white text-sm font-medium">
                            <Star className="w-3 h-3 fill-white" /> {university.rating}
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white text-shadow-lg max-w-3xl">{university.name}</h1>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <div className="grid lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 space-y-10">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">{university.description}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="card p-5 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900 font-display">{university.established}</p>
                                        <p className="text-sm text-gray-500">Established</p>
                                    </div>
                                </div>
                                <div className="card p-5 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900 font-display">{university.students}</p>
                                        <p className="text-sm text-gray-500">Students</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Programs</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {university.programs.map((program) => (
                                        <div key={program} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors">
                                            <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                                                <GraduationCap className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium text-gray-800">{program}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {university.highlights.map((highlight) => (
                                        <div key={highlight} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tuition Fees</h2>
                                <div className="card p-6 bg-gradient-to-br from-primary-50 to-accent-50 border-primary-100">
                                    <p className="text-3xl font-bold text-primary-700 font-display">{university.tuition}</p>
                                    <p className="text-gray-600 mt-2 text-sm">Additional costs may include registration, health insurance, and accommodation. Living expenses average $300-500/month.</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
                                <ul className="space-y-3">
                                    {[
                                        'Secondary school certificate / 12th grade diploma',
                                        'Passport copy (valid for at least 18 months)',
                                        'Passport-size photographs',
                                        'Proof of English proficiency (IELTS 5.5+ or equivalent, or internal test)',
                                        'Completed application form (we provide this)',
                                        'Medical fitness certificate',
                                    ].map((req, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                                {i + 1}
                                            </div>
                                            <span className="text-gray-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="card p-6">
                                    <h3 className="font-bold text-gray-900 mb-1">Quick Facts</h3>
                                    <div className="space-y-3 mt-4">
                                        <div className="flex items-center justify-between py-2 border-b border-gray-50">
                                            <span className="text-sm text-gray-500 flex items-center gap-2"><Building className="w-4 h-4" /> Country</span>
                                            <span className="text-sm font-semibold text-gray-900">{university.country}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2 border-b border-gray-50">
                                            <span className="text-sm text-gray-500 flex items-center gap-2"><MapPin className="w-4 h-4" /> Location</span>
                                            <span className="text-sm font-semibold text-gray-900">{university.location}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2 border-b border-gray-50">
                                            <span className="text-sm text-gray-500 flex items-center gap-2"><Star className="w-4 h-4" /> Rating</span>
                                            <StarRating rating={Math.round(university.rating)} size={14} />
                                        </div>
                                        <div className="flex items-center justify-between py-2 border-b border-gray-50">
                                            <span className="text-sm text-gray-500 flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Programs</span>
                                            <span className="text-sm font-semibold text-gray-900">{university.programs.length}</span>
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <span className="text-sm text-gray-500 flex items-center gap-2"><Calendar className="w-4 h-4" /> Founded</span>
                                            <span className="text-sm font-semibold text-gray-900">{university.established}</span>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="btn-primary w-full mt-5 text-sm">
                                        Apply to This University
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                <EnquiryForm compact title="Have Questions?" subtitle="Ask us anything about this university." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container-page">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Related Universities</h2>
                        <Link to="/universities" className="text-primary-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedList.map((uni) => (
                            <UniversityCard key={uni.id} university={uni} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
