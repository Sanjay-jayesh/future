import { useParams, Link, Navigate } from 'react-router-dom';
import { Quote, MapPin, GraduationCap, ArrowLeft, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaSection } from '@/components/CtaSection';
import { EnquiryForm } from '@/components/EnquiryForm';
import { getStory, studentStories } from '@/data/stories';

export function StoryDetailPage() {
    const { id } = useParams();
    const story = id ? getStory(id) : undefined;

    if (!story) return <Navigate to="/success-stories" replace />;

    const related = studentStories.filter((s) => s.id !== story.id).slice(0, 3);

    return (
        <>
            <PageHero
                eyebrow={`${story.country} · ${story.year}`}
                title={story.name}
                subtitle={story.quote}
                image={story.image}
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Success Stories', path: '/success-stories' },
                    { label: story.name },
                ]}
            >
                <div className="flex flex-wrap gap-5">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                        <MapPin className="h-4 w-4 text-brand-400" /> {story.origin}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                        <GraduationCap className="h-4 w-4 text-brand-400" /> {story.course}
                    </div>
                </div>
            </PageHero>

            {/* Story body */}
            <section className="py-20 lg:py-28">
                <div className="container-page">
                    <div className="mx-auto max-w-3xl">
                        <Reveal>
                            <div className="mb-8 flex items-center gap-4">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="h-16 w-16 rounded-full object-cover shadow-md"
                                    loading="lazy"
                                />
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900">{story.name}</h2>
                                    <p className="text-sm text-slate-500">{story.university}</p>
                                </div>
                            </div>
                            <div className="rounded-2xl border-l-4 border-brand-500 bg-brand-50 p-6">
                                <Quote className="mb-3 h-6 w-6 text-brand-400" />
                                <p className="text-lg font-medium italic text-slate-800">{story.quote}</p>
                            </div>
                            <div className="mt-8">
                                <p className="text-lg leading-relaxed text-slate-600">{story.story}</p>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                    {story.course}
                                </span>
                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                    {story.country}
                                </span>
                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                    {story.origin}
                                </span>
                                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                    {story.year}
                                </span>
                            </div>
                        </Reveal>
                    </div>

                    <div className="mx-auto mt-12 max-w-3xl">
                        <Link to="/success-stories" className="btn-secondary">
                            <ArrowLeft className="h-4 w-4" /> Back to all stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* Enquiry */}
            <section className="bg-slate-50 py-20 lg:py-28">
                <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
                    <Reveal>
                        <span className="section-eyebrow">Your turn</span>
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                            Want a story like {story.name.split(' ')[0]}'s?
                        </h2>
                        <p className="mt-4 text-slate-600">
                            Book a free consultation today. We will help you find the right university, handle your application and
                            visa, and support you every step of the way — just like we did for {story.name.split(' ')[0]}.
                        </p>
                    </Reveal>
                    <Reveal delay={150}>
                        <EnquiryForm leadType="consultation" compact title="Start your journey" />
                    </Reveal>
                </div>
            </section>

            {/* Related stories */}
            <section className="py-16 lg:py-24">
                <div className="container-page">
                    <h2 className="mb-8 text-2xl font-bold text-slate-900">More success stories</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {related.map((s) => (
                            <Link key={s.id} to={`/success-stories/${s.id}`} className="card group flex flex-col overflow-hidden">
                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={s.image}
                                        alt={s.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-slate-900 group-hover:text-brand-700">{s.name}</h3>
                                    <p className="mt-1 text-xs text-slate-500">{s.course}</p>
                                    <p className="mt-2 text-sm italic text-slate-600 line-clamp-2">"{s.quote}"</p>
                                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2">
                                        Read <ArrowRight className="h-3.5 w-3.5 transition-all" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
        </>
    );
}
